import * as util from './util'

const privateFunctions = {
    'defaultFulfill': Symbol('default-fulfill'),
    'defaultReject': Symbol('default-reject')
}


/**
 * 1，输入如果与promise指向同一个，则reject
 * 2，如果是promise，等它执行完
 * 3，如果是function||object，且为thenable对象，则用x的状态去决议promise,即fullfill或者reject
 * 4, 如果x是非thenable对象,或者x本身就不是对象，那么直接fulfilled掉
 * @param  {[type]} promise [description]
 * @param  {[type]} x       [description]
 * @return {[type]}         [description]
 */
function _verifyAndResolve(promise, x) {

    if (promise === x) {
        promise.executeResolution('rejected', new TypeError('circulation in resolution'))
    } else if (util.isTypeof('MyPromise')(x)) {

        x.then(v => {
            promise.executeResolution('fulfilled', v);
        }, r => {
            promise.executeResolution('rejected', r)
        })

    } else if (util.isTypeof('Function||Object')(x)) {

        resolveWithXThen(promise,x);

    } else promise.executeResolution('fulfilled', x)
}

/**
 * 用x的状态去决议promise的,并且需要注意的是多次决议无效，只处理第一次,即保证不管外部输入的x多么不安全
 * （即比如状态暴露，外部能多次改变状态），resolve完的始终是一个只能决议一次的安全的promise
 * @param  {[type]} promise [description]
 * @param  {[type]} x       [description]
 * @return {[type]}         [description]
 */

function resolveWithXThen(promise, x) {

    let executed = false;
    try {
        let xThen = x.then;
        if (!(xThen && util.isFunction(xThen))) return promise.executeResolution('fulfilled', x)

        xThen = xThen.bind(x);
        xThen(function resolve(y) {
            if (executed) return       //y 为thenable 的 thenable。但是一旦执行完就不可再次执行（异步函数，即放进队列里面去后就不准再添加改变状态的函数了）
            _verifyAndResolve(promise, y);
            executed = true;
        }, function reject(reason) {
            if (executed) return
            promise.executeResolution('rejected', reason)
            executed = true;
        })

    } catch (e) {
        if(executed) return;
        promise.executeResolution('rejected', e);
    }
}


class MyPromise {
    // const states = Symbol(['pending', 'fulfilled', 'rejected']); //私有属性#
    constructor(executor = null) {
        this.state = 'pending';
        this.value = null;

        this.onFulfilledQueue = [];
        this.onRejectedQueue = [];
        this.multiPromise2Cb = [];

        this.executeResolution.bind(this);
        this.then.bind(this)
        this.checkAndExecute.bind(this)
        this._doneFullOrRej.bind(this)

        const resolve = (value) => {
            //不安全的值-> 安全的只决议一次的promise，出错后直接reject，而不会执行下面fulfilled
            try {
                _verifyAndResolve(this, value);
                //否则直接fulfilled
                // this.executeResolution('fulfilled', value);
            } catch (e) {
                this.executeResolution('rejected', e);
            }
        }

        const reject = (reason) => {
            this.value = reason
            this.executeResolution('rejected', reason);
        }

        if (executor) executor(resolve, reject); //因为是直接传递的函数，如果不绑定this的话，传过去的this实际上就变成了undefined
    }


    /**
     * 1处： 一旦决议，不得回转，比如在promise里面调用 resolve(v)后调用reject(err)，是不会生效的
     * 2处： 保证只能有一个函数被执行
     * testcase: p1.then p1.then 
     * @param  {[type]} state  [description]
     * @param  {[type]} result [description]
     * @return {[type]}        [description]
     */
    executeResolution(state, result) {
        if (this.state !== 'pending') return //1
        this.state = state;
        this.value = result;

        this.checkAndExecute();
    }

    catch (reject) {
        return this.then(null, reject);
    }

    /**
     * then 中注册函数后，如果当前状态在之前已经变更了 ，那么立刻执行
     * @return {[type]} [description]
     */
    checkAndExecute() {
        if (this.state === 'pending') return
        const callbackQueue = this.state === 'fulfilled' ? this.onFulfilledQueue : this.onRejectedQueue; //2
        const self = this;

        callbackQueue.forEach((fn, i) => {
            util.asyncCallback(fn, self.value, self.multiPromise2Cb[i]);
        })

        this.onRejectedQueue = [];
        this.onFulfilledQueue = [];
        this.multiPromise2Cb = []
    }

    /**
     * 注册函数,同时监听当前promise的值，一有值就用它去resolve promise2
     * 每一个promise对象都有一对自己的执行队列（fulfilled，reject,链式调用会生成一个新的promise对象，队列会重新创建）
     * 同时该promise也应该是被决议了的，具体什么状态应该看之前promise（当前promise）的状态.具体来说之前fulfill或者reject必须有
     * 返回值，用这个值v去执行resolveWithX(promise2,v), 得到这个值得过程中出了问题直接拒绝掉promise2,
     * @param  {[type]} onFulfilled [description]
     * @param  {[type]} onRejected  [description]
     * @return {[type]}             [description]
     */
    then(onFulfilled = null, onRejected = null) {
        const self = this;
        const isFunction = util.isTypeof('Function')

        if (!isFunction(onFulfilled)) onFulfilled = self[privateFunctions.defaultFulfill]
        if (!isFunction(onRejected)) onRejected = self[privateFunctions.defaultReject]
        self.onFulfilledQueue.push(onFulfilled);
        self.onRejectedQueue.push(onRejected);

        //同步执行下去的，因此一个promise的ful,rej,以及promise2的resolve函数是可以得到的。但是执行的话顺序就要区分。
        const promise2 = new MyPromise(function(resolve, reject) {
            //用onfullfilled或reject的返回值去resolve promise2
            self._doneFullOrRej(function(err, value, isResolve) {
                if (isResolve) resolve(value);
                else reject(err)
                    // if (err) return reject(err);
                    // if(value) resolve(value); //因为myPromise的resolve部分已经定义好了，要不然还要用resolveWithX(this,value)来操作
            });
        })
        self.checkAndExecute();
        return promise2;

    }

    /**
     * fn: function(err,value),将promise2挂上来，在asyncCallback里面监听fulfill/reject结果
     * @param  {Function} fn [description]
     * @return {[type]}      [description]
     */
    _doneFullOrRej(fn) {
        this.multiPromise2Cb.push(fn);
        // this.multiPromise2Cb.push(function(){
        //     setTimeout(fn)
        // });
    }




    /**
     * 私有方法，默认的fulfill函数跟reject函数
     * 
     */
    [privateFunctions.defaultFulfill](value) {
        return value;
    }

    [privateFunctions.defaultReject](reason) {
        throw reason;
    }

    /**
     * 类方法
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    // static resolve(value = null) {
    //     let promise = new MyPromise();
    //     _verifyAndResolve(promise, value);
    //     return promise;
    // }

    static reject(reason) {
        return new MyPromise(function(resolve, reject) {
            reject(reason)
        });
    }

    static all(iterable) {

    }

    static race(iterable) {

    }

    static promisify(fn,options){
        if(!util.isFunction(fn)) throw new TypeError(util.extractFnName(fn) + 'is not a function');
        const defaultOptions = {
            multiArgs : false,
            context: this
        }
        
        const mergedOptions = Object.assign({},defaultOptions,options);
        
        return (...args)=>{
            return new MyPromise((resolve,reject)=>{

                const defaultCallback = (err,...values)=>{
                    if(err) reject(err);

                    let value = values;
                    if(!mergedOptions.multiArgs) value = value[0];//默认用第一个值去fullfill
                    resolve(value);     //resolve?还是fulfill,因为这边是非fun非Object，resolve等于fulfill
                }

                let finalArgs = args.concat(defaultCallback);
                try{
                    fn.apply(mergedOptions.context,finalArgs);
                }catch(err){
                    reject(err); //callback不一定在下一轮event-loop里面执行，有两种可能，一个是执行fn的时候就出错（尚未决议），
                                //那么这边直接reject就好，一种是同步执行callback，出错，那么因为上面我们对resolve,reject等做了处理，只会决议一次，因此会跳过。
                                //resolve,reject上面已经做了excuted的判断，
                }
            })
        }
    }



}
window.MyPromise = MyPromise
// exports.default = MyPromise

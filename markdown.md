1,promise是顺序执行下来的么
2，异步函数的选择 microtask
3，状态不外泄
4，默认错误处理函数


[micro-task macro-task](http://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context)
执行完所有的micro才会执行macro.也就是说可能要执行很久才会执行ui-rendering.但是node里面的nexttick内置了一个计数器，调用micro超过1000次后就会断掉，让macro去执行


asyncFunction 关于promise的部分


如果promise接受的是空，会怎么样
fulfill活着reject没有返回数值，Promise2会怎么样

队列清空

两个地方要检查队列：
一个是没有决议，但是then注册了方法。下一次决议时，就要执行这些
另一个是注册时已经决议完了。那么立刻执行队列

要保证promise2一定在fulfilled以后被执行而且肯定会被执行:
暂时的解决方案是： 用setTimeout. 这个是macro-task。一定在当前的micro-task执行完才会执行





---
testcase: 
1. resolve跟then都要去 checkAndExcute
then是因为有可能已经决议了，then才注册
resovle检查是因为，有可能在delay了resolve，这个时候then已经注册完了


---


fix:
1. 类型判断的疏漏，undefined跟null是没有constructor的，所以不能那么判断，有可能遇到x为非thenable对象，那么x.then
2. promise2的resolve也要异步，直接跟ful一样用async就行了。因为是一个队列里面的。
3. 之前弄成下一个事件循环里面的了。
4. x为function/object时，应该用x.then中的resolve的参数去resolve promise 
而不是直接fullfill.
5. x.then调用多次 executed判断
6. obj.constructor 判断function还是有点问题的。无法应对 Object.create(Funtion.prototype)
7. x.then的reference缓存下来，避免x.then 被访问多次，test case如下。标准里面也说了这一点，在note 3.5里面。

```
//test case .
在判断then属性时多次访问了x.then:,导致最后的结果为3
export const isThenable = (value)=>{
    if(!value) return false;
    return isObject(value) && value.then && isFunction(value.then)
}

numberOfTimesThenWasRetrieved = 0;
var test2 = new window.MyPromise(function(resolve, reject) {
    resolve(Object.create(null, {
                    then: {
                        get: function () {
                            ++numberOfTimesThenWasRetrieved;
                            return function thenMethodForX(onFulfilled) {
                                onFulfilled();
                            };
                        }
                    }
                }))
})
var p1 = test2.then(function(v) {
        console.log(v,numberOfTimesThenWasRetrieved) //3，实际上应该为1，
    },function(err){
        console.log(err)
    })

//fix的版本
const xThen = x.then;
            if( !(xThen && util.isFunction(xThen))) return promise.executeResolution('fulfilled', x)
            promise.then = xThen;
            resolveWithX(promise,promise);

            // if(!util.isThenable(x)) return promise.executeResolution('fulfilled', x)
            // else{
            //     resolveWithX(promise, x)
            // }

```


与此同时，要注意，将引用缓存下来后，还要保证this还是挂在x上面的，因此要xThen.bind(x)
8. 如果在x resolve执行完后又抛出一个错，是需要忽略掉的，而不是被catch到

```
describe("2.3.3.3.4: If calling `then` throws an exception `e`,", function () {
            describe("2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it.", function () {
                describe("`resolvePromise` was called with a non-thenable", function () {
                    function xFactory() {
                        return {
                            then: function (resolvePromise) {
                                resolvePromise(sentinel);
                                throw other;
                            }
                        };
                    }
```
因此代码里面加了excuted在catch里面return的判断

以及为了保证一次决议后不能再执行，在resolve跟reject里面用excuted去进行判断
```
xThen(function resolve(y) {
            if (executed) return       //y 为thenable 的 thenable。但是一旦执行完就不可再次执行（异步函数，即放进队列里面去后就不准再添加改变状态的函数了）
            _verifyAndResolve(promise, y);
            executed = true;
        }, function reject(reason) {
            if (executed) return
            promise.executeResolution('rejected', reason)
            executed = true;
        })

```
todo: 
1，设置属性不可访问及write




### 调试
To debug the "start" script, make sure the $NODE_DEBUG_OPTION string is specified as the first argument for the node command you'd like to debug.
For example:
 { "start": "node $NODE_DEBUG_OPTION server.js" }


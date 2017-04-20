/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {const isTypeof = type => {
	return obj => {
		const types = type.split("||");
		return types.some(type => {
			const reg = new RegExp(`function\\s+${type}+`);
			return obj.constructor.toString().search(reg) !== -1;
		});
	};
};
/* harmony export (immutable) */ __webpack_exports__["a"] = isTypeof;


const isObject = isTypeof('Object');
const isFunction = isTypeof('Function');
/* harmony export (immutable) */ __webpack_exports__["b"] = isFunction;


const isThenable = value => {
	if (!value) return false;
	return isObject(value) && value.then && isFunction(value.then);
};
/* unused harmony export isThenable */


/**
 * 因为then函数里面所需要的是异步函数，确切的说是要micro-task，而浏览器中micro-task主要包括这么几个
 * nextTick跟原生的都是micro,实在不能支持了才用macro来代替
 * @param  {[type]}   promise [因为可能会被reject掉，要更改promise的]
 * @param  {Function} fn      [description]
 * @param  {[type]}   value   [description]
 * @return {[type]}           [description]
 */

function asyncFunction(fn) {
	const isNativePromise = isTypeof('Promise');

	if (!process && process.nextTick) asyncFunction = process.nextTick;else if (isNativePromise(Promise)) {
		const nativePromise = new Promise((resolve, reject) => {
			try {
				resolve(value);
			} catch (error) {
				reject(error);
			}
		});
		const defaultReject = err => {
			throw err;
		};
		const proxyThen = function (fn) {
			return nativePromise.then(fn, defaultReject);
		};
		asyncFunction = proxyThen; //其实也可以不用代理，因为原生的promise内部就有默认错误处理函数
	} else if (isFunction(setImmediate)) asyncFunction = setImmediate;else asyncFunction = setTimeout;

	return asyncFunction(fn);
}

/**
// promise.promise2.executeResolution('rejected',e);
 * 
 * fn: fullfill 或者 reject，这边其实,一个then函数里面对应一个fulfill，一个reject,一个Promise2对象
 * 更确切的说是promise2的resolve,reject函数。因为要用他们的值去决议promise2
 * @param  {Function} fn    [description]
 * @param  {[type]}   value [description]
 * @param             promise2 [当前promise对象调用的then中要返回的promise对象]
 * @return {[type]}         [description]
 */
const asyncCallback = (fn, value, promise2cb) => {
	if (!isFunction(fn)) return;
	let finalValue;
	return asyncFunction(function () {
		try {
			finalValue = fn(value);
			if (promise2cb) promise2cb(null, finalValue);
			// promise2._resolve(finalValue);
		} catch (e) {
			if (promise2cb) promise2cb(e, null);
			// promise2._reject(e);
			return;
		}
	});
};
/* harmony export (immutable) */ __webpack_exports__["c"] = asyncCallback;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(4).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);


const privateFunctions = {
    'defaultFulfill': Symbol('default-fulfill'),
    'defaultReject': Symbol('default-reject')
};

// function subscribeToFinalValue(promise,doneFullOrRej){
//     promise.listeners.push(doneFullOrRej);
// }

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

    console.log(x);
    if (promise === x) {
        promise.executeResolution('rejected', new TypeError('circulation in resolution'));
    } else if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isTypeof */]('MyPromise')(x)) {

        x.then(v => {
            promise.executeResolution('fulfilled', v);
        }, r => {
            promise.executeResolution('rejected', r);
        });
    } else if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isTypeof */]('Function||Object')(x)) {
        try {
            promise.then = x.then;
            if (__WEBPACK_IMPORTED_MODULE_0__util__["b" /* isFunction */](x.then)) {
                resolveWithX(promise, x);
            } else {
                promise.executeResolution('fulfilled', x);
            }
        } catch (e) {
            promise.executeResolution('rejected', e);
        }
    } else promise.executeResolution('fulfilled', x);
}

/**
 * 用x的状态去决议promise的,并且需要注意的是多次决议无效，只处理第一次,即保证不管外部输入的x多么不安全
 * （即比如状态暴露，外部能多次改变状态），resolve完的始终是一个只能决议一次的安全的promise
 * @param  {[type]} promise [description]
 * @param  {[type]} x       [description]
 * @return {[type]}         [description]
 */
function resolveWithX(promise, x) {
    let executed = false;
    x.then(v => {
        if (executed) return;
        promise.executeResolution('fulfilled', v);
        executed = true;
    }, reason => {
        if (executed) return;
        promise.executeResolution('rejected', reason);
        executed = true;
    });
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
        this.then.bind(this);
        this.checkCurState.bind(this);
        this._doneFullOrRej.bind(this);

        const resolve = value => {
            //不安全的值-> 安全的只决议一次的promise，出错后直接reject，而不会执行下面fulfilled
            try {
                _verifyAndResolve(this, value);
                //否则直接fulfilled
                this.executeResolution('fulfilled', value);
            } catch (e) {
                this.executeResolution('rejected', e);
            }
        };

        const reject = reason => {
            this.value = reason;
            this.executeResolution('rejected', reason);
        };

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
        if (this.state !== 'pending') return; //1
        this.state = state;
        this.value = result;
        const callbackQueue = state === 'fulfilled' ? this.onFulfilledQueue : this.onRejectedQueue; //2
        const self = this;

        callbackQueue.forEach((fn, i) => {
            __WEBPACK_IMPORTED_MODULE_0__util__["c" /* asyncCallback */](fn, result, self.multiPromise2Cb[i]);
        });

        this.onRejectedQueue = [];
        this.onFulfilledQueue = [];
        this.multiPromise2Cb = [];
    }

    catch(reject) {
        return this.then(null, reject);
    }

    /**
     * then 中注册函数后，如果当前状态在之前已经变更了 ，那么立刻执行
     * @return {[type]} [description]
     */
    checkCurState() {
        if (this.state === 'pending') return;
        const callbackQueue = this.state === 'fulfilled' ? this.onFulfilledQueue : this.onRejectedQueue; //2
        const self = this;

        callbackQueue.forEach((fn, i) => {
            __WEBPACK_IMPORTED_MODULE_0__util__["c" /* asyncCallback */](fn, self.value, self.multiPromise2Cb[i]);
        });

        this.onRejectedQueue = [];
        this.onFulfilledQueue = [];
        this.multiPromise2Cb = [];
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
        //const isFunction = util.isTypeof('Function')
        //if(!isFunction(onFulfilled) && !isFunction(onRejected)) return
        //if (onFulfilled) this.fulfilledQueue.push(onFulfilled);
        //if (onRejected) this.onRejected.push(onRejected);

        if (!onFulfilled) onFulfilled = self[privateFunctions.defaultFulfill];
        if (!onRejected) onRejected = self[privateFunctions.defaultFulfill];
        self.onFulfilledQueue.push(onFulfilled);
        self.onRejectedQueue.push(onRejected);

        const promise2 = new MyPromise(function (resolve, reject) {
            //用onfullfilled或reject的返回值去resolve promise2
            self._doneFullOrRej(function (err, value) {
                if (err) return reject(err);
                if (value) resolve(value); //因为myPromise的resolve部分已经定义好了，要不然还要用resolveWithX(this,value)来操作
            });
        });
        self.checkCurState();
        return promise2;
    }

    /**
     * fn: function(err,value),将promise2挂上来，在asyncCallback里面监听fulfill/reject结果
     * @param  {Function} fn [description]
     * @return {[type]}      [description]
     */
    _doneFullOrRej(fn) {
        this.multiPromise2Cb.push(function () {
            setTimeout(fn);
        });
    }

    /**
     * 将promise2挂上来，在asyncCallback里面监听fulfill/reject结果
     * @param  {[type]} promise  [description]
     * @param  {[type]} promise2 [then需要返回的promise对象，需要用promise去resolve它]
     * @return {[type]} resolve         [promise2的状态]
     
    
    _doneFullOrRej(promise, promise2, resolve, reject) {
        promise2._resolve = resolve;
        promise2._reject = reject;
    }
    */

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
        return new MyPromise(function (resolve, reject) {
            reject(reason);
        });
    }

    static all(iterable) {}

    static race(iterable) {}

}
window.MyPromise = MyPromise;
// module.exports = MyPromise
// window.MyPromise = exports.default = MyPromise

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function (handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function (event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function (handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function (handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function (handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function (handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(3);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })
/******/ ]);
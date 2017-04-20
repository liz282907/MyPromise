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



### 调试
To debug the "start" script, make sure the $NODE_DEBUG_OPTION string is specified as the first argument for the node command you'd like to debug.
For example:
 { "start": "node $NODE_DEBUG_OPTION server.js" }


---
// let asyncFunction = (()=>{
//  const isNativePromise = isTypeof('Promise');

//  if(!process && process.nextTick) asyncFunction = process.nextTick;
//  else if(isNativePromise(Promise)){
//      const nativePromise = new Promise((resolve,reject)=>{
//          try{
//              resolve(value)
//          }catch(error){
//              reject(error)
//          }
//      })
//      const defaultReject = err => {throw(err)};
//      const proxyThen = function(fn){
//          return nativePromise.then(fn,defaultReject);
//      }
//      asyncFunction = proxyThen;//其实也可以不用代理，因为原生的promise内部就有默认错误处理函数
//  }
//  else if(isFunction(setImmediate)) asyncFunction = setImmediate
//  else asyncFunction = setTimeout

//  return asyncFunction;
// })()


    // "start": "webpack && promises-aplus-tests test/my-adapter",

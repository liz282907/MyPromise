
> my-promise@1.0.0 start /Users/luchen/Documents/study/test/Promise
> webpack && promises-aplus-tests test/my-adapter "markdown"

Hash: bdc8f89d5edc26ce8fa0
Version: webpack 2.4.1
Time: 846ms
       Asset     Size  Chunks             Chunk Names
myPromise.js  30.5 kB       0  [emitted]  main
   [0] ./~/process/browser.js 5.31 kB {0} [built]
   [1] ./myPromise/util.js 2.7 kB {0} [built]
   [2] ./myPromise/Promise.js 9.56 kB {0} [built]
   [3] ./~/setimmediate/setImmediate.js 6.66 kB {0} [built]
   [4] ./~/timers-browserify/main.js 1.36 kB {0} [built]
   [5] (webpack)/buildin/global.js 808 bytes {0} [built]
----- [ '/usr/local/Cellar/node/7.5.0/bin/node',
  '/Users/luchen/Documents/study/test/Promise/node_modules/.bin/promises-aplus-tests',
  'test/my-adapter',
  'markdown' ]
mocha opts  { markdown: true }


  2.1.2.1: When fulfilled, a promise: must not transition to any other state.







  2.1.3.1: When rejected, a promise: must not transition to any other state.







  2.2.1: Both `onFulfilled` and `onRejected` are optional arguments.
    2.2.1.1: If `onFulfilled` is not a function, it must be ignored.
      applied to a directly-rejected promise





      applied to a promise rejected and then chained off of





    2.2.1.2: If `onRejected` is not a function, it must be ignored.
      applied to a directly-fulfilled promise





      applied to a promise fulfilled and then chained off of






  2.2.2: If `onFulfilled` is a function,
    2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument.



    2.2.2.2: it must not be called before `promise` is fulfilled


    2.2.2.3: it must not be called more than once.







  2.2.3: If `onRejected` is a function,
    2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument.



    2.2.3.2: it must not be called before `promise` is rejected


    2.2.3.3: it must not be called more than once.







  2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code.
    `then` returns before the promise becomes fulfilled or rejected






    Clean-stack execution ordering tests (fulfillment case)





    Clean-stack execution ordering tests (rejection case)






  2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value).
    strict mode


    sloppy mode



  2.2.6: `then` may be called multiple times on the same promise.
    2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`.
      multiple boring fulfillment handlers



      multiple fulfillment handlers, one of which throws



      results in multiple branching chains with their own fulfillment values



      `onFulfilled` handlers are called in the original order



        even when one handler is added inside another handler



    2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`.
      multiple boring rejection handlers



      multiple rejection handlers, one of which throws



      results in multiple branching chains with their own fulfillment values



      `onRejected` handlers are called in the original order



        even when one handler is added inside another handler




  2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)`

    2.2.7.1: If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure `[[Resolve]](promise2, x)`

    2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason.
      The reason is `undefined`






      The reason is `null`






      The reason is `false`






      The reason is `0`






      The reason is an error






      The reason is an error without a stack






      The reason is a date






      The reason is an object






      The reason is an always-pending thenable






      The reason is a fulfilled promise






      The reason is a rejected promise






    2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value.
      `onFulfilled` is `undefined`



      `onFulfilled` is `null`



      `onFulfilled` is `false`



      `onFulfilled` is `5`



      `onFulfilled` is an object



      `onFulfilled` is an array containing a function



    2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason.
      `onRejected` is `undefined`



      `onRejected` is `null`



      `onRejected` is `false`



      `onRejected` is `5`



      `onRejected` is an object



      `onRejected` is an array containing a function




  2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason.



  2.3.2: If `x` is a promise, adopt its state
    2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected.


    2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value.
      `x` is already-fulfilled


      `x` is eventually-fulfilled


    2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason.
      `x` is already-rejected


      `x` is eventually-rejected



  2.3.3: Otherwise, if `x` is an object or function,
    2.3.3.1: Let `then` be `x.then`
      `x` is an object with null prototype


      `x` is an object with normal Object.prototype


      `x` is a function


    2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason.
      `e` is `undefined`


      `e` is `null`


      `e` is `false`


      `e` is `0`


      `e` is an error


      `e` is an error without a stack


      `e` is a date


      `e` is an object


      `e` is an always-pending thenable


      `e` is a fulfilled promise


      `e` is a rejected promise


    2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise`
      Calls with `x` as `this` and two function arguments


      Uses the original value of `then`


      2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)`
        `y` is not a thenable
          `y` is `undefined`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is `null`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is `false`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is `5`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an object
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an array
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


        `y` is a thenable
          `y` is a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


        `y` is a thenable for a thenable
          `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that tries to fulfill twice for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is a thenable that fulfills but then throws for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an already-fulfilled promise for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an already-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an eventually-fulfilled promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then`
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an already-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


          `y` is an eventually-fulfilled promise for an eventually-rejected promise
            `then` calls `resolvePromise` synchronously


            `then` calls `resolvePromise` asynchronously


      2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r`
        `r` is `undefined`
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is `null`
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is `false`
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is `0`
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is an error
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is an error without a stack
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is a date
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is an object
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is an always-pending thenable
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is a fulfilled promise
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


        `r` is a rejected promise
          `then` calls `rejectPromise` synchronously


          `then` calls `rejectPromise` asynchronously


      2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
        calling `resolvePromise` then `rejectPromise`, both synchronously


        calling `resolvePromise` synchronously then `rejectPromise` asynchronously


        calling `resolvePromise` then `rejectPromise`, both asynchronously




          calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously
            calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously
            calling `rejectPromise` then `resolvePromise`, both synchronously


            calling `rejectPromise` synchronously then `resolvePromise` asynchronously


            calling `rejectPromise` then `resolvePromise`, both asynchronously


            calling `resolvePromise` twice synchronously


            calling `resolvePromise` twice, first synchronously then asynchronously


            calling `resolvePromise` twice, both times asynchronously


            calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously


            calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously


            calling `rejectPromise` twice synchronously


            calling `rejectPromise` twice, first synchronously then asynchronously


            calling `rejectPromise` twice, both times asynchronously


            saving and abusing `resolvePromise` and `rejectPromise`


          2.3.3.3.4: If calling `then` throws an exception `e`,
            2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it.
              `resolvePromise` was called with a non-thenable


              `resolvePromise` was called with an asynchronously-fulfilled promise

              2.3.3.4: If `then` is not a function, fulfill promise with `x`
                `then` is `5`


                `then` is an object


                `then` is an array containing a function


                `then` is a regular expression


                `then` is an object inheriting from `Function.prototype`



                `resolvePromise` was called with an asynchronously-rejected promise

            2.3.4: If `x` is not an object or function, fulfill `promise` with `x`
              The value is `undefined`



              `rejectPromise` was called




              `resolvePromise` then `rejectPromise` were called


              `rejectPromise` then `resolvePromise` were called




            2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason.
              straightforward case


              `resolvePromise` is called asynchronously before the `throw`


              `rejectPromise` is called asynchronously before the `throw`



  490 passing (57s)
  344 failing

  1) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  2) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  3) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  4) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  5) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  6) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  7) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  8) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  9) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  10) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  11) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  12) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  13) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  14) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  15) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  16) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  17) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  18) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  19) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  20) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  21) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  22) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  23) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  24) 2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  25) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  26) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  27) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  28) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  29) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  30) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  31) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  32) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  33) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  34) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  35) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  36) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  37) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  38) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  39) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  40) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  41) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  42) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  43) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  44) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  45) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  46) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  47) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  48) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  49) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  50) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  51) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  52) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  53) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  54) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  55) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  56) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  57) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  58) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  59) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  60) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  61) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  62) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  63) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  64) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  65) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  66) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  67) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  68) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  69) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  70) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  71) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  72) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  73) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  74) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  75) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  76) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  77) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  78) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  79) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  80) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  81) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  82) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  83) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  84) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  85) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  86) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  87) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  88) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  89) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  90) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:23:21)

  91) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  92) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  93) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  94) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  95) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  96) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  97) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  98) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  99) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  100) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  101) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  102) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  103) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  104) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  105) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  106) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  107) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  108) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  109) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  110) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  111) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  112) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  113) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  114) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  115) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  116) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  117) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  118) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  119) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  120) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  121) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  122) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  123) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  124) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  125) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  126) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  127) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  128) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  129) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  130) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  131) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  132) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  133) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  134) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  135) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  136) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  137) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  138) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  139) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  140) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  141) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  142) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  143) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  144) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  145) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  146) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught TypeError: Cannot read property 'toString' of undefined
      at dist/myPromise.js:269:35
      at Array.some (native)
      at dist/myPromise.js:265:16
      at _verifyAndResolve (dist/myPromise.js:384:84)
      at resolve (dist/myPromise.js:397:21)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:54:29)

  147) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  148) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  149) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  150) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  151) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  152) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  153) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  154) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  155) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  156) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  157) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  158) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  159) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  160) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  161) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  162) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  163) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  164) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  165) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  166) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  167) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  168) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  169) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  170) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  171) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  172) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  173) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  174) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  175) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  176) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  177) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  178) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  179) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  180) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  181) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  182) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  183) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  184) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  185) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  186) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  187) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  188) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  189) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  190) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  191) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  192) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  193) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  194) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  195) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  196) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  197) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  198) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  199) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  200) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  201) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  202) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  203) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  204) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  205) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  206) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  207) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  208) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  209) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  210) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  211) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  212) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  213) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  214) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  215) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  216) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  217) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  218) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  219) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  220) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  221) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  222) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  223) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  224) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  225) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  226) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  227) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  228) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  229) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  230) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  231) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  232) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  233) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  234) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  235) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  236) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  237) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  238) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  239) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  240) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  241) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  242) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  243) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  244) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  245) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  246) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  247) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  248) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  249) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  250) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  251) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  252) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  253) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  254) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  255) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  256) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  257) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  258) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/helpers/thenables.js:90:21)

  259) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  260) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  261) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  262) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  263) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  264) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  265) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  266) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  267) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  268) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  269) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  270) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  271) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  272) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  273) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  274) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  275) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  276) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  277) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  278) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  279) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  280) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  281) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  282) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  283) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  284) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  285) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  286) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  287) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  288) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  289) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  290) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  291) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  292) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  293) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  294) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  295) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  296) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  297) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  298) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  299) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  300) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  301) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  302) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  303) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  304) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  305) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  306) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  307) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  308) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  309) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  310) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:84:29)

  311) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:385:33)

  312) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:408:33)

  313) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  314) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  315) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  316) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  317) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:514:33)

  318) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:514:33)

  319) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  320) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  321) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  322) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  323) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  324) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  325) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  326) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  327) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:686:33)

  328) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a rejected promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:690:33)

  329) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. saving and abusing `resolvePromise` and `rejectPromise` via return from a fulfilled promise:
     Uncaught ReferenceError: e is not defined
      at reject (dist/myPromise.js:399:59)
      at Timeout._onTimeout (node_modules/promises-aplus-tests/lib/tests/2.3.3.js:744:25)

  330) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  331) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-fulfilled promise via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  332) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  333) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  334) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  335) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  336) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  337) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  338) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-fulfilled:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  339) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  340) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  341) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a fulfilled promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  342) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  343) 2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a rejected promise:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  

  344) 2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-rejected:
     Error: timeout of 200ms exceeded. Ensure the done() callback is being called in this test.
  



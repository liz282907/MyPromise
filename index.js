const MyPromise = require('./dist/myPromise').default

const test = new MyPromise(function(resolve, reject) {
    console.log('--------');
    reject(3);
})

test.then(function(v) {
    console.log(v)
},function (e) {
    console.log(e)
})

const fs = require('fs')
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


// var promisesAplusTests = require("promises-aplus-tests")
// const adapter = require('./test/my-adapter.js')

// promisesAplusTests(adapter, function (err) {
// 	fs.writeFile('./test/output.txt', err);
// });
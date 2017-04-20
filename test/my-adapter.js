// import myPromise from '../myPromise/Promise.js'

const MyPromise = require('../dist/myPromise.js').default

// const myPromise = require('../myPromise/Promise.js')
// const test = new myPromise(function(resolve,reject){
// 	console.log('--------');
// 	resolve(3);
// })
// test.then(function(v){
// 	console.log(v)
// })

let resolve ,reject;
module.exports = {
	deferred: function(){
		const promise = new MyPromise(function(_resolve,_reject){
			resolve = _resolve;
			reject = _reject;
		})
		return {
			promise,
			reject,
			resolve
		}
	}
}
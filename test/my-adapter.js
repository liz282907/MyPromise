// import myPromise from '../myPromise/Promise.js'

const MyPromise = require('../dist/myPromise.js').default

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
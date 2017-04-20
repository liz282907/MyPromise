export const isTypeof = (type)=>{
	return (obj)=>{
		const types = type.split("||");
		return types.some(type=>{
			const reg = new RegExp(`function\\s+${type}+`)
			return obj.constructor.toString().search(reg)!==-1
		})		
	}
	
}

const isObject = isTypeof('Object');
export const  isFunction = isTypeof('Function')

export const isThenable = (value)=>{
	if(!value) return false;
	return isObject(value) && value.then && isFunction(value.then)
}

/**
 * 因为then函数里面所需要的是异步函数，确切的说是要micro-task，而浏览器中micro-task主要包括这么几个
 * nextTick跟原生的都是micro,实在不能支持了才用macro来代替
 * @param  {[type]}   promise [因为可能会被reject掉，要更改promise的]
 * @param  {Function} fn      [description]
 * @param  {[type]}   value   [description]
 * @return {[type]}           [description]
 */

function asyncFunction (fn){
	const isNativePromise = isTypeof('Promise');

	if(!process && process.nextTick) asyncFunction = process.nextTick;
	else if(isNativePromise(Promise)){
		const nativePromise = new Promise((resolve,reject)=>{
			try{
				resolve(value)
			}catch(error){
				reject(error)
			}
		})
		const defaultReject = err => {throw(err)};
		const proxyThen = function(fn){
			return nativePromise.then(fn,defaultReject);
		}
		asyncFunction = proxyThen;//其实也可以不用代理，因为原生的promise内部就有默认错误处理函数
	}
	else if(isFunction(setImmediate)) asyncFunction = setImmediate
	else asyncFunction = setTimeout

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
export const asyncCallback = (fn,value,promise2cb)=>{
	if(!isFunction(fn)) return
	let finalValue;
	return asyncFunction(function(){
		try{
			finalValue = fn(value);
			if(promise2cb) promise2cb(null,finalValue);
			// promise2._resolve(finalValue);

		}catch(e){
			if(promise2cb) promise2cb(e,null)
			// promise2._reject(e);
			return 
		}
	});
}








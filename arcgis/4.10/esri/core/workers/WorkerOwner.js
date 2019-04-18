// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),function(x,y,m,n,p,l,e,q){var r=p.getLogger("esri.core.workers"),g=e.MessageType.ABORT,t=e.MessageType.INVOKE,u=e.MessageType.OPEN,v=e.MessageType.OPENED,h=e.MessageType.RESPONSE;return function(){function b(a,f){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=f;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",function(a){a.preventDefault();
r.error(a)})}b.create=function(a){return q.createWorker().then(function(f){return new b(f,a)})};b.prototype.terminate=function(){this.worker.terminate()};b.prototype.open=function(a){var f=this,d=e.newJobId(),c=function(){f._outJobs["delete"](d);f._post({type:g,jobId:d})};return l.create(function(e,b){f._outJobs.set(d,{resolve:e,reject:b,cancel:c});f._post({type:u,jobId:d,modulePath:a})},c)};b.prototype._onMessage=function(a){if(a=e.receiveMessage(a))switch(a.type){case v:case h:this._onResponse(a);
break;case g:this._onCancel(a);break;case t:this._onInvoke(a)}};b.prototype._onCancel=function(a){(a=this._inJobs.get(a.jobId))&&a.cancel()};b.prototype._onInvoke=function(a){var f=this,d=a.methodName,c=a.jobId;a=a.data;var b=this._inJobs,g=m.workerMessages[d],k;try{if("function"!==typeof g)throw new TypeError(d+" is not a function");k=g.call(null,a)}catch(w){this._post({type:h,jobId:c,error:e.toInvokeError(w)});return}l.isThenable(k)?(b.set(c,k),k.then(function(a){b["delete"](c);f._post({type:h,
jobId:c},a)}).catch(function(a){b["delete"](c);a||(a={message:"Error encountered at method"+d});a.dojoType&&"cancel"===a.dojoType||f._post({type:h,jobId:c,error:e.toInvokeError(a)})})):this._post({type:h,jobId:c},k)};b.prototype._onResponse=function(a){var b=a.jobId,d=a.error;a=a.data;var c=this._outJobs.get(b);c&&(this._outJobs["delete"](b),d?c.reject(n.fromJSON(JSON.parse(d))):c.resolve(a))};b.prototype._post=function(a,b,d){return e.postMessage(this.worker,a,b,d)};return b}()});
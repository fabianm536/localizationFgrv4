//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","./global","./support/has","./array"],a)})(function(a,b){Object.defineProperty(b,"__esModule",{value:!0});var d=a("./global"),e=a("./support/has"),f=a("./array");b.ShimAbortSignal=d.default.AbortSignal;e.default("abort-signal")||(d.default.AbortSignal=b.ShimAbortSignal=function(){function a(){this._aborted=
!1;this.listeners={}}Object.defineProperty(a.prototype,"aborted",{get:function(){return this._aborted},enumerable:!0,configurable:!0});a.prototype.addEventListener=function(c,a){c in this.listeners||(this.listeners[c]=[]);this.listeners[c].push(a)};a.prototype.removeEventListener=function(c,a){if(c in this.listeners){var b=f.findIndex(this.listeners[c],function(c){return c===a});0<=b&&this.listeners[c].splice(b,1)}};a.prototype.dispatchEvent=function(c){var a=this,b=c.type;"abort"===b&&(this._aborted=
!0,"function"===typeof this.onabort&&this.onabort.call(this,c));if(!(b in this.listeners))return!1;this.listeners[b].forEach(function(b){setTimeout(function(){return b.call(a,c)},0)});return!c.preventDefault};return a}());b.ShimAbortController=d.default.AbortController;e.default("abort-controller")||(d.default.AbortController=b.ShimAbortController=function(){function a(){this.signal=new b.ShimAbortSignal}a.prototype.abort=function(){var a;try{a=new Event("abort")}catch(g){"undefined"!==typeof document?
(a=document.createEvent("Event"),a.initEvent("abort",!1,!1)):a={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(a)};return a}());b.default=b.ShimAbortController});
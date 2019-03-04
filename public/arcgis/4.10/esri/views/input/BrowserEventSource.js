// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/has ../../core/libs/pep/pep ./keys ./gamepad/GamepadSource".split(" "),function(g,h,e,m,n,p){Object.defineProperty(h,"__esModule",{value:!0});var k=e("trident"),l=e("edge"),q=e("chrome"),r=e("ff"),t=e("safari");g=function(){function d(b,a){var c=this;this.input=a;this._active={};this._activePointerCaptures=new Set;this._keyDownState=new Set;this._eventId=1;this._element=b;m.applyLocal(b);b.getAttribute("tabindex")||b.setAttribute("tabindex","0");this._eventHandlers=
{"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost};this._initialCssTouchAction=b.style.touchAction;b.style.touchAction="none";this._element.addEventListener("keydown",
this._preventAltKeyDefault);this._gamepadSource=new p.GamepadSource(b,this.input);this._gamepadSource.onEvent=function(a){return c._callback("gamepad",a)}}d.prototype.destroy=function(){var b=this;this.activeEvents=this._callback=null;this._activePointerCaptures.forEach(function(a){b._element.releasePointerCapture(a)});this._gamepadSource&&(this._gamepadSource.destroy(),this._gamepadSource=null);this._activePointerCaptures=null;this._element.style.touchAction=this._initialCssTouchAction;this._element.removeEventListener("keydown",
this._preventAltKeyDefault)};Object.defineProperty(d.prototype,"onEventReceived",{set:function(b){this._callback=b},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"activeEvents",{set:function(b){var a=this,c;for(c in this._active)b&&b.has(c)||(this._element.removeEventListener(f[c],this._active[c]),delete this._active[c]);b&&b.forEach(function(b){if(!a._active[b]&&f[b]){var c=(a._eventHandlers[b]||a._handleDefault).bind(a,b);a._element.addEventListener(f[b],c);a._active[b]=c}});
this._gamepadSource.pollingEnabled=b&&b.has("gamepad")},enumerable:!0,configurable:!0});d.prototype.setPointerCapture=function(b,a){a?(this._element.setPointerCapture(b.pointerId),this._activePointerCaptures.add(b.pointerId)):("pointerup"!==b.type&&this._element.releasePointerCapture(b.pointerId),this._activePointerCaptures.delete(b.pointerId))};d.prototype._updateNormalizedPointerLikeEvent=function(b,a){var c=this._element.getBoundingClientRect();a.x=b.clientX-Math.round(c.left);a.y=b.clientY-Math.round(c.top);
return a};d.prototype._handleKey=function(b,a){var c=n.eventKey(a);c&&"key-up"===b&&this._keyDownState.delete(c);a={native:a,key:c,repeat:c&&this._keyDownState.has(c)};c&&"key-down"===b&&this._keyDownState.add(a.key);this._callback(b,a)};d.prototype._handlePointer=function(b,a){a=this._updateNormalizedPointerLikeEvent(a,{native:a,x:0,y:0,pointerType:a.pointerType,button:a.button,buttons:a.buttons,eventId:this._eventId++});this._callback(b,a)};d.prototype._handlePointerPreventDefault=function(b,a){var c=
this._updateNormalizedPointerLikeEvent(a,{native:a,x:0,y:0,pointerType:a.pointerType,button:a.button,buttons:a.buttons,eventId:this._eventId++});a.preventDefault();this._callback(b,c)};d.prototype._handleMouseWheel=function(b,a){a.preventDefault();var c=a.deltaY;switch(a.deltaMode){case 0:if(k||l)c=c/document.documentElement.clientHeight*600;break;case 1:c*=30;break;case 2:c*=900}k||l?c*=.7:q||t?c*=.6:r&&(c*=1.375);var d=Math.abs(c);100<d&&(c=c/d*200/(1+Math.exp(-.02*(d-100))));a=this._updateNormalizedPointerLikeEvent(a,
{native:a,x:0,y:0,deltaY:c});this._callback(b,a)};d.prototype._handlePointerCaptureLost=function(b,a){this._activePointerCaptures.delete(a.pointerId);this._handleDefault(b,a)};d.prototype._handleDefault=function(b,a){var c={native:a};a.preventDefault();this._callback(b,c)};d.prototype._preventAltKeyDefault=function(b){"Alt"===b.key&&b.preventDefault()};return d}();h.BrowserEventSource=g;var f={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove",
"mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"}});
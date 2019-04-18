// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/compilerUtils ../../core/Identifiable ../../core/urlUtils ../../core/accessorSupport/decorators ./MeshColor ../../views/support/screenshotUtils".split(" "),function(q,r,h,d,k,l,f,c,m,n){return function(g){function b(a){a=g.call(this)||this;a.type="image";return a}h(b,g);e=b;Object.defineProperty(b.prototype,"url",{get:function(){return this._get("url")||null},set:function(a){this._set("url",
a);a&&this._set("data",null)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"data",{get:function(){return this._get("data")||null},set:function(a){this._set("data",a);a&&this._set("url",null)},enumerable:!0,configurable:!0});b.prototype.writeData=function(a,p,b,c){a instanceof HTMLImageElement?a={type:"image-element",src:f.toJSON(a.src,c)}:a instanceof HTMLCanvasElement?(a=a.getContext("2d").getImageData(0,0,a.width,a.height),a={type:"canvas-element",imageData:this.encodeImageData(a)}):
a={type:"image-data",imageData:this.encodeImageData(a)};p[b]=a};b.prototype.readData=function(a,b){switch(a.type){case "image-element":return b=new Image,b.src=a.src,b;case "canvas-element":return a=this.decodeImageData(a.imageData),b=document.createElement("canvas"),b.width=a.width,b.height=a.height,b.getContext("2d").putImageData(a,0,0),b;case "image-data":return this.decodeImageData(a.imageData);default:k.neverReached(a)}};Object.defineProperty(b.prototype,"transparent",{get:function(){var a=this.data;
return a instanceof HTMLCanvasElement?this.imageDataContainsTransparent(a.getContext("2d").getImageData(0,0,a.width,a.height)):a instanceof ImageData?this.imageDataContainsTransparent(a):!1},set:function(a){null!=a?this._override("transparent",a):this._clearOverride("transparent")},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new e({url:this.url,data:this.data})};b.prototype.encodeImageData=function(a){for(var b="",c=0;c<a.data.length;c++)b+=String.fromCharCode(a.data[c]);return{data:btoa(b),
width:a.width,height:a.height}};b.prototype.decodeImageData=function(a){for(var b=atob(a.data),c=new Uint8ClampedArray(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);return n.wrapImageData(c,a.width,a.height)};b.prototype.imageDataContainsTransparent=function(a){for(var b=3;b<a.data.length;b+=4)if(255!==a.data[b])return!0;return!1};var e;d([c.property()],b.prototype,"type",void 0);d([c.property({type:String,json:{write:f.write}})],b.prototype,"url",null);d([c.property({json:{write:{overridePolicy:function(){return{enabled:!this.url}}}}}),
c.property()],b.prototype,"data",null);d([c.writer("data")],b.prototype,"writeData",null);d([c.reader("data")],b.prototype,"readData",null);d([c.property({type:Boolean,dependsOn:["data"],json:{write:{overridePolicy:function(){return{enabled:this._isOverridden("transparent")}}}}})],b.prototype,"transparent",null);return b=e=d([c.subclass("esri.geometry.support.ImageMeshColor")],b)}(c.declared(m.default,l.Identifiable))});
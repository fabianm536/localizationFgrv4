// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../Graphic ../core/Collection ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./graphics/controllers/MemoryController ./mixins/ScaleRangeLayer ../symbols/support/ElevationInfo".split(" "),function(g,u,m,d,n,h,k,f,c,p,q,r,t){return function(l){function b(a){a=l.call(this)||this;a.elevationInfo=null;a.screenSizePerspectiveEnabled=!0;a.type="graphics";a.graphics=
new (k.ofType(h));return a}m(b,l);b.prototype.destroy=function(){this.removeAll()};Object.defineProperty(b.prototype,"graphics",{set:function(a){var b=this,c=this._get("graphics");c?(c.removeAll(),c.addMany(a)):a&&(a.forEach(function(a){a.layer=b;a.sourceLayer=b}),a.on("change",function(a){for(var c=0,d=a.added;c<d.length;c++){var e=d[c];e.layer=b;e.sourceLayer=b}c=0;for(a=a.removed;c<a.length;c++)e=a[c],e.layer=null,e.sourceLayer=null}),this._set("graphics",a))},enumerable:!0,configurable:!0});b.prototype.add=
function(a){this.graphics.add(a);return this};b.prototype.addMany=function(a){this.graphics.addMany(a);return this};b.prototype.removeAll=function(){this.graphics.removeAll();return this};b.prototype.createGraphicsController=function(a){return f.resolve(new q(n({},a.options,{layer:this,layerView:a.layerView,graphics:this.graphics})))};b.prototype.remove=function(a){this.graphics.remove(a)};b.prototype.removeMany=function(a){this.graphics.removeMany(a)};b.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return f.create(function(a){return g(["../views/2d/layers/GraphicsLayerView2D"],
a)});case "3d":return f.create(function(a){return g(["../views/3d/layers/GraphicsLayerView3D"],a)})}};b.prototype.graphicChanged=function(a){this.emit("graphic-update",a)};d([c.property({type:t})],b.prototype,"elevationInfo",void 0);d([c.property({type:k.ofType(h)})],b.prototype,"graphics",null);d([c.property()],b.prototype,"screenSizePerspectiveEnabled",void 0);d([c.property({readOnly:!0})],b.prototype,"type",void 0);return b=d([c.subclass("esri.layers.GraphicsLayer")],b)}(c.declared(p,r))});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/Collection ../../core/JSONSupport ../../core/Loadable ../../core/watchUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./kmlUtils".split(" "),function(q,r,m,d,t,h,n,p,k,c,l,f){return function(g){function a(){var b=null!==g&&g.apply(this,arguments)||this;b._sublayersHandles=null;b.description=null;b.id=null;b.networkLink=
null;b.title=null;return b}m(a,g);e=a;a.prototype.initialize=function(){var b=this;k.whenOnce(this,"networkLink").then(function(a){return k.whenTrueOnce(b,"visible")}).then(function(){return b.load()})};a.prototype.load=function(){var b=this;if(!this.networkLink)return this.when();var a=this._fetchService(this._get("networkLink").href).then(function(a){a=l.default(h.ofType(e),f.sublayersFromJSON(e,a));b.sublayers?b.sublayers.addMany(a):b.sublayers=a;b.layer&&b.layer.notifyChange("visibleSublayers")});
this.addResolvingPromise(a);return this.when()};Object.defineProperty(a.prototype,"layer",{set:function(b){this._set("layer",b);this.sublayers&&this.sublayers.forEach(function(a){return a.layer=b})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"sublayers",{set:function(a){var b=this,c=this._get("sublayers");c&&(c.forEach(function(a){a.parent=null;a.layer=null}),this._sublayersHandles.forEach(function(a){return a.remove()}),this._sublayersHandles=null);a&&(a.forEach(function(a){a.parent=
b;a.layer=b.layer}),this._sublayersHandles=[a.on("after-add",function(a){a=a.item;a.parent=b;a.layer=b.layer}),a.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null})]);this._set("sublayers",a)},enumerable:!0,configurable:!0});a.prototype.castSublayers=function(a){return l.default(h.ofType(e),a)};Object.defineProperty(a.prototype,"visible",{get:function(){return this._get("visible")},set:function(a){this._get("visible")!==a&&(this._set("visible",a),this.layer&&this.layer.notifyChange("visibleSublayers"))},
enumerable:!0,configurable:!0});a.prototype.readVisible=function(a,c){return!!c.visibility};a.prototype._fetchService=function(a){return f.fetchService(a,this.layer.outSpatialReference,this.layer.refreshInterval).then(function(a){return f.parseKML(a.data)})};var e;d([c.property()],a.prototype,"description",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property({value:null})],a.prototype,"layer",null);d([c.property({readOnly:!0,value:null})],a.prototype,"networkLink",void 0);d([c.property({json:{write:{allowNull:!0}}})],
a.prototype,"parent",void 0);d([c.property({value:null,json:{write:{allowNull:!0}}})],a.prototype,"sublayers",null);d([c.cast("sublayers")],a.prototype,"castSublayers",null);d([c.property({value:null,json:{read:{source:"name"}}})],a.prototype,"title",void 0);d([c.property({value:!0})],a.prototype,"visible",null);d([c.reader("visible",["visibility"])],a.prototype,"readVisible",null);return a=e=d([c.subclass("esri.layers.support.KMLSublayer")],a)}(c.declared(n,p))});
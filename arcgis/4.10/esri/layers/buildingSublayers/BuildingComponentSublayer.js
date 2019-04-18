// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../PopupTemplate ../../request ../../core/Loadable ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/SpatialReference ./BuildingSublayer ../support/commonProperties ../support/Field ../../renderers/support/jsonUtils ../../renderers/support/typeUtils ../../symbols/support/ElevationInfo".split(" "),function(u,v,w,f,c,g,h,k,b,l,m,n,p,q,d,
r,t){return function(e){function a(a){a=e.call(this)||this;a.type="building-component";a.fields=[];a.renderer=null;a.definitionExpression=null;a.popupEnabled=!0;a.popupTemplate=null;a.geometryType="mesh";a.profile="mesh-pyramids";return a}f(a,e);Object.defineProperty(a.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"objectIdField",
{get:function(){if(null!=this.fields)for(var a=0,b=this.fields;a<b.length;a++){var c=b[a];if("oid"===c.type)return c.name}return null},enumerable:!0,configurable:!0});a.prototype.load=function(){this.addResolvingPromise(this._fetchService());return this.when()};a.prototype._fetchService=function(){var a=this;return h(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(b){a.read(b.data,{origin:"service",url:a.parsedUrl})})};c([b.property({readOnly:!0,dependsOn:["layer","id"]})],
a.prototype,"parsedUrl",null);c([b.property({readOnly:!0})],a.prototype,"store",void 0);c([b.property({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0);c([b.property({readOnly:!0,type:[q]})],a.prototype,"fields",void 0);c([b.property({type:String,dependsOn:["fields"],readOnly:!0})],a.prototype,"objectIdField",null);c([b.property({readOnly:!0,type:l,aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);c([b.property({readOnly:!0,type:m,aliasOf:"layer.spatialReference"})],a.prototype,
"spatialReference",void 0);c([b.property({readOnly:!0,aliasOf:"layer.version"})],a.prototype,"version",void 0);c([b.property({readOnly:!0,type:t,aliasOf:"layer.elevationInfo"})],a.prototype,"elevationInfo",void 0);c([b.property({types:r.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:d.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:d.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],a.prototype,"renderer",void 0);c([b.property({type:String,
json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],a.prototype,"definitionExpression",void 0);c([b.property(p.popupEnabled)],a.prototype,"popupEnabled",void 0);c([b.property({type:g,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0);c([b.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],
a.prototype,"normalReferenceFrame",void 0);return a=c([b.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],a)}(b.declared(n,k))});
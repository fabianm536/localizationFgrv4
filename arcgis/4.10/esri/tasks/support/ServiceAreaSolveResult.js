// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["../../Graphic","../../core/JSONSupport","../../geometry/SpatialReference","./NAMessage"],function(c,d,e,f){return d.createSubclass({declaredClass:"esri.tasks.support.ServiceAreaSolveResult",properties:{facilities:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},messages:{value:null,type:[f]},pointBarriers:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},polylineBarriers:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},
polygonBarriers:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},serviceAreaPolylines:{value:null,json:{read:{source:["saPolylines"],reader:function(a,b){return this._graphicsFromJson(b.saPolylines)}}}},serviceAreaPolygons:{value:null,json:{read:{source:["saPolygons"],reader:function(a,b){return this._graphicsFromJson(b.saPolygons)}}}}},_graphicsFromJson:function(a){if(!a)return null;var b=e.fromJSON(a.spatialReference);a=a.features;Array.isArray(a)&&(a=a.map(function(a){a=
c.fromJSON(a);a.geometry.spatialReference=b;return a}));return a}})});
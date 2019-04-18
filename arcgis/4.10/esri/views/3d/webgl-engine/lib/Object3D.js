// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/gl-matrix ../../support/mathUtils ./ComponentUtils ./GeometryRecord ./HighlightUtils ./IdGen ./ModelContentType ./Util".split(" "),function(p,y,d,q,e,n,r,u,v,w){var m=w.assert,x=d.mat4f64.create();p=function(){function b(a){void 0===a&&(a={});this._bvObjectSpace=new t;this._bvWorldSpace=new t;this._bvDirty=!0;this._hasVolatileTransformation=!1;this._allComponentsHiddenDirty=!0;this.id=b._idGen.gen(a.idHint);this.name=a.name;this.castShadow=
null!=a.castShadow?a.castShadow:!0;this.metadata=a.metadata;this.objectTransformation=d.mat4f64.create();this._initializeGeometryRecords(a.geometries,a.materials,a.transformations,a.origins)}b.prototype._initializeGeometryRecords=function(a,c,h,b){if(Array.isArray(a)){m(c.length===a.length,"Object3D: materials don't match geometries");m(h.length===a.length,"Object3D: transformations don't match geometries");this.geometryRecords=Array(a.length);this.geometries=a.slice();for(var l=0;l<a.length;l++)this.geometryRecords[l]=
new n(a[l],c[l],d.mat4f64.clone(h[l]),{},b&&b[l]);this._hasVolatileTransformation=!1}else this.geometryRecords=[],this.geometries=[]};Object.defineProperty(b.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(a){m(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer");this._parentLayer=a},enumerable:!0,configurable:!0});b.prototype.getNumGeometryRecords=function(){return this.geometryRecords.length};b.prototype.getFirstGeometryIndex=function(a){a=
this.geometries.indexOf(a);m(-1<a,"Object3D.getFirstGeometryIndex: geometry not found");return a};b.prototype.findGeometryRecords=function(a){for(var c=[],h=0;h<this.geometries.length;h++)this.geometries[h]===a&&c.push(this.geometryRecords[h]);return c};b.prototype.getGeometryRecord=function(a){m(0<=a&&a<this.geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range");return this.geometryRecords[a]};b.prototype.getGeometryRecords=function(){return this.geometryRecords};b.prototype.addGeometry=
function(a,c,h,b,k,g){void 0===h&&(h=x);this.geometries.push(a);a=new n(a,c,d.mat4f64.clone(h),b||{},k,g);this.geometryRecords.push(a);this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.shaderTransformation});this._notifyDirty("objGeometryAdded",a);this._invalidateBoundingVolume();this._allComponentsHiddenDirty=!0;return a};b.prototype.hasGeometry=function(a){return-1<this.geometries.indexOf(a)};b.prototype.removeGeometry=function(a){var c=this.geometryRecords.splice(a,
1)[0];this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.shaderTransformation});this.geometries.splice(a,1);this._notifyDirty("objGeometryRemoved",c);this._invalidateBoundingVolume();this._allComponentsHiddenDirty=!0;return c};b.prototype.removeAllGeometries=function(){for(;0<this.getNumGeometryRecords();)this.removeGeometry(0)};b.prototype.geometryVertexAttrsUpdated=function(a){this._notifyDirty("vertexAttrsUpdated",this.geometryRecords[a]);this._invalidateBoundingVolume()};
b.prototype.areAllComponentsHidden=function(){if(this._allComponentsHiddenDirty){this._allComponentsHiddenDirty=!1;this._allComponentsHidden=!0;for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a];if(!e.isAllHidden(b.instanceParameters.componentVisibilities,b.geometry.data.componentOffsets)){this._allComponentsHidden=!1;break}}}return this._allComponentsHidden};b.prototype.areAllComponentsVisible=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a];if(!e.isAllVisible(b.instanceParameters.componentVisibilities,
b.geometry.data.componentOffsets))return!1}return!0};b.prototype.hasComponents=function(){for(var a=!1,c=0;c<this.geometries.length&&!(a=e.hasComponents(this.geometries[c].data.componentOffsets));c++);return a};b.prototype.setComponentVisibility=function(a,c,b){c=e.updateVisibility(a.instanceParameters.componentVisibilities,a.geometry.data.componentOffsets,c,b);a.instanceParameters.componentVisibilities=c;this._notifyDirty("visibilityChanged",a);this._allComponentsHiddenDirty=!0};b.prototype.setHidden=
function(a,c){a.instanceParameters.hidden=!!c;this._notifyDirty("visibilityChanged",a)};b.prototype.isHidden=function(a){return!!a.instanceParameters.hidden};b.prototype.getComponentVisibility=function(a,c){return e.getVisibility(a.instanceParameters.componentVisibilities,c)};b.prototype.hideAllComponents=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a],d=e.hideAllComponents(b.instanceParameters.componentVisibilities);b.instanceParameters.componentVisibilities=d}this._notifyDirty("visibilityChanged");
this._allComponentsHiddenDirty=!0};b.prototype.unhideAllComponents=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a],d=e.unhideAllComponents(b.instanceParameters.componentVisibilities);b.instanceParameters.componentVisibilities=d}this._notifyDirty("visibilityChanged");this._allComponentsHiddenDirty=!0};b.prototype._setComponentHighlight=function(a,c,b,d){c=e.addHighlight(a.instanceParameters.componentHighlights,c,b,d);a.instanceParameters.componentHighlights=c};b.prototype.setComponentHighlight=
function(a,c,b){var d=r.generateHighlightId();this._setComponentHighlight(a,c,b,d);this._notifyDirty("componentHighlightChanged");return d};b.prototype.highlightAllComponents=function(a){for(var c=r.generateHighlightId(),b=0,d=this.geometryRecords;b<d.length;b++)this._setComponentHighlight(d[b],null,a,c);this._notifyDirty("componentHighlightChanged");return c};b.prototype.removeHighlights=function(a){for(var c=0,b=this.geometryRecords;c<b.length;c++){var d=b[c].instanceParameters,k=e.removeHighlight(d.componentHighlights,
a);d.componentHighlights=k}this._notifyDirty("componentHighlightChanged")};b.prototype.getComponentFromTriangleNr=function(a,c){m(0<=a&&a<this.geometryRecords.length,"Object3d.getComponentFromTriangleNr: index out of range");return e.componentFind(this.geometryRecords[a].geometry.data.componentOffsets,3*c)};b.prototype.setGeometryTransformation=function(a,c){m(0<=a&&a<this.geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var b=this.geometryRecords[a];c=new n(b.geometry,
b.material,d.mat4f64.clone(c),b.instanceParameters);this.geometryRecords[a]=c;this._notifyDirty("objGeometryReplaced",[b,c]);this._invalidateBoundingVolume()};b.prototype.getObjectTransformation=function(){return d.mat4f64.clone(this.objectTransformation)};b.prototype.setObjectTransformation=function(a){d.mat4.copy(this.objectTransformation,a);this._invalidateBoundingVolume();this._notifyDirty("objTransformation")};b.prototype.getCombinedStaticTransformation=function(a,c){c=c||d.mat4f64.create();
d.mat4.multiply(c,this.objectTransformation,a.getStaticTransformation());return c};b.prototype.getCombinedShaderTransformation=function(a,c){c=c||d.mat4f64.create();d.mat4.multiply(c,this.objectTransformation,a.getShaderTransformation());return c};b.prototype.hasVolativeTransformation=function(){return this._hasVolatileTransformation};b.prototype.getCastShadow=function(){return this.castShadow};b.prototype.setCastShadow=function(a){this.castShadow=a};b.prototype.getMetadata=function(){return this.metadata};
b.prototype.getName=function(){return this.name};b.prototype.getBBMin=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin};b.prototype.getBBMax=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax};b.prototype.getCenter=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.center:this._bvWorldSpace.center};b.prototype.getBSRadius=function(a){this._validateBoundingVolume();return a?
this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius};b.prototype._validateBoundingVolume=function(){if(this._bvDirty||this._hasVolatileTransformation){this._bvObjectSpace.init();this._bvWorldSpace.init();for(var a=0;a<this.geometryRecords.length;++a){var c=this.geometries[a],b=this.geometryRecords[a],c=c.boundingInfo;this._calculateTransformedBoundingVolume(c,this._bvObjectSpace,b.getShaderTransformation());this._calculateTransformedBoundingVolume(c,this._bvWorldSpace,this.getCombinedShaderTransformation(b))}d.vec3.lerp(this._bvObjectSpace.center,
this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5);d.vec3.lerp(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);for(var b=d.vec3f64.create(),l=d.vec3f64.create(),k=q.maxScale(this.objectTransformation),a=0;a<this.geometryRecords.length;++a){var c=this.geometries[a],g=this.geometryRecords[a].getShaderTransformation(),f=q.maxScale(g),c=c.boundingInfo;d.vec3.transformMat4(b,c.getCenter(),g);g=d.vec3.distance(b,this._bvObjectSpace.center);c=c.getBSRadius()*f;this._bvObjectSpace.bsRadius=
Math.max(this._bvObjectSpace.bsRadius,g+c);d.vec3.transformMat4(l,b,this.objectTransformation);f=d.vec3.distance(l,this._bvWorldSpace.center);this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,f+c*k)}this._bvDirty=!1}};b.prototype._calculateTransformedBoundingVolume=function(a,b,h){var c=a.getBBMin();a=a.getBBMax();var k=d.vec3f64.clone(c),g=d.vec3f64.clone(a);d.vec3.transformMat4(k,k,h);d.vec3.transformMat4(g,g,h);for(var f=0;3>f;++f)b.bbMin[f]=Math.min(b.bbMin[f],k[f],g[f]),b.bbMax[f]=
Math.max(b.bbMax[f],k[f],g[f]);for(f=0;3>f;++f){d.vec3.copy(k,c);d.vec3.copy(g,a);k[f]=a[f];g[f]=c[f];d.vec3.transformMat4(k,k,h);d.vec3.transformMat4(g,g,h);for(var e=0;3>e;++e)b.bbMin[e]=Math.min(b.bbMin[e],k[e],g[e]),b.bbMax[e]=Math.max(b.bbMax[e],k[e],g[e])}};b.prototype._invalidateBoundingVolume=function(){this._bvDirty=!0;this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})};b.prototype._notifyDirty=function(a,
b,d,e){this._parentLayer&&(d=d||v.OBJECT,this._parentLayer.notifyDirty(a,b,d,e||this))};b._idGen=new u;return b}();var t=function(){function b(){this.bbMin=d.vec3f64.create();this.bbMax=d.vec3f64.create();this.center=d.vec3f64.create();this.bsRadius=0}b.prototype.init=function(){d.vec3.set(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);d.vec3.set(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);d.vec3.set(this.center,0,0,0);this.bsRadius=0};b.prototype.getCenter=function(){return this.center};
b.prototype.getBSRadius=function(){return this.bsRadius};return b}();return p});
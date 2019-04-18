// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../support/mathUtils","../support/geometryUtils/frustum"],function(f,g,e,h,d){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function b(a){this.frustum=d.create();this.lines=Array(12);this.origin=e.vec3f64.create();this.direction=e.vec3f64.create();this._altitude=null;this.renderCoordsHelper=a?a.renderCoordsHelper:null;for(a=0;12>a;a++)this.lines[a]={origin:null,direction:e.vec3f64.create(),endpoint:null}}Object.defineProperty(b.prototype,
"planes",{get:function(){return this.frustum.planes},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"points",{get:function(){return this.frustum.points},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mutablePoints",{get:function(){return this.frustum.points},enumerable:!0,configurable:!0});b.prototype.update=function(a){d.fromMatrix(a.viewMatrix,a.projectionMatrix,this.frustum);e.vec3.copy(this.origin,a.eye);e.vec3.copy(this.direction,a.viewForward);this._altitude=
this.renderCoordsHelper.getAltitude(this.origin);this.updateLines()};b.prototype.updatePoints=function(a){for(var c=0;c<this.frustum.points.length;c++)e.vec3.copy(this.frustum.points[c],a[c]);d.recomputePlanes(this.frustum);this.updateLines()};Object.defineProperty(b.prototype,"altitude",{get:function(){return this._altitude},enumerable:!0,configurable:!0});b.prototype.intersectsSphere=function(a){return d.intersectsSphere(this.frustum,a)};b.prototype.intersectsRay=function(a){return d.intersectsRay(this.frustum,
a)};b.prototype.intersectsLineSegment=function(a,c){return d.intersectsLineSegment(this.frustum,a,c)};b.prototype.intersectsPoint=function(a){return d.intersectsPoint(this.frustum,a)};b.prototype.updateLines=function(){for(var a=this.frustum.points,c=0;4>c;c++){var b=c,d=c+4;this.updateLine(this.lines[c],a[b],a[d]);this.updateLine(this.lines[c+4],a[b],3===c?a[0]:a[b+1]);this.updateLine(this.lines[c+8],a[d],3===c?a[4]:a[d+1])}};b.prototype.updateLine=function(a,b,d){a.origin=b;a.endpoint=d;h.directionFromTo(a.direction,
b,d)};b.planePointIndices=d.planePointIndices;b.nearFarLineIndices=[[0,4],[1,5],[2,6],[3,7]];return b}();g.Frustum=f;g.default=f});
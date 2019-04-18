// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix"],function(h,k,l){Object.defineProperty(k,"__esModule",{value:!0});h=function(){function b(){this._reference=null}Object.defineProperty(b.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(g){this.reference&&this.reference.hasData&&(this.reference.isDirty=g)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"reference",{get:function(){return this._reference},set:function(g){this._reference=g},enumerable:!0,configurable:!0});b.prototype.reset=function(g,b,h){var d=this.reference;if(!d||!d.hasData)return!1;b&&(d.isDirty=!0);b=d.labelMat2d;for(var k=d.labelMat2d[4],q=d.labelMat2d[5],n=0,r=d.displayObjects;n<r.length;n++)for(var p=0,t=r[n].metrics;p<t.length;p++){var c=t[p];h.hasVV()&&c.computeOffset(h.vvEval);var m=c.bounds.center,a=c.bounds.centerT;
d.isDirty&&(c.minZoom=-1);var e=l.vec2.copy(a,c.anchor);g.rotation?l.vec2.transformMat2d(e,e,b):(a[0]=e[0]+k,a[1]=e[1]+q);l.vec2.add(a,e,m);a[0]+=c.offsetX;a[1]+=c.offsetY;if(c.boxes)for(m=0,a=c.boxes;m<a.length;m++){var e=a[m],f=e.centerT;l.vec2.add(f,c.anchor,e.center);g.rotation?l.vec2.transformMat2d(f,f,b):(f[0]+=k,f[1]+=q)}}return!0};return b}();k.default=h});
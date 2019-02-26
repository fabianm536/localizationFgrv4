// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../Viewpoint ../../core/Error ../../core/promiseUtils ../../core/wgs84Constants ../../core/libs/gl-matrix-2/gl-matrix ../../geometry/Extent ../../geometry/Geometry ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/webMercatorUtils".split(" "),function(S,f,A,L,B,M,e,C,N,y,O,D,z,p,P){function E(a,b,c,d){return d&&c&&!d.equals(c)&&
p.canProject(d,c)&&d.isWebMercator?(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(e.common.toRadian(c)),a=e.vec2.set(a,e.common.toRadian(b[0])*v,.5*v*Math.log((1+c)/(1-c)))):(c=e.common.toDegree(b[0]/v),a=e.vec2.set(a,c-360*Math.floor((c+180)/360),e.common.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/v))))),a):e.vec2.copy(a,b)}function w(a){return a.wkid?a:a.spatialReference||O.WGS84}function q(a,b){return b.type?e.vec2.set(a,b.x,b.y):e.vec2.copy(a,b)}function r(a,
b){return Math.max(a.width/b[0],a.height/b[1])*F(a.spatialReference)}function t(a,b,c){var d;if(!a)return null;if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&"number"===typeof a[1])return new y(a);if(a.reduce)return a.reduce(function(a,c){return t(c,b,a)},c);a instanceof N?d=a:a.geometry&&(d=a.geometry);if(!d)return null;a="point"===d.type?new C({xmin:d.x,ymin:d.y,xmax:d.x,ymax:d.y,spatialReference:d.spatialReference}):d.extent;if(!a)return null;d=p.canProject(a,b);if(!a.spatialReference.equals(b)&&
d)a=p.project(a,b);else if(!d)return null;return c=c?c.union(a):a.clone()}function G(a,b){if(!a)return new A({targetGeometry:new y,scale:0,rotation:0});var c=b.spatialReference,d=b.size,g=b.viewpoint,f=b.constraints,h=null;"esri.Viewpoint"===a.declaredClass?h=a:a.viewpoint?h=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(h=a.target);var k=null;if(h&&h.targetGeometry)k=h.targetGeometry;else if(a instanceof C)k=a;else if(a||a&&(a.hasOwnProperty("center")||a.hasOwnProperty("extent")||
a.hasOwnProperty("target")))k=t(a.center,c)||t(a.extent,c)||t(a.target,c)||t(a,c);!k&&g&&g.targetGeometry?k=g.targetGeometry:!k&&b.extent&&(k=b.extent);var u=w(k);c||(c=w(b.spatialReference||b.extent||k));if(!P.canProject(k,c)&&u&&!u.equals(c))return null;var l=q(e.vec2f64.create(),k.center?k.center:k),u=new y(E(l,l,u,c),c),l=null,l=h&&h.targetGeometry&&"point"===h.targetGeometry.type?h.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:a.hasOwnProperty("zoom")&&-1!==a.zoom&&f&&f.effectiveLODs?f.zoomToScale(a.zoom):
Array.isArray(k)||"point"===k.type||"extent"===k.type&&0===k.width&&0===k.height?b.extent&&p.canProject(b.extent,c)?r(p.project(b.extent,c),d):b.extent?r(b.extent,d):g.scale:p.canProject(k.extent,c)?r(p.project(k.extent,c),d):r(k.extent,d);b=0;h?b=h.rotation:a.hasOwnProperty("rotation")?b=a.rotation:g&&(b=g.rotation);a=new A({targetGeometry:u,scale:l,rotation:b});f&&(a=f.fit(a),f.rotationEnabled||(a.rotation=b));return a}function l(a,b){var c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=
d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function H(a,b,c){return c?e.vec2.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):e.vec2.scale(a,b,.5)}function Q(a,b,c,d){f.getTransform(a,b,c,d);return e.mat2d.invert(a,a)}function I(a,b,c){var d=x(b);b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return e.vec2.set(a,Math.round(c[1]*d+c[0]*b),Math.round(c[1]*b+c[0]*d))}function n(a){var b=a.scale;a=a.targetGeometry.spatialReference;a=z.isValid(a)?1/(39.37*D.getMetersPerUnitForSR(a)*
96):1;return b*a}function x(a){return e.common.toRadian(a.rotation)||0}function F(a){return z.isValid(a)?39.37*D.getMetersPerUnitForSR(a)*96:1}function J(a){return a.isWrappable?(a=z.getInfo(a),a.valid[1]-a.valid[0]):0}Object.defineProperty(f,"__esModule",{value:!0});var v=M.wgs84Radius,R=180/Math.PI;f.extentToScale=r;f.create=G;f.copy=l;f.getAnchor=H;f.getExtent=function(){var a=e.vec2f64.create();return function(b,c,d){var e=c.targetGeometry;q(a,e);c=.5*n(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];
b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}();f.setExtent=function(a,b,c,d,e){f.centerAt(a,b,c.center);a.scale=r(c,d);e&&e.constraints&&e.constraints.constrain(a);return a};f.getOuterExtent=function(){var a=e.vec2f64.create(),b=e.vec2f64.create();return function(c,d,e){q(a,d.targetGeometry);I(b,d,e);e=.5*n(d);c.set({xmin:a[0]-e*b[0],ymin:a[1]-e*b[1],xmax:a[0]+e*b[0],ymax:a[1]+e*b[1],spatialReference:d.targetGeometry.spatialReference});return c}}();f.getOuterSize=
I;f.getPaddingScreenTranslation=function(){var a=e.vec2f64.create();return function(b,c,d){return e.vec2.sub(b,e.vec2.scale(b,c,.5),H(a,c,d))}}();var K=function(){var a=e.mat2df64.create(),b=e.vec2f64.create();return function(c,d,g,m){var h=n(d);d=x(d);e.vec2.set(b,h,h);e.mat2d.fromScaling(a,b);e.mat2d.rotate(a,a,d);e.mat2d.translate(a,a,f.getPaddingScreenTranslation(b,g,m));e.mat2d.translate(a,a,[0,m.top-m.bottom]);return e.vec2.set(c,a[4],a[5])}}();f.getResolution=n;f.getResolutionToScaleFactor=
F;f.getMatrix=function(){var a=e.vec2f64.create(),b=e.vec2f64.create(),c=e.vec2f64.create();return function(d,f,m,h,k,l){e.vec2.negate(a,f);e.vec2.scale(b,m,.5*l);e.vec2.set(c,1/h*l,-1/h*l);e.mat2d.identity(d);e.mat2d.translate(d,d,b);k&&e.mat2d.rotate(d,d,k);e.mat2d.scale(d,d,c);e.mat2d.translate(d,d,a);return d}}();f.getTransform=function(){var a=e.vec2f64.create();return function(b,c,d,e){var g=n(c),h=x(c);q(a,c.targetGeometry);return f.getMatrix(b,a,d,g,h,e)}}();f.getTransformNoRotation=function(){var a=
e.vec2f64.create();return function(b,c,d,e){var g=n(c);q(a,c.targetGeometry);return f.getMatrix(b,a,d,g,0,e)}}();f.getWorldWidth=J;f.getWorldScreenWidth=function(a,b){return Math.round(J(a)/b)};f.createAsync=function(a,b){if(a=G(a,b))return B.resolve(a);a=new L("viewpointUtils-createAsync:different-spatialReference","Target spatialReference cannot be projected and is different from out spatialReference");return B.reject(a)};f.angleBetween=function(){var a=e.vec2f64.create(),b=e.vec2f64.create(),c=
[0,0,0];return function(d,f,m){e.vec2.subtract(a,d,f);e.vec2.normalize(a,a);e.vec2.subtract(b,d,m);e.vec2.normalize(b,b);e.vec2.cross(c,a,b);d=Math.acos(e.vec2.dot(a,b)/(e.vec2.length(a)*e.vec2.length(b)))*R;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}();f.addPadding=function(){var a=e.vec2f64.create();return function(b,c,d,e){var f=b.targetGeometry;l(b,c);K(a,c,d,e);f.x+=a[0];f.y+=a[1];return b}}();f.removePadding=function(){var a=e.vec2f64.create();return function(b,c,d,e){var f=b.targetGeometry;l(b,
c);K(a,c,d,e);f.x-=a[0];f.y-=a[1];return b}}();f.centerAt=function(){var a=e.vec2f64.create();return function(b,c,d){l(b,c);c=b.targetGeometry;var e=w(d),f=w(c);q(a,d);E(a,a,e,f);c.x=a[0];c.y=a[1];return b}}();f.pixelSizeAt=function(a,b,c){return n(b)};f.resize=function(){var a=e.vec2f64.create();return function(b,c,d,g,m){m||(m="center");e.vec2.sub(a,d,g);e.vec2.scale(a,a,.5);d=a[0];g=a[1];switch(m){case "center":e.vec2.set(a,0,0);break;case "left":e.vec2.set(a,-d,0);break;case "top":e.vec2.set(a,
0,g);break;case "right":e.vec2.set(a,d,0);break;case "bottom":e.vec2.set(a,0,-g);break;case "top-left":e.vec2.set(a,-d,g);break;case "bottom-left":e.vec2.set(a,-d,-g);break;case "top-right":e.vec2.set(a,d,g);break;case "bottom-right":e.vec2.set(a,d,-g)}f.translateBy(b,c,a);return b}}();f.rotateBy=function(a,b,c){l(a,b);a.rotation+=c;return a};f.rotateTo=function(a,b,c){l(a,b);a.rotation=c;return a};f.scaleBy=function(){var a=e.vec2f64.create();return function(b,c,d,g,m){l(b,c);isNaN(d)||0===d||(f.toMap(a,
g,c,m),b.scale=c.scale*d,f.toScreen(a,a,b,m),f.translateBy(b,b,e.vec2.set(a,a[0]-g[0],g[1]-a[1])));return b}}();f.scaleTo=function(a,b,c){l(a,b);a.scale=c;return a};f.scaleAndRotateBy=function(){var a=e.vec2f64.create();return function(b,c,d,g,m,h){l(b,c);isNaN(d)||0===d||(f.toMap(a,m,c,h),b.scale=c.scale*d,b.rotation+=g,f.toScreen(a,a,b,h),f.translateBy(b,b,e.vec2.set(a,a[0]-m[0],m[1]-a[1])));return b}}();f.padAndScaleAndRotateBy=function(){var a=e.vec2f64.create(),b=e.vec2f64.create();return function(c,
d,g,m,h,k,l){f.getPaddingScreenTranslation(b,k,l);e.vec2.add(a,h,b);return m?f.scaleAndRotateBy(c,d,g,m,a,k):f.scaleBy(c,d,g,a,k)}}();f.toMap=function(){var a=e.mat2df64.create();return function(b,c,d,f){return e.vec2.transformMat2d(b,c,Q(a,d,f,1))}}();f.toScreen=function(){var a=e.mat2df64.create();return function(b,c,d,g){return e.vec2.transformMat2d(b,c,f.getTransform(a,d,g,1))}}();f.translateBy=function(){var a=e.vec2f64.create(),b=e.mat2df64.create();return function(c,d,f){l(c,d);var g=n(d),
h=c.targetGeometry;e.mat2d.fromRotation(b,x(d));e.mat2d.scale(b,b,e.vec2f64.fromValues(g,g));e.vec2.transformMat2d(a,f,b);h.x+=a[0];h.y+=a[1];return c}}()});
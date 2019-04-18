// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix"],function(g,c,f){function p(a){return Math.asin(1<a?1:-1>a?-1:a)}function q(a){return Math.acos(1<a?1:-1>a?-1:a)}function r(a,d,b){return a<d?d:a>b?b:a}function l(a){for(var d in a){var b=a[d];b instanceof Function&&(a[d]=b.bind(a))}return a}Object.defineProperty(c,"__esModule",{value:!0});c.deg2rad=function(a){return a*Math.PI/180};c.rad2deg=function(a){return 180*a/Math.PI};c.asin=p;c.acos=q;c.cosCapped=function(a,d){return a>
d?Math.cos(d):Math.cos(a)};c.sign=Math.sign||function(a){return+(0<a)-+(0>a)||+a};c.log2=Math.log2||function(a){return Math.log(a)/Math.LN2};c.isPowerOfTwo=function(a){return 0===(a&a-1)};c.nextHighestPowerOfTwo=function(a){--a;for(var d=1;32>d;d<<=1)a|=a>>d;return a+1};c.nextHighestPowerOfTen=function(a){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(a)))};c.fovx2fovy=function(a,d,b){return 2*Math.atan(b*Math.tan(.5*a)/d)};c.fovy2fovx=function(a,d,b){return 2*Math.atan(d*Math.tan(.5*a)/b)};c.maxScale=
function(a){return Math.max(Math.max(Math.sqrt(a[0]*a[0]+a[4]*a[4]+a[8]*a[8]),Math.sqrt(a[1]*a[1]+a[5]*a[5]+a[9]*a[9])),Math.sqrt(a[2]*a[2]+a[6]*a[6]+a[10]*a[10]))};c.makeOrthonormal=function(a,d,b){b=b||a;var e=f.vec3.dot(a,d);f.vec3.set(b,a[0]-e*d[0],a[1]-e*d[1],a[2]-e*d[2]);f.vec3.normalize(b,b)};c.tangentFrame=function(a,d,b){Math.abs(a[0])>Math.abs(a[1])?f.vec3.set(d,0,1,0):f.vec3.set(d,1,0,0);f.vec3.cross(b,a,d);f.vec3.normalize(d,d);f.vec3.cross(d,b,a);f.vec3.normalize(b,b)};c.cartesianToSpherical=
function(a,d){var b=f.vec3.length(a),e=p(a[2]/b);f.vec3.set(d,b,e,Math.atan2(a[1]/b,a[0]/b));return d};c.sphericalToCartesian=function(a,d){var b=a[0],e=a[1];a=a[2];var c=Math.cos(e);f.vec3.set(d,b*c*Math.cos(a),b*c*Math.sin(a),b*Math.sin(e))};c.directionFromTo=function(a,d,b){var e=b[0]-d[0],c=b[1]-d[1];d=b[2]-d[2];b=e*e+c*c+d*d;if(!b)return a[0]=0,a[1]=0,a[2]=0,a;b=1/Math.sqrt(b);a[0]=e*b;a[1]=c*b;a[2]=d*b;return a};c.lerp=function(a,d,b){return a+(d-a)*b};c.bilerp=function(a,d,b,e,c,f){a+=(d-a)*
c;return a+(b+(e-b)*c-a)*f};c.slerp=function(a,d,b,e){void 0===e&&(e=f.vec3f64.create());var c=f.vec3.length(a),k=f.vec3.length(d),h=f.vec3.dot(a,d)/(c*k);if(.9999999999999999>h){var h=Math.acos(h),g=((1-b)*c+b*k)/Math.sin(h),k=g/k*Math.sin(b*h);f.vec3.scale(m,a,g/c*Math.sin((1-b)*h));f.vec3.scale(n,d,k);return f.vec3.add(e,m,n)}return f.vec3.lerp(e,a,d,b)};c.angle=function(a,d,b){a=f.vec3.normalize(m,a);d=f.vec3.normalize(n,d);var e=q(f.vec3.dot(a,d));return b&&(a=f.vec3.cross(v,a,d),0>f.vec3.dot(a,
b))?-e:e};c.clamp=r;c.isFinite=Number.isFinite||function(a){return"number"===typeof a&&window.isFinite(a)};c.isNaN=Number.isNaN||function(a){return a!==a};c.makePiecewiseLinearFunction=function(a){var d=a.length;return function(b){if(b<=a[0][0])return a[0][1];if(b>=a[d-1][0])return a[d-1][1];for(var e=1;b>a[e][0];)e++;var c=a[e][0];b=(c-b)/(c-a[e-1][0]);return b*a[e-1][1]+(1-b)*a[e][1]}};c.vectorEquals=function(a,d){if(null==a||null==d)return a!==d;if(a.length!==d.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!==
d[b])return!1;return!0};c.floatEqualRelative=function(a,d,b){void 0===b&&(b=1E-6);if(c.isNaN(a)||c.isNaN(d))return!1;if(a===d)return!0;var e=Math.abs(a-d),f=Math.abs(a),g=Math.abs(d);if(0===a||0===d||1E-12>f&&1E-12>g){if(e>.01*b)return!1}else if(e/(f+g)>b)return!1;return!0};c.floatEqualAbsolute=function(a,d,b){void 0===b&&(b=1E-6);return c.isNaN(a)||c.isNaN(d)?!1:(a>d?a-d:d-a)<=b};g=function(){function a(a,b){this.min=a;this.max=b;this.range=b-a}a.prototype.ndiff=function(a,b){void 0===b&&(b=0);return Math.ceil((a-
b)/this.range)*this.range+b};a.prototype._normalize=function(a,b,e,c){void 0===c&&(c=0);e-=c;e<a?e+=this.ndiff(a-e):e>b&&(e-=this.ndiff(e-b));return e+c};a.prototype.normalize=function(a,b){return this._normalize(this.min,this.max,a,b)};a.prototype.clamp=function(a,b){void 0===b&&(b=0);return r(a-b,this.min,this.max)+b};a.prototype.monotonic=function(a,b,c){return a<b?b:b+this.ndiff(a-b,c)};a.prototype.minimalMonotonic=function(a,b,c){return this._normalize(a,a+this.range,b,c)};a.prototype.center=
function(a,b,c){b=this.monotonic(a,b,c);return this.normalize((a+b)/2,c)};a.prototype.diff=function(a,b,c){return this.monotonic(a,b,c)-a};a.prototype.contains=function(a,b,c){b=this.minimalMonotonic(a,b);c=this.minimalMonotonic(a,c);return c>a&&c<b};return a}();c.Cyclical=g;c.planeFromPoints=function(a,d,b,c){f.vec3.subtract(t,d,a);f.vec3.subtract(u,b,a);f.vec3.cross(c,t,u);f.vec3.normalize(c,c);c[3]=-f.vec3.dot(a,c)};var t=f.vec3f64.create(),u=f.vec3f64.create();c.cyclical2PI=l(new g(0,2*Math.PI));
c.cyclicalPI=l(new g(-Math.PI,Math.PI));c.cyclicalDeg=l(new g(0,360));var v=f.vec3f64.create(),m=f.vec3f64.create(),n=f.vec3f64.create()});
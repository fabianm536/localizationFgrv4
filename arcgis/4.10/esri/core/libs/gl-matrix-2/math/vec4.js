// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(y,d,k){function q(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a}function r(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2];a[3]=b[3]*c[3];return a}function t(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2];a[3]=b[3]/c[3];return a}function u(a,b){var c=b[0]-a[0],f=b[1]-a[1],d=b[2]-a[2];a=b[3]-a[3];return Math.sqrt(c*c+f*f+d*d+a*a)}function v(a,b){var c=b[0]-a[0],f=b[1]-a[1],d=b[2]-a[2];a=b[3]-a[3];return c*c+f*f+
d*d+a*a}function w(a){var b=a[0],c=a[1],f=a[2];a=a[3];return Math.sqrt(b*b+c*c+f*f+a*a)}function x(a){var b=a[0],c=a[1],f=a[2];a=a[3];return b*b+c*c+f*f+a*a}Object.defineProperty(d,"__esModule",{value:!0});d.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a};d.set=function(a,b,c,f,d){a[0]=b;a[1]=c;a[2]=f;a[3]=d;return a};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a};d.subtract=q;d.multiply=r;d.divide=t;d.ceil=function(a,b){a[0]=Math.ceil(b[0]);
a[1]=Math.ceil(b[1]);a[2]=Math.ceil(b[2]);a[3]=Math.ceil(b[3]);return a};d.floor=function(a,b){a[0]=Math.floor(b[0]);a[1]=Math.floor(b[1]);a[2]=Math.floor(b[2]);a[3]=Math.floor(b[3]);return a};d.min=function(a,b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);a[2]=Math.min(b[2],c[2]);a[3]=Math.min(b[3],c[3]);return a};d.max=function(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);a[2]=Math.max(b[2],c[2]);a[3]=Math.max(b[3],c[3]);return a};d.round=function(a,b){a[0]=Math.round(b[0]);
a[1]=Math.round(b[1]);a[2]=Math.round(b[2]);a[3]=Math.round(b[3]);return a};d.scale=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a};d.scaleAndAdd=function(a,b,c,f){a[0]=b[0]+c[0]*f;a[1]=b[1]+c[1]*f;a[2]=b[2]+c[2]*f;a[3]=b[3]+c[3]*f;return a};d.distance=u;d.squaredDistance=v;d.length=w;d.squaredLength=x;d.negate=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3];return a};d.inverse=function(a,b){a[0]=1/b[0];a[1]=1/b[1];a[2]=1/b[2];a[3]=1/b[3];return a};d.normalize=
function(a,b){var c=b[0],f=b[1],d=b[2];b=b[3];var e=c*c+f*f+d*d+b*b;0<e&&(e=1/Math.sqrt(e),a[0]=c*e,a[1]=f*e,a[2]=d*e,a[3]=b*e);return a};d.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};d.lerp=function(a,b,c,f){var d=b[0],e=b[1],g=b[2];b=b[3];a[0]=d+f*(c[0]-d);a[1]=e+f*(c[1]-e);a[2]=g+f*(c[2]-g);a[3]=b+f*(c[3]-b);return a};d.random=function(a,b){b=b||1;var c,d,h,e,g,l;do c=2*k.RANDOM()-1,d=2*k.RANDOM()-1,g=c*c+d*d;while(1<=g);do h=2*k.RANDOM()-1,e=2*k.RANDOM()-1,l=h*h+e*e;while(1<=
l);g=Math.sqrt((1-g)/l);a[0]=b*c;a[1]=b*d;a[2]=b*h*g;a[3]=b*e*g;return a};d.transformMat4=function(a,b,c){var d=b[0],h=b[1],e=b[2];b=b[3];a[0]=c[0]*d+c[4]*h+c[8]*e+c[12]*b;a[1]=c[1]*d+c[5]*h+c[9]*e+c[13]*b;a[2]=c[2]*d+c[6]*h+c[10]*e+c[14]*b;a[3]=c[3]*d+c[7]*h+c[11]*e+c[15]*b;return a};d.transformQuat=function(a,b,c){var d=b[0],h=b[1],e=b[2],g=c[0],l=c[1],k=c[2];c=c[3];var m=c*d+l*e-k*h,n=c*h+k*d-g*e,p=c*e+g*h-l*d,d=-g*d-l*h-k*e;a[0]=m*c+d*-g+n*-k-p*-l;a[1]=n*c+d*-l+p*-g-m*-k;a[2]=p*c+d*-k+m*-l-n*
-g;a[3]=b[3];return a};d.str=function(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]};d.equals=function(a,b){var c=a[0],d=a[1],h=a[2];a=a[3];var e=b[0],g=b[1],l=b[2];b=b[3];return Math.abs(c-e)<=k.EPSILON*Math.max(1,Math.abs(c),Math.abs(e))&&Math.abs(d-g)<=k.EPSILON*Math.max(1,Math.abs(d),Math.abs(g))&&Math.abs(h-l)<=k.EPSILON*Math.max(1,Math.abs(h),Math.abs(l))&&Math.abs(a-b)<=k.EPSILON*Math.max(1,Math.abs(a),
Math.abs(b))};d.sub=q;d.mul=r;d.div=t;d.dist=u;d.sqrDist=v;d.len=w;d.sqrLen=x});
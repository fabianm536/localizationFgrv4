// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/gl-matrix ../../support/geometryUtils ./BufferVectorMath ./GeometryData ./Util".split(" "),function(Y,Z,b,U,T,A,h){var I=T.Vec3Compact,P;(function(b){for(var r=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],H=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],d=[0,0,1,0,1,1,0,1],g=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],a=Array(36),c=0;6>c;c++)for(var f=0;6>f;f++)a[6*
c+f]=c;for(var m=Array(36),c=0;6>c;c++)m[6*c+0]=0,m[6*c+1]=1,m[6*c+2]=2,m[6*c+3]=2,m[6*c+4]=3,m[6*c+5]=0;b.createGeometry=function(c){Array.isArray(c)||(c=[c,c,c]);for(var e=new Float32Array(24),f=0;8>f;f++)e[3*f]=r[f][0]*c[0],e[3*f+1]=r[f][1]*c[1],e[3*f+2]=r[f][2]*c[2];c={};c[h.VertexAttrConstants.POSITION]=new Uint32Array(g);c[h.VertexAttrConstants.NORMAL]=new Uint32Array(a);c[h.VertexAttrConstants.UV0]=new Uint32Array(m);f={};f[h.VertexAttrConstants.POSITION]={size:3,data:e};f[h.VertexAttrConstants.NORMAL]=
{size:3,data:new Float32Array(H)};f[h.VertexAttrConstants.UV0]={size:2,data:new Float32Array(d)};return new A(f,c)}})(P||(P={}));var N;(function(b){var r=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],H=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],d=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],g=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];b.createGeometry=function(a){Array.isArray(a)||(a=[a,a,a]);for(var c=new Float32Array(18),f=0;6>f;f++)c[3*f]=r[f][0]*a[0],
c[3*f+1]=r[f][1]*a[1],c[3*f+2]=r[f][2]*a[2];a={};a[h.VertexAttrConstants.POSITION]=new Uint32Array(d);a[h.VertexAttrConstants.NORMAL]=new Uint32Array(g);f={};f[h.VertexAttrConstants.POSITION]={size:3,data:c};f[h.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(H)};return new A(f,a)}})(N||(N={}));var Q;(function(r){var C=b.vec3f32.fromValues(-.5,0,-.5),H=b.vec3f32.fromValues(.5,0,-.5),d=b.vec3f32.fromValues(0,0,.5),g=b.vec3f32.fromValues(0,.5,0),a=b.vec3f32.create(),c=b.vec3f32.create(),f=
b.vec3f32.create(),m=b.vec3f32.create(),e=b.vec3f32.create();b.vec3.subtract(a,C,g);b.vec3.subtract(c,C,H);b.vec3.cross(f,a,c);b.vec3.normalize(f,f);b.vec3.subtract(a,H,g);b.vec3.subtract(c,H,d);b.vec3.cross(m,a,c);b.vec3.normalize(m,m);b.vec3.subtract(a,d,g);b.vec3.subtract(c,d,C);b.vec3.cross(e,a,c);b.vec3.normalize(e,e);var n=[C,H,d,g],l=[0,-1,0,f[0],f[1],f[2],m[0],m[1],m[2],e[0],e[1],e[2]],p=[0,1,2,3,1,0,3,2,1,3,0,2],t=[0,0,0,1,1,1,2,2,2,3,3,3];r.createGeometry=function(a){Array.isArray(a)||(a=
[a,a,a]);for(var c=new Float32Array(12),d=0;4>d;d++)c[3*d]=n[d][0]*a[0],c[3*d+1]=n[d][1]*a[1],c[3*d+2]=n[d][2]*a[2];a={};a[h.VertexAttrConstants.POSITION]=new Uint32Array(p);a[h.VertexAttrConstants.NORMAL]=new Uint32Array(t);d={};d[h.VertexAttrConstants.POSITION]={size:3,data:c};d[h.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(l)};return new A(d,a)}})(Q||(Q={}));var R;(function(r){function C(d,g,a,c,f){if(Math.abs(b.vec3.dot(g,d))>f)return!1;b.vec3.cross(a,d,g);b.vec3.normalize(a,a);
b.vec3.cross(c,a,d);b.vec3.normalize(c,c);return!0}function H(d,g,a,c,f,b,e){return C(d,g,f,b,e)||C(d,a,f,b,e)||C(d,c,f,b,e)}r.createBoxGeometry=P.createGeometry;r.createDiamondGeometry=N.createGeometry;r.createTetrahedronGeometry=Q.createGeometry;r.createSphereGeometry=function(d,g,a,c,f,b,e){d=d||50;c=void 0!==c?c:-Math.PI;f=void 0!==f?f:2*Math.PI;b=void 0!==b?b:.5*-Math.PI;e=void 0!==e?e:Math.PI;var m=Math.max(3,Math.floor(g)||8),l=Math.max(2,Math.floor(a)||6),p=(m+1)*(l+1);a=new Float32Array(3*
p);g=new Float32Array(3*p);for(var p=new Float32Array(2*p),t=[],k=0,y=0;y<=l;y++){for(var r=[],D=y/l,w=b+D*e,u=Math.cos(w),B=0;B<=m;B++){var q=B/m,x=c+q*f,V=Math.cos(x)*u,F=Math.sin(w),x=-Math.sin(x)*u;a[3*k]=V*d;a[3*k+1]=F*d;a[3*k+2]=x*d;g[3*k]=V;g[3*k+1]=F;g[3*k+2]=x;p[2*k]=q;p[2*k+1]=D;r.push(k);++k}t.push(r)}d=new Uint32Array(2*m*(l-1)*3);for(y=k=0;y<l;y++)for(B=0;B<m;B++)c=t[y][B],f=t[y][B+1],b=t[y+1][B+1],e=t[y+1][B],0===y?(d[k++]=c,d[k++]=b,d[k++]=e):y===l-1?(d[k++]=c,d[k++]=f,d[k++]=b):(d[k++]=
c,d[k++]=f,d[k++]=b,d[k++]=b,d[k++]=e,d[k++]=c);h.assert(k===d.length);m={};m[h.VertexAttrConstants.POSITION]=d;m[h.VertexAttrConstants.NORMAL]=d;m[h.VertexAttrConstants.UV0]=d;l={};l[h.VertexAttrConstants.POSITION]={size:3,data:a};l[h.VertexAttrConstants.NORMAL]={size:3,data:g};l[h.VertexAttrConstants.UV0]={size:2,data:p};return new A(l,m)};r.createPolySphereGeometry=function(d,g,a){function c(a,c){a>c&&(c=[c,a],a=c[0],c=c[1]);var b=a.toString()+"."+c.toString();if(e[b])return e[b];var g=f.length;
f.length+=3;I.add(f,3*a,f,3*c,f,g);I.scale(f,g,d/I.length(f,g));g/=3;return e[b]=g}var f;a?(f=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1])):(a=d*(1+Math.sqrt(5))/2,f=[-d,a,0,d,a,0,-d,-a,0,d,-a,0,0,-d,a,0,d,a,0,-d,-a,0,d,-a,a,0,-d,a,0,d,-a,0,-d,-a,0,d],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]));for(var b=0;b<f.length;b+=3)I.scale(f,
b,d/I.length(f,b));for(var e={},b=0;b<g;b++){for(var n=a.length,l=new Uint32Array(4*n),p=0;p<n;p+=3){var t=a[p],k=a[p+1],y=a[p+2],r=c(t,k),D=c(k,y),w=c(y,t),u=4*p;l[u]=t;l[u+1]=r;l[u+2]=w;l[u+3]=k;l[u+4]=D;l[u+5]=r;l[u+6]=y;l[u+7]=w;l[u+8]=D;l[u+9]=r;l[u+10]=D;l[u+11]=w}a=l;e={}}g=new Float32Array(f);for(b=0;b<g.length;b+=3)I.normalize(g,b);b={};b[h.VertexAttrConstants.POSITION]=a;b[h.VertexAttrConstants.NORMAL]=a;a={};a[h.VertexAttrConstants.POSITION]={size:3,data:new Float32Array(f)};a[h.VertexAttrConstants.NORMAL]=
{size:3,data:g};return new A(a,b)};r.createPointGeometry=function(d,b,a,c,f,m,e){b=b?new Float32Array([b[0],b[1],b[2]]):new Float32Array([0,0,0]);d=d?new Float32Array([d[0],d[1],d[2]]):new Float32Array([0,0,1]);m=m?new Float32Array(m):new Float32Array([0,0]);var g=a?new Uint8Array([255*a[0],255*a[1],255*a[2],3<a.length?255*a[3]:255]):new Uint8Array([255,255,255,255]),l=null!=c&&2===c.length?new Float32Array(c):new Float32Array([1,1]);c=new Uint32Array([0]);a={};a[h.VertexAttrConstants.POSITION]=c;
a[h.VertexAttrConstants.NORMAL]=c;a[h.VertexAttrConstants.UV0]=c;a[h.VertexAttrConstants.COLOR]=c;a[h.VertexAttrConstants.SIZE]=c;var p={};p[h.VertexAttrConstants.POSITION]={size:3,data:b};p[h.VertexAttrConstants.NORMAL]={size:3,data:d};p[h.VertexAttrConstants.UV0]={size:m.length,data:m};p[h.VertexAttrConstants.COLOR]={size:4,data:g};p[h.VertexAttrConstants.SIZE]={size:2,data:l};null!=f&&(f=new Float32Array([f[0],f[1],f[2],f[3]]),a[h.VertexAttrConstants.AUXPOS1]=c,p[h.VertexAttrConstants.AUXPOS1]=
{size:4,data:f});null!=e&&(e=new Float32Array([e[0],e[1],e[2],e[3]]),a[h.VertexAttrConstants.AUXPOS2]=c,p[h.VertexAttrConstants.AUXPOS2]={size:4,data:e});return new A(p,a,A.DefaultOffsets,"point")};r.createPointArrayGeometry=function(d,b){for(var a=new Float32Array(3*d.length),c=new Float32Array(b?3*d.length:3),f=new Uint32Array(d.length),g=new Uint32Array(d.length),e=0;e<d.length;e++)a[3*e]=d[e][0],a[3*e+1]=d[e][1],a[3*e+2]=d[e][2],b&&(c[3*e]=b[e][0],c[3*e+1]=b[e][1],c[3*e+2]=b[e][2]),f[e]=e,g[e]=
0;b||(c[0]=0,c[1]=1,c[2]=0);d=new Float32Array(2);d[0]=0;d[1]=0;e={};e[h.VertexAttrConstants.POSITION]=f;e[h.VertexAttrConstants.NORMAL]=b?f:g;e[h.VertexAttrConstants.UV0]=g;b={};b[h.VertexAttrConstants.POSITION]={size:3,data:a};b[h.VertexAttrConstants.NORMAL]={size:3,data:c};b[h.VertexAttrConstants.UV0]={size:2,data:d};return new A(b,e,A.DefaultOffsets,"point")};r.createTriangleGeometry=function(){var d=new Float32Array([0,0,0,0,0,100,100,0,0]),b=new Uint32Array([0,1,2]),a=new Float32Array([0,1,
0]),c=new Uint32Array([0,0,0]),f=new Float32Array([0,0]),m=new Uint32Array([0,0,0]),e={};e[h.VertexAttrConstants.POSITION]=b;e[h.VertexAttrConstants.NORMAL]=c;e[h.VertexAttrConstants.UV0]=m;b={};b[h.VertexAttrConstants.POSITION]={size:3,data:d};b[h.VertexAttrConstants.NORMAL]={size:3,data:a};b[h.VertexAttrConstants.UV0]={size:2,data:f};return new A(b,e)};r.createSquareGeometry=function(b){var d=new Float32Array(12);if(b)for(var a=0;4>a;a++)for(var c=0;3>c;c++)d[3*a+c]=b[a][c];else d[0]=-1,d[1]=-1,
d[2]=0,d[3]=1,d[4]=-1,d[5]=0,d[6]=1,d[7]=1,d[8]=0,d[9]=-1,d[10]=1,d[11]=0;var f=new Uint32Array([0,1,2,2,3,0]);b=new Float32Array([0,0,1]);var m=new Uint32Array([0,0,0,0,0,0]),a=new Float32Array([0,0,1,0,1,1,0,1]),c=new Uint8Array([255,255,255,255]),e={};e[h.VertexAttrConstants.POSITION]=f;e[h.VertexAttrConstants.NORMAL]=m;e[h.VertexAttrConstants.UV0]=f;e[h.VertexAttrConstants.COLOR]=m;f={};f[h.VertexAttrConstants.POSITION]={size:3,data:d};f[h.VertexAttrConstants.NORMAL]={size:3,data:b};f[h.VertexAttrConstants.UV0]=
{size:2,data:a};f[h.VertexAttrConstants.COLOR]={size:4,data:c};return new A(f,e)};r.createConeGeometry=function(d,g,a,c,f,m){void 0===f&&(f=!0);void 0===m&&(m=!0);var e=0,n=b.vec3f32.fromValues(0,e,0),l=b.vec3f32.fromValues(0,e+d,0),p=b.vec3f32.fromValues(0,-1,0),t=b.vec3f32.fromValues(0,1,0);c&&(e=d,l=b.vec3f32.fromValues(0,0,0),n=b.vec3f32.fromValues(0,e,0),p=b.vec3f32.fromValues(0,1,0),t=b.vec3f32.fromValues(0,-1,0));n=[l,n];p=[p,t];t=a+2;l=Math.sqrt(d*d+g*g);if(c)for(c=a-1;0<=c;c--)k=2*Math.PI/
a*c,y=b.vec3f32.fromValues(Math.cos(k)*g,e,Math.sin(k)*g),n.push(y),k=b.vec3f32.fromValues(d*Math.cos(k)/l,-g/l,d*Math.sin(k)/l),p.push(k);else for(c=0;c<a;c++){var k=2*Math.PI/a*c,y=b.vec3f32.fromValues(Math.cos(k)*g,e,Math.sin(k)*g);n.push(y);k=b.vec3f32.fromValues(d*Math.cos(k)/l,g/l,d*Math.sin(k)/l);p.push(k)}d=new Uint32Array(6*(a+2));a=new Uint32Array(6*(a+2));e=g=0;if(f){for(c=3;c<n.length;c++)d[g++]=1,d[g++]=c-1,d[g++]=c,a[e++]=0,a[e++]=0,a[e++]=0;d[g++]=n.length-1;d[g++]=2;d[g++]=1;a[e++]=
0;a[e++]=0;a[e++]=0}if(m){for(c=3;c<n.length;c++)d[g++]=c,d[g++]=c-1,d[g++]=0,a[e++]=c,a[e++]=c-1,a[e++]=1;d[g++]=0;d[g++]=2;d[g++]=n.length-1;a[e++]=1;a[e++]=2;a[e++]=p.length-1}f=new Float32Array(3*t);for(c=0;c<t;c++)f[3*c]=n[c][0],f[3*c+1]=n[c][1],f[3*c+2]=n[c][2];m=new Float32Array(3*t);for(c=0;c<t;c++)m[3*c]=p[c][0],m[3*c+1]=p[c][1],m[3*c+2]=p[c][2];n={};n[h.VertexAttrConstants.POSITION]=d;n[h.VertexAttrConstants.NORMAL]=a;p={};p[h.VertexAttrConstants.POSITION]={size:3,data:f};p[h.VertexAttrConstants.NORMAL]=
{size:3,data:m};return new A(p,n)};r.createCylinderGeometry=function(d,g,a,c,f,m){c=c?b.vec3f32.clone(c):b.vec3f32.fromValues(1,0,0);f=f?b.vec3f32.clone(f):b.vec3f32.fromValues(0,0,0);m=void 0===m?!0:m;var e=b.vec3f32.create();b.vec3.normalize(e,c);c=b.vec3f32.create();b.vec3.scale(c,e,Math.abs(d));var n=b.vec3f32.create();b.vec3.scale(n,c,-.5);b.vec3.add(n,n,f);var l=b.vec3f32.fromValues(0,1,0);.2>Math.abs(1-b.vec3.dot(e,l))&&b.vec3.set(l,0,0,1);var p=b.vec3f32.create();b.vec3.cross(p,e,l);b.vec3.normalize(p,
p);b.vec3.cross(l,p,e);var t=2*a+(m?2:0),k=a+(m?2:0);d=new Float32Array(3*t);f=new Float32Array(3*k);var y=new Float32Array(2*t),r=new Uint32Array(3*a*(m?4:2)),D=new Uint32Array(3*a*(m?4:2));m&&(d[3*(t-2)+0]=n[0],d[3*(t-2)+1]=n[1],d[3*(t-2)+2]=n[2],y[2*(t-2)]=0,y[2*(t-2)+1]=0,d[3*(t-1)+0]=d[3*(t-2)+0]+c[0],d[3*(t-1)+1]=d[3*(t-2)+1]+c[1],d[3*(t-1)+2]=d[3*(t-2)+2]+c[2],y[2*(t-1)]=1,y[2*(t-1)+1]=1,f[3*(k-2)+0]=-e[0],f[3*(k-2)+1]=-e[1],f[3*(k-2)+2]=-e[2],f[3*(k-1)+0]=e[0],f[3*(k-1)+1]=e[1],f[3*(k-1)+
2]=e[2]);for(var e=function(a,c,d){r[a]=c;D[a]=d},w=0,u=b.vec3f32.create(),B=b.vec3f32.create(),q=0;q<a;q++){var x=2*Math.PI/a*q;b.vec3.scale(u,l,Math.sin(x));b.vec3.scale(B,p,Math.cos(x));b.vec3.add(u,u,B);f[3*q+0]=u[0];f[3*q+1]=u[1];f[3*q+2]=u[2];b.vec3.scale(u,u,g);b.vec3.add(u,u,n);d[3*q+0]=u[0];d[3*q+1]=u[1];d[3*q+2]=u[2];y[2*q+0]=q/a;y[2*q+1]=0;d[3*(q+a)+0]=d[3*q+0]+c[0];d[3*(q+a)+1]=d[3*q+1]+c[1];d[3*(q+a)+2]=d[3*q+2]+c[2];y[2*(q+a)+0]=q/a;y[2*q+1]=1;x=(q+1)%a;e(w++,q,q);e(w++,q+a,q);e(w++,
x,x);e(w++,x,x);e(w++,q+a,q);e(w++,x+a,x)}if(m){for(q=0;q<a;q++)x=(q+1)%a,e(w++,t-2,k-2),e(w++,q,k-2),e(w++,x,k-2);for(q=0;q<a;q++)x=(q+1)%a,e(w++,q+a,k-1),e(w++,t-1,k-1),e(w++,x+a,k-1)}g={};g[h.VertexAttrConstants.POSITION]=r;g[h.VertexAttrConstants.NORMAL]=D;g[h.VertexAttrConstants.UV0]=r;a={};a[h.VertexAttrConstants.POSITION]={size:3,data:d};a[h.VertexAttrConstants.NORMAL]={size:3,data:f};a[h.VertexAttrConstants.UV0]={size:2,data:y};return new A(a,g)};r.createTubeGeometry=function(d,b,a,c,f){a=
a||10;c=null!=c?c:!0;h.assert(1<d.length);for(var g=[],e=[],n=0;n<a;n++){g.push([0,-n-1,-((n+1)%a)-1]);var l=n/a*2*Math.PI;e.push([Math.cos(l)*b,Math.sin(l)*b])}return r.createPathExtrusionGeometry(e,d,[[0,0,0]],g,c,f)};r.createPathExtrusionGeometry=function(d,g,a,c,f,m){void 0===m&&(m=b.vec3f32.fromValues(0,0,0));var e=d.length,n=new Float32Array(g.length*e*3+(6*a.length||0)),l=new Float32Array(g.length*e+(2*a.length||0)),p=new Float32Array(g.length*e*3+(a?6:0)),t=(g.length-1)*e*6+6*c.length,k=new Uint32Array(t),
t=new Uint32Array(t),r=0,L=0,D=0,w=0,u=0,B=b.vec3f32.create(),q=b.vec3f32.create(),x=b.vec3f32.create(),C=b.vec3f32.create(),F=b.vec3f32.create(),z=b.vec3f32.create(),G=b.vec3f32.create(),E=b.vec3f64.create(),I=b.vec3f32.create(),S=b.vec3f32.create(),P=b.vec3f32.create(),N=b.vec3f32.create(),Q=b.vec3f32.create(),R=U.plane.create();b.vec3.set(I,0,1,0);b.vec3.subtract(q,g[1],g[0]);b.vec3.normalize(q,q);f?(b.vec3.add(E,g[0],m),b.vec3.normalize(x,E)):b.vec3.set(x,0,0,1);H(q,x,I,I,F,x,W);b.vec3.copy(C,
x);b.vec3.copy(N,F);for(var v=0;v<a.length;v++)b.vec3.scale(z,F,a[v][0]),b.vec3.scale(E,x,a[v][2]),b.vec3.add(z,z,E),b.vec3.add(z,z,g[0]),n[r++]=z[0],n[r++]=z[1],n[r++]=z[2],l[D++]=0;p[L++]=-q[0];p[L++]=-q[1];p[L++]=-q[2];for(v=0;v<c.length;v++)k[w++]=0<c[v][0]?c[v][0]:-c[v][0]-1+a.length,k[w++]=0<c[v][1]?c[v][1]:-c[v][1]-1+a.length,k[w++]=0<c[v][2]?c[v][2]:-c[v][2]-1+a.length,t[u++]=0,t[u++]=0,t[u++]=0;for(var J=a.length,v=a.length-1,K=0;K<g.length;K++){var T=!1;0<K&&(b.vec3.copy(B,q),K<g.length-
1?(b.vec3.subtract(q,g[K+1],g[K]),b.vec3.normalize(q,q)):T=!0,b.vec3.add(S,B,q),b.vec3.normalize(S,S),b.vec3.add(P,g[K-1],C),U.plane.fromPositionAndNormal(g[K],S,R),U.plane.intersectRay(R,U.ray.wrap(P,B),E)?(b.vec3.subtract(E,E,g[K]),b.vec3.normalize(x,E),b.vec3.cross(F,S,x),b.vec3.normalize(F,F)):H(S,C,N,I,F,x,W),b.vec3.copy(C,x),b.vec3.copy(N,F));f&&(b.vec3.add(E,g[K],m),b.vec3.normalize(Q,E));for(var M=0;M<e;M++)if(b.vec3.scale(z,F,d[M][0]),b.vec3.scale(E,x,d[M][1]),b.vec3.add(z,z,E),b.vec3.normalize(G,
z),p[L++]=G[0],p[L++]=G[1],p[L++]=G[2],f?l[D++]=b.vec3.dot(z,Q):l[D++]=z[2],b.vec3.add(z,z,g[K]),n[r++]=z[0],n[r++]=z[1],n[r++]=z[2],!T){var O=(M+1)%e;k[w++]=J+M;k[w++]=J+e+M;k[w++]=J+O;k[w++]=J+O;k[w++]=J+e+M;k[w++]=J+e+O;for(O=0;6>O;O++)t[u++]=k[w-6+O]-v}J+=e}d=g[g.length-1];for(v=0;v<a.length;v++)b.vec3.scale(z,F,a[v][0]),b.vec3.scale(E,x,a[v][1]),b.vec3.add(z,z,E),b.vec3.add(z,z,d),n[r++]=z[0],n[r++]=z[1],n[r++]=z[2],l[D++]=0;a=L/3;p[L++]=q[0];p[L++]=q[1];p[L++]=q[2];e=J-e;for(v=0;v<c.length;v++)k[w++]=
0<=c[v][0]?J+c[v][0]:-c[v][0]-1+e,k[w++]=0<=c[v][2]?J+c[v][2]:-c[v][2]-1+e,k[w++]=0<=c[v][1]?J+c[v][1]:-c[v][1]-1+e,t[u++]=a,t[u++]=a,t[u++]=a;c={};c[h.VertexAttrConstants.POSITION]=k;c[h.VertexAttrConstants.NORMAL]=t;k={};k[h.VertexAttrConstants.POSITION]={size:3,data:n};k.zOffset={size:1,data:l};k[h.VertexAttrConstants.NORMAL]={size:3,data:p};return new A(k,c)};r.createPolylineGeometry=function(d,b){h.assert(1<d.length,"createPolylineGeometry(): polyline needs at least 2 points");h.assert(3===d[0].length,
"createPolylineGeometry(): malformed vertex");h.assert(void 0===b||b.length===d.length,"createPolylineGeometry: need same number of points and normals");h.assert(void 0===b||3===b[0].length,"createPolylineGeometry(): malformed normal");for(var a=new Float32Array(3*d.length),c=new Uint32Array(2*(d.length-1)),f=0,g=0,e=0;e<d.length;e++){for(var n=0;3>n;n++)a[f++]=d[e][n];0<e&&(c[g++]=e-1,c[g++]=e)}f={};g={};f[h.VertexAttrConstants.POSITION]=c;g[h.VertexAttrConstants.POSITION]={size:3,data:a};if(b){for(var a=
new Float32Array(3*b.length),l=0,e=0;e<d.length;e++)for(n=0;3>n;n++)a[l++]=b[e][n];f[h.VertexAttrConstants.NORMAL]=c;g[h.VertexAttrConstants.NORMAL]={size:3,data:a}}return new A(g,f,A.DefaultOffsets,"line")};r.addVertexColors=function(b,g){var a=g||[1,1,1,1];g=new Uint8Array(4);g[0]=255*a[0];g[1]=255*a[1];g[2]=255*a[2];g[3]=255*(3<a.length?a[3]:1);var a={},c=b.getVertexAttr(),d;for(d in c)a[d]=c[d];a[h.VertexAttrConstants.COLOR]={size:4,data:g};g={};for(d in b.indices)g[d]=b.indices[d];g[h.VertexAttrConstants.COLOR]=
new Uint32Array(g[h.VertexAttrConstants.POSITION].length);return b=new A(a,g,b.componentOffsets,b.primitiveType)};r.addNormals=function(d){var g=d.getVertexAttr();d=d.indices;for(var a=T.Vec3Compact.subtract,c=new Float32Array(d.position.length/3*3),f=g.position.data,m=0,e=d.position,n=new Uint32Array(e.length),l=0;l<e.length;l+=3){a(f,3*e[l],f,3*e[l+2],X,0);a(f,3*e[l],f,3*e[l+1],G,0);b.vec3.cross(G,G,X);b.vec3.normalize(G,G);var p=m/3;c[m++]=G[0];c[m++]=G[1];c[m++]=G[2];n[l]=p;n[l+1]=p;n[l+2]=p}g[h.VertexAttrConstants.NORMAL]=
{size:3,data:c,offsetIdx:0,strideIdx:3};d[h.VertexAttrConstants.NORMAL]=n};r.cgToGIS=function(b,g){void 0===g&&(g=b);var a=b.getVertexAttr();b=a.position.data;var a=a.normal.data,c=g.getVertexAttr(),d=c.position.data,c=c.normal.data;if(a)for(var h=0;h<a.length;h+=3){var e=a[h+1];c[h+1]=-a[h+2];c[h+2]=e}if(b)for(h=0;h<b.length;h+=3)e=b[h+1],d[h+1]=-b[h+2],d[h+2]=e;return g};r.makeOrthoBasisDirUp=C;r.makeOrthoBasisDirUpFallback=H})(R||(R={}));var W=.99619469809,G=b.vec3f32.create(),X=b.vec3f32.create();
return R});
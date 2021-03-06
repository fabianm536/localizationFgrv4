// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/compilerUtils ../../../../../core/libs/gl-matrix-2/gl-matrix ./sliceToolConfig ../../../support/geometryUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Util".split(" "),function(P,l,z,a,p,r,h,C,O,F,J){function K(d,c,b,e,f,g){var n=a.vec3.dot(d,c),n=Math.abs(n)>p.VERTICAL_DOT_THRESHOLD?"vertical":"horizontal",m=h.sv3d.get(),k=h.sv3d.get(),
t=function(){a.vec3.cross(m,c,b.viewUp);a.vec3.cross(k,c,m)},q=function(d){a.vec3.cross(k,d,c);a.vec3.copy(m,c)};if(z.isSome(e)&&e!==n)switch(e){case "vertical":t();break;case "horizontal":q(b.viewUp);break;default:z.neverReached(e)}else switch(n){case "vertical":t();break;case "horizontal":q(d);break;default:z.neverReached(n)}d=a.vec3.cross(h.sv3d.get(),m,k);0<a.vec3.dot(d,b.viewForward)&&a.vec3.scale(k,k,-1);a.vec3.normalize(f,m);a.vec3.normalize(g,k)}function L(d,c,b,e){d=a.vec3.normalize(h.sv3d.get(),
d);c=a.vec3.normalize(h.sv3d.get(),c);var f=a.vec3.cross(h.sv3d.get(),d,c);e[0]=d[0];e[1]=d[1];e[2]=d[2];e[3]=0;e[4]=c[0];e[5]=c[1];e[6]=c[2];e[7]=0;e[8]=f[0];e[9]=f[1];e[10]=f[2];e[11]=0;e[12]=b[0];e[13]=b[1];e[14]=b[2];e[15]=1;return e}function G(d,c){return Math.abs(a.vec3.dot(c.basis1,d))>Math.abs(a.vec3.dot(c.basis2,d))?1:2}function M(d){return{basis1Positive:{position:a.vec3.add(h.sv3d.get(),d.origin,d.basis1),rotationIdx:0},basis2Positive:{position:a.vec3.add(h.sv3d.get(),d.origin,d.basis2),
rotationIdx:1},basis1Negative:{position:a.vec3.subtract(h.sv3d.get(),d.origin,d.basis1),rotationIdx:2},basis2Negative:{position:a.vec3.subtract(h.sv3d.get(),d.origin,d.basis2),rotationIdx:3}}}function H(d,c,b){var e=b.projectPoint(a.vec3.add(h.sv3d.get(),d,c),h.sv3d.get());d=b.projectPoint(a.vec3.subtract(h.sv3d.get(),d,c),h.sv3d.get());return a.vec3.squaredLength(a.vec3.subtract(e,e,d))}function x(d){var c=a.vec3.length(d.basis1);d=a.vec3.length(d.basis2);return p.RESIZE_HANDLE_EDGE_PADDING_FRAC*
Math.min(c,d)}function N(d,c,b,e){a.vec3.normalize(b,d.basis1);a.vec3.scale(b,b,-c.direction[0]*c.scale);a.vec3.add(b,b,c.position);a.vec3.normalize(e,d.basis2);a.vec3.scale(e,e,-c.direction[1]*c.scale);a.vec3.add(e,e,c.position)}function D(d){return 0!==d.direction[0]&&0!==d.direction[1]}function I(d,c){return Math.abs(a.vec3.dot(d.plane,c))<=p.PERPENDICULAR_GROUND_DOT_THRESHOLD}Object.defineProperty(l,"__esModule",{value:!0});l.createPlane=function(d,c,b,e,f,g,n,m,k){m=m.worldUpAtPosition(d,h.sv3d.get());
K(c,m,g,n,k.basis1,k.basis2);a.vec3.scale(k.basis1,k.basis1,e);a.vec3.scale(k.basis2,k.basis2,f);a.vec3.copy(k.origin,c);a.vec3.scale(k.origin,k.origin,-b);a.vec3.add(k.origin,k.origin,d);return r.boundedPlane.fromValues(k.origin,k.basis1,k.basis2,k)};l.normalToBases=K;l.resizePlane=function(d,c,b,e,f,g){var n=a.vec3.copy(h.sv3d.get(),g.origin),m=a.vec3.copy(h.sv3d.get(),g.basis1),k=a.vec3.copy(h.sv3d.get(),g.basis2),t=a.vec3.copy(h.sv3d.get(),f.origin);a.vec3.add(t,t,a.vec3.scale(h.sv3d.get(),f.basis1,
0>d.direction[0]?1:-1));a.vec3.add(t,t,a.vec3.scale(h.sv3d.get(),f.basis2,0>d.direction[1]?1:-1));var q=a.vec3.length(f.basis1),l=a.vec3.length(f.basis2);b=a.vec3.subtract(h.sv3d.get(),b,t);var A=a.vec3.subtract(h.sv3d.get(),c,t),v=0;c=0;if(D(d)){var u=x(f),z=x(g),v=q-.5*d.direction[0]*a.vec3.dot(f.basis1,A)/q;c=l-.5*d.direction[1]*a.vec3.dot(f.basis2,A)/l;A=z/u;v*=A;c*=A}A=.5*d.direction[0]*a.vec3.dot(f.basis1,b)/q;u=.5*d.direction[1]*a.vec3.dot(f.basis2,b)/l;b=v+A;c+=u;q=a.vec3.scale(h.sv3d.get(),
f.basis1,b/q);f=a.vec3.scale(h.sv3d.get(),f.basis2,c/l);0<b&&H(g.origin,q,e)>p.PLANE_MIN_BASIS_SCREEN_LEN2&&a.vec3.copy(m,q);0<c&&H(g.origin,f,e)>p.PLANE_MIN_BASIS_SCREEN_LEN2&&a.vec3.copy(k,f);a.vec3.copy(n,t);a.vec3.add(n,n,a.vec3.scale(h.sv3d.get(),m,0>d.direction[0]?-1:1));a.vec3.add(n,n,a.vec3.scale(h.sv3d.get(),k,0>d.direction[1]?-1:1));return r.boundedPlane.fromValues(n,m,k,g)};l.calculatePlaneHalfSize=function(d,a){return p.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(a.width,a.height)*
a.computePixelSizeAt(d)};l.createShiftPlane=function(d,c,b,e){b=a.vec3.cross(h.sv3d.get(),c,b);a.vec3.cross(b,b,c);return r.plane.fromPositionAndNormal(d,b,e)};l.calculateBoundedPlaneTranslateRotate=function(a,c){return L(a.basis1,a.basis2,a.origin,c)};l.hideHandles=function(a,c,b){a.visible=!1;c.visible=!1;b.forEach(function(a){return a.visible=!1})};l.createRotatePlane=function(d,c,b){var e=c.worldUpAtPosition(d.origin,h.sv3d.get());c=I(d,e);e=G(e,d);c=a.vec3.copy(h.sv3d.get(),c?1===e?d.basis1:
d.basis2:d.plane);return r.plane.fromPositionAndNormal(d.origin,c,b)};l.updateShiftRestartHandle=function(d,c,b,e,f){if(d.forceHide)d.visible=!1;else{d.floating=!1;var g=e.worldUpAtPosition(b.origin,h.sv3d.get());e=I(b,g);var g=G(g,b),n=M(b);e=e&&2!==g?n.basis2Positive:n.basis1Positive;a.mat4.rotateZ(d.transform,c,e.rotationIdx*Math.PI/2);c=a.vec3.subtract(h.sv3d.get(),e.position,b.origin);a.vec3.normalize(c,c);c=a.vec3.scale(h.sv3d.get(),c,f.computePixelSizeAt(e.position)*p.SHIFT_RESTART_OFFSET_DISTANCE);
a.vec3.add(c,c,e.position);e=f.projectPoint(c,h.sv3d.get());var m=f.viewport,g=m[0],n=m[1],k=m[2],m=m[3],t=Math.min(k,m)/16,l=!1;e[0]<g+t?(e[0]=g+t,l=!0):e[0]>g+k-t&&(e[0]=g+k-t,l=!0);e[1]<n+t?(e[1]=n+t,l=!0):e[1]>n+m-t&&(e[1]=n+m-t,l=!0);g=l;r.ray.fromScreen(f,e,E);a.vec3.normalize(E.direction,E.direction);e=h.sv3d.get();g&&r.boundedPlane.intersectRay(b,E,e)&&(d.floating=!0,c=e);b=f.computePixelSizeAt(c);a.mat4.scale(d.transform,d.transform,a.vec3.set(h.sv3d.get(),b,b,b));d.transform[12]=c[0];d.transform[13]=
c[1];d.transform[14]=c[2];d.position=a.vec3f64.clone(c);d.visible=!0}};l.updateShiftRestartObject=function(a,c,b){c.visible&&a(c.transform,b)};l.updateResizeHandles=function(d,c,b){var e=a.vec3.length(c.basis1),f=a.vec3.length(c.basis2),g=x(c),n=x(c);b.forEach(function(b){b.visible=!0;a.vec3.add(b.position,a.vec3.scale(h.sv3d.get(),c.basis1,b.direction[0]),a.vec3.scale(h.sv3d.get(),c.basis2,b.direction[1]));a.vec3.add(b.position,c.origin,b.position);var k=0;if(D(b))1===b.direction[0]&&-1===b.direction[1]?
k=Math.PI/2:1===b.direction[0]&&1===b.direction[1]?k=Math.PI:-1===b.direction[0]&&1===b.direction[1]&&(k=3*Math.PI/2),b.scale=n;else{var k=0!==b.direction[0]?1:2,m=1===k?f:e,k=1===k?Math.PI/2:0;b.scale=m-g}a.mat4.identity(b.transform);a.mat4.rotateZ(b.transform,b.transform,k);a.mat4.scale(b.transform,b.transform,a.vec3.set(h.sv3d.get(),b.scale,b.scale,b.scale));a.mat4.multiply(b.transform,d,b.transform);b.transform[12]=b.position[0];b.transform[13]=b.position[1];b.transform[14]=b.position[2]})};l.updateResizeHandleObjects=
function(a,c,b){for(var d=0;d<c.length;d++)(0,a[d])(c[d].transform,d===b)};l.updateRotateHeadingHandle=function(d,c,b,e,f,g){f.forceHide?f.visible=!1:(g=b.worldUpAtPosition(c.origin,h.sv3d.get()),b=I(c,g),g=G(g,c),c=M(c),c=b&&2!==g?c.basis2Negative:c.basis1Negative,a.mat4.identity(f.transform),a.mat4.rotateZ(f.transform,f.transform,c.rotationIdx*Math.PI/2),b&&a.mat4.rotateX(f.transform,f.transform,Math.PI/2),a.mat4.multiply(f.transform,d,f.transform),d=c.position,e=e.computePixelSizeAt(d),a.mat4.scale(f.transform,
f.transform,a.vec3.set(h.sv3d.get(),e,e,e)),f.transform[12]=d[0],f.transform[13]=d[1],f.transform[14]=d[2],f.position=a.vec3f64.clone(d),f.visible=!0)};l.updateRotateHeadingObject=function(a,c,b){c.visible&&a(c.transform,b)};l.intersectsShiftRestartHandle=function(d,c,b){if(!d.visible)return!1;for(var e=p.SHIFT_RESTART_TIP_RADIUS*("mouse"===b.pointerType?p.MOUSE_INPUT_FOCUS_MULTIPLIER:p.TOUCH_INPUT_FOCUS_MULTIPLIER)*b.camera.computePixelSizeAt(d.position),f=a.vec3.transformMat4(h.sv3d.get(),c[0],
d.transform),g=1;g<c.length;g++){var n=a.vec3.transformMat4(h.sv3d.get(),c[g],d.transform),f=r.lineSegment.closestRayDistance2(r.lineSegment.fromPoints(f,n,w),b.ray);if(null!=f&&f<e*e)return!0;f=n}return!1};l.intersectsResizeHandle=function(d,c,b){if(!d.visible)return!1;var e=a.vec3.length(c.basis1),f=a.vec3.length(c.basis2),g=x(c),n=d.position,m=p.RESIZE_HANDLE_INPUT_RADIUS*("mouse"===b.pointerType?p.MOUSE_INPUT_FOCUS_MULTIPLIER:p.TOUCH_INPUT_FOCUS_MULTIPLIER)*b.camera.computePixelSizeAt(n);if(D(d))return g=
h.sv3d.get(),e=h.sv3d.get(),N(c,d,g,e),c=r.lineSegment.closestRayDistance2(r.lineSegment.fromPoints(n,g,w),b.ray),b=r.lineSegment.closestRayDistance2(r.lineSegment.fromPoints(n,e,w),b.ray),null!=c&&c<m*m||null!=b&&b<m*m;d=0!==d.direction[0]?1:2;c=1===d?c.basis2:c.basis1;d=1===d?f:e;c=a.vec3.scale(h.sv3d.get(),c,1-g/d);g=a.vec3.add(h.sv3d.get(),n,c);e=a.vec3.subtract(h.sv3d.get(),n,c);b=r.lineSegment.closestRayDistance2(r.lineSegment.fromPoints(g,e,w),b.ray);return null!=b&&b<m*m};l.intersectsRotateHeadingHandle=
function(d,c,b){if(!d.visible)return!1;for(var e=p.ROTATE_HEADING_TIP_RADIUS*("mouse"===b.pointerType?p.MOUSE_INPUT_FOCUS_MULTIPLIER:p.TOUCH_INPUT_FOCUS_MULTIPLIER)*b.camera.computePixelSizeAt(d.position),f=a.vec3.transformMat4(h.sv3d.get(),c[0],d.transform),g=1;g<c.length;g++){var n=a.vec3.transformMat4(h.sv3d.get(),c[g],d.transform),f=r.lineSegment.closestRayDistance2(r.lineSegment.fromPoints(f,n,w),b.ray);if(null!=f&&f<e*e)return!0;f=n}return!1};l.calculateInputRotationTransform=function(d,c,b,
e,f){d=a.vec3.subtract(h.sv3d.get(),d,b);var g=a.vec3.cross(h.sv3d.get(),e,d);b=L(d,g,b,h.sm4d.get());a.mat4.invert(b,b);c=a.vec3.transformMat4(h.sv3d.get(),c,b);c=Math.atan2(c[1],c[0]);return a.mat4.rotate(f,a.mat4.identity(f),c,e)};l.calculateScreenSpaceBasisLength2=H;l.calculateResizeHandlePadding=x;l.calculateDiagonalResizeHandleScale=function(a){return x(a)};l.calculateDiagonalResizeHandleEndPositions=N;l.isDiagonalResizeHandle=D;l.createArrowGeometry=function(d,c,b){var e=function(e){var g=
(e?c:d).slice(0),f=a.vec3.subtract(h.sv3d.get(),g[0],g[1]);a.vec3.normalize(f,f);var m=a.vec3.subtract(h.sv3d.get(),g[g.length-1],g[g.length-2]);a.vec3.normalize(m,m);if(0<b.padding){var k=a.vec3.scale(a.vec3f64.create(),m,-b.padding);g[g.length-1]=a.vec3.add(k,k,g[g.length-1]);b.bothEnds&&(k=a.vec3.scale(a.vec3f64.create(),f,-b.padding),g[0]=a.vec3.add(k,k,g[0]))}var k=e?b.tipFocusMultiplier:1,l=b.tipLength*(b.focusTipLength?k:1),q=b.tipRadius*k,k=a.mat4.identity(h.sm4d.get());if(0<b.padding){var p=
l/4,r=a.vec3.set(h.sv3d.get(),0,p,0),p=1+b.padding/p;a.mat4.translate(k,k,r);a.mat4.scale(k,k,a.vec3.set(h.sv3d.get(),p,p,p));a.mat4.translate(k,k,a.vec3.scale(r,r,-1/p))}p=a.mat4.identity(a.mat4f64.create());r=a.vec3f64.fromValues(0,1,0);m=a.mat4.fromQuat(a.mat4f64.create(),a.quat.rotationTo(h.sq4d.get(),r,m));m[12]=g[g.length-1][0];m[13]=g[g.length-1][1];m[14]=g[g.length-1][2];a.mat4.multiply(m,m,k);e=b.tubeRadius*(e?b.tubeFocusMultiplier:1)+b.padding;var v=b.flat,u=[];if(z.isSome(v))u.push([e,
v.thickness/2],[-e,v.thickness/2],[-e,-v.thickness/2],[e,-v.thickness/2]);else for(v=0;12>v;v++){var x=v/12*2*Math.PI;u.push([Math.cos(x)*e,Math.sin(x)*e])}e=F.createPathExtrusionGeometry(u,g,[],[],!1);e=[{part:"tube",geometry:new C(e,"arrow-tube"),transform:p}];var y,w;if(z.isSome(b.flat)){for(var u=b.flat.thickness,B,p=new Float32Array(18),l=[[-q,0,u/2],[q,0,u/2],[0,l,u/2],[-q,0,-u/2],[q,0,-u/2],[0,l,-u/2]],q=0;6>q;q++)p[3*q]=l[q][0],p[3*q+1]=l[q][1],p[3*q+2]=l[q][2];l=(B={},B[J.VertexAttrConstants.POSITION]=
new Uint32Array([0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]),B);B=(y={},y[J.VertexAttrConstants.POSITION]={size:3,data:p},y);y=new O(B,l);y=new C(y,"arrow-tip")}else y=new C(F.createConeGeometry(l,q,24,!1,!1,!0),"arrow-tip"),w=new C(F.createConeGeometry(l,q,24,!1,!0,!1),"arrow-cap");e.push({part:"tip",geometry:y,transform:m});w&&e.push({part:"cap",geometry:w,transform:m});b.bothEnds&&(f=a.mat4.fromQuat(a.mat4f64.create(),a.quat.rotationTo(h.sq4d.get(),r,f)),f[12]=g[0][0],f[13]=g[0][1],f[14]=
g[0][2],a.mat4.multiply(f,f,k),e.push({part:"tip",geometry:y,transform:f}),w&&e.push({part:"cap",geometry:w,transform:f}));return e};return{normal:e(!1),focused:e(!0)}};l.addArrowTips=function(d,c){var b=a.vec3.subtract(a.vec3f64.create(),d[d.length-1],d[d.length-2]);a.vec3.normalize(b,b);a.vec3.scale(b,b,p.ROTATE_HEADING_TIP_LENGTH);a.vec3.add(b,b,d[d.length-1]);return c?(c=a.vec3.subtract(a.vec3f64.create(),d[0],d[1]),a.vec3.normalize(c,c),a.vec3.scale(c,c,p.ROTATE_HEADING_TIP_LENGTH),a.vec3.add(c,
c,d[0]),[c].concat(d,[b])):d.concat([b])};l.isAlwaysDrapedLayer=function(a){switch(a.type){case "building-scene":case "csv":case "feature":case "geo-rss":case "graphics":case "group":case "integrated-mesh":case "kml":case "map-notes":case "point-cloud":case "scene":case "stream":case "unknown":case "unsupported":case null:return!1;case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "map-image":case "open-street-map":case "tile":case "vector-tile":case "web-tile":case "wms":case "wmts":return!0;
default:return z.neverReached(a.type),!1}};var w=r.lineSegment.create(),E=r.ray.create()});
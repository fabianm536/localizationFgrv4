// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/support/coordsUtils ../../../../geometry/support/triangulationUtils ../../../../layers/graphics/dehydratedFeatures ../../../../symbols/callouts/calloutUtils ./graphicUtils ../../support/projectionUtils ../../webgl-engine/lib/Object3D".split(" "),function(M,e,G,A,B,H,v,I,C,w,J){function x(a,b,c,d,f){var p=b.z||0,e=c.featureExpressionInfoContext;switch(c.mode){case "on-the-ground":return c=
a.getElevation(b,"ground")||0,f&&(f.verticalDistanceToGround=0,f.terrainElevation=c),c;case "relative-to-ground":return a=a.getElevation(b,"ground")||0,c=c.calculateOffsetRenderUnits(d),null==e&&(c+=p),f&&(f.verticalDistanceToGround=c,f.terrainElevation=a),c+a;case "relative-to-scene":return a=a.getElevation(b,"scene")||0,c=c.calculateOffsetRenderUnits(d),f&&(f.verticalDistanceToGround=c,f.terrainElevation=a),c+a;case "absolute-height":return c=c.calculateOffsetRenderUnits(d),null==e&&(c+=p),f&&(a=
a.getElevation(b,"ground")||0,f.verticalDistanceToGround=c-a,f.terrainElevation=a),c;default:G.neverReached(c.mode)}return 0}function y(a,b){a=H.pathsToTriangulationInfo(a,b);return{vertexData:a.position,polygons:a.polygons,outlines:a.outlines}}function D(a,b,c,d,f){b*=3;d*=3;for(var e=0;e<f;++e)c[d++]=a[b++],c[d++]=a[b++],c[d++]=a[b++]}function z(a,b,c,d,f,e,k){return w.bufferToBuffer(a,c,b,d,e,f,k)}function q(a,b,c){w.pointToVector(a,b,c)}function E(a,b){return!(a[0]>b[3]||a[0]<b[0]||a[1]>b[4]||
a[1]<b[1])}function F(a,b){return!(b[0]>a[3]||b[3]<a[0]||b[1]>a[4]||b[4]<a[1])}Object.defineProperty(e,"__esModule",{value:!0});var g=A.vec3f64.create(),K=A.mat4f64.create(),m=v.makeDehydratedPoint(0,0,0,null);e.createStageObjectForPoint=function(a,b,c,d,f,e,k,h,u,L,m,r){var p=c?c.length:0,l=a.clippingExtent;q(b,g,a.elevationProvider.spatialReference);if(l&&!E(g,l))return null;q(b,g,a.renderSpatialReference);l=a.localOriginFactory.getOrigin(g);h=new J({castShadow:!1,metadata:{layerUid:u,graphicUid:L,
usesVerticalDistanceToGround:!!m},idHint:h});for(u=0;u<p;u++)h.addGeometry(c[u],d[u],f?f[u]:K,e,l,r);c=a.renderSpatialReference;d=a.elevationProvider;f=a.renderCoordsHelper;a=0;var n;h.metadata.usesVerticalDistanceToGround?(a=x(d,b,k,f,t),C.updateVertexAttributeAuxpos1w(h,t.verticalDistanceToGround),n=t.terrainElevation):(e="absolute-height"!==k.mode,a=x(d,b,k,f,e?t:null),e&&(n=t.terrainElevation));k=h.getObjectTransformation();g[0]=b.x;g[1]=b.y;g[2]=a;w.computeLinearTransformation(b.spatialReference,
g,k,c)?h.setObjectTransformation(k):console.warn("Could not locate symbol object properly, it might be misplaced");return{object:h,terrainElevation:n}};e.extendPointGraphicElevationContext=function(a,b,c){a=a.elevationContext;c=c.spatialReference;q(b,g,c);a.centerPointInElevationSR=v.makeDehydratedPoint(g[0],g[1],b.hasZ?g[2]:0,c)};e.placePointOnGeometry=function(a){switch(a.type){case "point":return a;case "polygon":case "extent":return C.computeCentroid(a);case "polyline":var b=a.paths[0];if(!b||
0===b.length)break;b=B.getPointOnPath(b,B.getPathLength(b)/2);return v.makeDehydratedPoint(b[0],b[1],b[2],a.spatialReference);case "mesh":return a.extent.center}return null};e.computeElevation=x;e.getSingleSizeDriver=function(a,b){void 0===b&&(b=0);return isFinite(a[b])?a[b]:null};e.copyPathData=y;e.copyVertices=D;e.chooseOrigin=function(a,b,c,d){b=Math.floor(b+(c-1)/2);d[0]=a[3*b+0];d[1]=a[3*b+1];d[2]=a[3*b+2]};e.subtractCoordinates=function(a,b,c,d){b*=3;for(var f=0;f<c;++f)a[b++]-=d[0],a[b++]-=
d[1],a[b++]-=d[2]};e.setZ=function(a,b,c,d){b*=3;for(var f=0;f<c;++f)a[b+2]=d,b+=3};e.offsetZ=function(a,b,c,d){b*=3;for(var f=0;f<c;++f)a[b+2]+=d,b+=3};e.scaleZ=function(a,b,c,d){b*=3;for(var f=0;f<c;++f)a[b+2]*=d,b+=3};e.flatArrayToArrayOfArrays=function(a,b,c){var d=[];b*=3;for(var f=0;f<c;++f)d.push([a[b++],a[b++],a[b++]]);return d};e.reproject=z;e.reprojectPoint=q;e.getGeometryVertexData3D=function(a,b,c,d,f,e,k){var h=f.spatialReference;a=y(a,b);b=a.vertexData;var p=b.length/3,g=new Float64Array(b.length),
t=!0;c.equals(h)?D(b,0,g,0,b.length):t=z(b,0,c,g,0,h,p);var r=c=0,w=k.mode,l=0,n=0,q=0;e=k.calculateOffsetRenderUnits(e);k=k.featureExpressionInfoContext;m.spatialReference=f.spatialReference;c*=3;for(var r=3*r,v=0;v<p;++v){m.x=g[c+0];m.y=g[c+1];m.z=g[c+2];switch(w){case "on-the-ground":n=l=f.getElevation(m)||0;q+=l;break;case "relative-to-ground":l=f.getElevation(m)||0;n=l+e;null==k&&(n+=m.z);q+=l;break;case "relative-to-scene":l=f.getElevation(m,"scene")||0;n=l+e;q+=l;break;case "absolute-height":n=
e,null==k&&(n+=m.z)}b[r+0]=g[c+0];b[r+1]=g[c+1];b[r+2]=n;c+=3;r+=3}f=q/p;h.equals(d)||z(b,0,h,b,0,d,p);return{geometryData:a,vertexData:b,eleVertexData:g,terrainElevation:f,projectionSuccess:t}};e.getGeometryVertexDataDraped=function(a,b,c){a=y(a,!1);var d=a.vertexData,f=d.length/3,e=!0;b.equals(c)||(e=w.bufferToBuffer(d,b,0,d,c,0,f));return{geometryData:a,vertexData:d,projectionSuccess:e}};e.computeBoundingBox=function(a,b,c,d){d[0]=Number.MAX_VALUE;d[1]=Number.MAX_VALUE;d[2]=Number.MAX_VALUE;d[3]=
-Number.MAX_VALUE;d[4]=-Number.MAX_VALUE;d[5]=-Number.MAX_VALUE;b*=3;for(var f=0;f<c;++f){var e=a[b++],g=a[b++],h=a[b++];e<d[0]&&(d[0]=e);g<d[1]&&(d[1]=g);h<d[2]&&(d[2]=h);e>d[3]&&(d[3]=e);g>d[4]&&(d[4]=g);h>d[5]&&(d[5]=h)}return d};e.pointInBox2D=E;e.boxesIntersect2D=F;e.boundingBoxClipped=function(a,b){return b?!F(a,b):!1};e.needsElevationUpdates2D=function(a){return"relative-to-ground"===a||"relative-to-scene"===a};e.needsElevationUpdates3D=function(a){return"absolute-height"!==a};e.needsOffsetAdjustment=
function(a,b,c,d){if(!1===b.needsOffsetAdjustment||!1===b.supportsOffsetAdjustment||"on-the-ground"===a.mode)return!1;if(0===a.meterUnitOffset){if(!0===b.needsOffsetAdjustment)return!0;if(I.isCalloutSupport(d)&&d.hasVisibleVerticalOffset())return!1;if("relative-to-ground"===a.mode&&(!c.hasZ||a.featureExpressionInfoContext)||"relative-to-scene"===a.mode)return!0}return!1};var t={verticalDistanceToGround:0,terrainElevation:0}});
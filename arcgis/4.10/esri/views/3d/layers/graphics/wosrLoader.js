// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper dojo/sniff dojo/errors/CancelError ../../../../request ../../../../core/Error ../../../../core/lang ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/Version ../../../../geometry/support/aaBoundingBox ../../support/imageUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(ia,g,ja,h,k,O,D,V,W,X,Y,q,P,l,Z,aa,ba,ca,da){function ea(b,d){if(d){var a=d.request(b,"json");return q.create(function(d,b){a.then(function(a,b){d(b)},function(a){b(a instanceof D?a:z(a))})},function(){d.cancelRequest(a)})}var f=V(b);return q.create(function(a,b){f.then(function(b){a(b.data)},function(a){b(a instanceof D?a:z(a))})},function(){f.cancel()})}function z(b){return new W("","Request for object resource failed: "+b)}function A(b,d){return k(this,void 0,void 0,function(){var a,f,
E,J,m,u,v,r,Q,F,R,K,S,L,G,B,q,w,g,k,l,x,D,z,A,M,N,y,C,T,t,H,U;return h(this,function(e){switch(e.label){case 0:return E=[],J=[],m=[],u=[],v=P.Version.parse(b.version||"1.0","wosr"),fa.validate(v),r="meshsymbol_"+b.model.name,Q=b.textureDefinitions,[4,ga(r,Q,d)];case 1:F=e.sent();for(R in F)u.push(F[R].engineTexObj);K=b.model.geometries;S=b.materialDefinitions;for(G=L=0;G<K.length;G++){var n=B=K[G],c=n.params,I=c.topology;e=!0;c.vertexAttributes||(p.warn("Geometry must specify vertex attributes"),
e=!1);switch(c.topology){case "PerAttributeArray":break;case "Indexed":case null:case void 0:I=c.faces;if(!I)p.warn("Indexed geometries must specify faces"),e=!1;else if(c.vertexAttributes){var h=void 0;for(h in c.vertexAttributes)(c=I[h])&&c.values?(null!=c.valueType&&"UInt32"!==c.valueType&&(p.warn("Unsupported indexed geometry indices type '"+c.valueType+"', only UInt32 is currently supported"),e=!1),null!=c.valuesPerElement&&1!==c.valuesPerElement&&(p.warn("Unsupported indexed geometry values per element '"+
c.valuesPerElement+"', only 1 is currently supported"),e=!1)):(p.warn("Indexed geometry does not specify face indices for '"+h+"' attribute"),e=!1)}break;default:p.warn("Unsupported topology '"+I+"'"),e=!1}n.params.material||(p.warn("Geometry requires material"),e=!1);n=n.params.vertexAttributes;c=void 0;for(c in n)n[c].values||(p.warn("Geometries with externally defined attributes are not yet supported"),e=!1);if(e){e=B.params;a=e.material;f=e.texture;q=B.params.vertexAttributes;w={};for(g in q)k=
q[g],l=k.values,w[g]={data:l,size:k.valuesPerElement};x={};if("PerAttributeArray"===B.params.topology){e=D=w.position.data.length/w.position.size;n=new Uint32Array(e);for(c=0;c<e;c++)n[c]=c;z=n;for(A in w)x[A]=z}else for(N in M=B.params.faces,M)x[N]=new Uint32Array(M[N].values);y=f?F[f]:null;C=m[a]?m[a][f]:null;C||(T=a.substring(a.lastIndexOf("/")+1),t=S[T].params,1===t.transparency&&(t.transparency=0),H={ambient:t.diffuse,diffuse:t.diffuse,specular:[0,0,0],opacity:1-(t.transparency||0),transparent:0<
t.transparency,textureAlphaCutoff:.33,textureId:y?y.engineTexObj.id:void 0,textureInitTransparent:!0,doubleSided:!0,cullFace:"none",flipV:!1,colorMixMode:t.externalColorMixMode||"tint"},O("enable-feature:jkieboom/alpha-channel-usage")&&y&&("transparency"===y.alphaChannelUsage||"maskAndTransparency"===y.alphaChannelUsage)&&(H.transparent=!0),d&&d.materialParamsMixin&&X.mixin(H,d.materialParamsMixin),C=new da(H,r),m[a]||(m[a]={}),m[a][f]=C);J.push(C);U=new aa(new ba(w,x),r);L+=x.position?x.position.length:
0;E.push(U)}}return[2,{stageResources:{textures:u,materials:J,geometries:E},pivotOffset:b.model.pivotOffset,boundingBox:ha(E),numberOfVertices:L,lodThreshold:null}]}})})}function ha(b){var d=l.empty();b.forEach(function(a){a=a.boundingInfo;l.expand(d,a.getBBMin());l.expand(d,a.getBBMax())});return d}function ga(b,d,a){return k(this,void 0,void 0,function(){var f,g,k,m,u,v,r,l;return h(this,function(h){switch(h.label){case 0:f=[];g=function(g){var h=d[g],k=h.images[0].data;if(!k)return p.warn("Externally referenced texture data is not yet supported"),
"continue";var k=h.encoding+";base64,"+k,l="/textureDefinitions/"+g,m={noUnpackFlip:!0,wrap:{s:10497,t:10497}};O("enable-feature:jkieboom/alpha-channel-usage")&&(m.wrap={s:33071,t:33071});g=a&&a.disableTextures?q.resolve(null):Z.requestImage(k);f.push(g.then(function(a){return{refId:l,engineTexObj:new ca(a,b,m),alphaChannelUsage:"rgba"===h.channels?h.alphaChannelUsage||"transparency":"none"}}))};for(k in d)g(k);return[4,q.all(f)];case 1:m=h.sent();u={};v=0;for(r=m;v<r.length;v++)l=r[v],u[l.refId]=
l;return[2,u]}})})}Object.defineProperty(g,"__esModule",{value:!0});var p=Y.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");g.load=function(b,d){return k(this,void 0,void 0,function(){var a;return h(this,function(f){switch(f.label){case 0:return[4,ea(b,d.streamDataSupplier)];case 1:return a=f.sent(),[4,A(a,d)];case 2:return[2,f.sent()]}})})};g.createStageResources=A;var fa=new P.Version(1,2,"wosr")});
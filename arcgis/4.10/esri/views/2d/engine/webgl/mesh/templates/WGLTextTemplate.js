// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../core/libs/gl-matrix-2/gl-matrix ../../color ../../definitions ../../enums ../../fontUtils ../../number ../../TextShapingNew ../../WGLDisplayRecord ../../collisions/BoundingBox ./ComputedGlyph ./WGLMeshTemplate ../../util/BidiText ../../../../layers/graphics/graphicsUtils ../../../../../vectorTiles/GeometryUtils".split(" "),
function(r,z,D,E,F,t,h,A,q,u,G,B,v,C,H,I,J,K,w,L){Object.defineProperty(z,"__esModule",{value:!0});var M=F.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),N=h.mat2df32.create(),x=h.vec2f32.create();r=function(r){function g(b,d,a){var c=r.call(this)||this;c.geometryType=u.WGLGeometryType.TEXT;c.vvFlags=0;c._xOffset=t.pt2px(a.xoffset);c._yOffset=t.pt2px(a.yoffset);c._decorationTop=G.getFontDecorationTop(a.font);c._color=(a.color&&A.premultiplyAlphaRGBA(a.color))|0;c._haloColor=(a.haloColor&&
A.premultiplyAlphaRGBA(a.haloColor))|0;c._haloSize=Math.min(Math.floor(5*t.pt2px(t.toPt(a.haloSize||0))),127);c._size=Math.min(Math.round(t.pt2px(a.font.size)),127);c._scale=c._size/24;c._angle=a.angle||0;c._justify=w.getJustification(a.horizontalAlignment||"center");c._xAlignD=w.getXAnchorDirection(a.horizontalAlignment||"center");c._yAlignD=-w.getYAnchorDirection(a.verticalAlignment||"baseline");c._baseline="baseline"===(a.verticalAlignment||"baseline");c._materialStore=b;c.vvFlags=d;c.symbolId=
a.id;return c}D(g,r);g.fromText=function(b,d,a,c,f){b=new g(b,d,a);a=K.bidiText(a.text);b.bindTextInfo(f,a[0],a[1]);b._computeGlyphs(b._shapedGlyphs,b._shapedBox);return b};g.prototype.bindTextInfo=function(b,d,a){b=this._computeShaping(b,this._justify).getShaping(d,a);isNaN(this._decorationTop)||v.addDecoration(b,this._decorationTop);this._shapedGlyphs=b;this._shapedBox=v.getBox(b)};g.prototype.writeMesh=function(b,d,a,c,f,l,k){l=this._computedGlyphs;switch(a){case "esriGeometryPoint":f=f.geometry;
a=f.x;f=f.y;for(var m=0;m<l.length;m++){var e=l[m];e.anchorX=a;e.anchorY=f}this._writeVertices(b,d,c,k,l,0,0);break;case "esriGeometryPolygon":if(f.centroid){f=f.centroid;a=f.x;f=f.y;for(m=0;m<l.length;m++)e=l[m],e.anchorX=a,e.anchorY=f;this._writeVertices(b,d,c,k,l,0,0);break}case "esriGeometryMultipoint":for(var m=f.geometry.points,h=f=a=0;h<m.length;h++){e=m[h];a+=e[0];f+=e[1];for(var g=0,p=l;g<p.length;g++)e=p[g],e.anchorX=a,e.anchorY=f;this._writeVertices(b,d,c,k,l,0,0)}break;default:b=void 0,
void 0===b&&(b="mapview-processing"),M.error(E(b,"Unable to handle geometryType: "+a))}};g.prototype._computeGlyphs=function(b,d){var a=Array(b.length);d=this._computeGlyphTransform(d);for(var c=0;c<b.length;c++){var f=b[c],l=f.x,k=f.y,m=f.codePoint,f=f.glyphMosaicItem,e=this._materialStore.createGlyphMaterial(f,this.geometryType,this.vvFlags);a[c]=I.default.from(l,k,0,0,-1,0,25,f,m,e,d,this._size,this._haloSize,!1,!0)}this._computedGlyphs=a};g.prototype._createBounds=function(b,d){var a=b.width/
2,c=b.height/2,f=d[4],l=d[5],k;if(this._angle){b=h.vec2f32.fromValues(-a,-c);k=h.vec2f32.fromValues(a,-c);var m=h.vec2f32.fromValues(-a,c),e=h.vec2f32.fromValues(a,c);h.vec2.transformMat2d(b,b,d);h.vec2.transformMat2d(k,k,d);h.vec2.transformMat2d(m,m,d);h.vec2.transformMat2d(e,e,d);d=c=Infinity;var g=0,y=a=0;for(b=[b,k,m,e];y<b.length;y++)k=b[y],c=Math.min(k[0],c),g=Math.max(k[0],g),d=Math.min(k[1],d),a=Math.max(k[1],a);k=g-c;b=a-d}else k=b.width*this._scale,b=b.height*this._scale;return new H.default(f,
l,k+q.COLLISION_BOX_PADDING,b+q.COLLISION_BOX_PADDING)};g.prototype._computeShaping=function(b,d){return new v([b],q.TEXT_MAX_WIDTH,q.TEXT_LINE_HEIGHT,q.TEXT_SPACING,[0,.5*-q.TEXT_LINE_HEIGHT],.5*(1-this._xAlignD),0,d)};g.prototype._computeGlyphTransform=function(b){var d=this._scale,a=this._angle*L.C_DEG_TO_RAD,c=h.mat2d.identity(N);h.mat2d.rotate(c,c,a);h.mat2d.translate(c,c,h.vec2.set(x,this._xOffset,-this._yOffset));h.mat2d.scale(c,c,h.vec2.set(x,d,d));h.mat2d.translate(c,c,h.vec2.set(x,-4,-4-
(this._baseline?25:b.y+(1-this._yAlignD)*b.height*.5)));return c};g.prototype._getOffset=function(b){return b.length/(this.vvFlags?9:5)};g.prototype._writeVertices=function(b,d,a,c,f,l,k){this._writeHalos(b,d,a,c,f,l,k);this._writeText(b,d,a,c,f,l,k)};g.prototype._writeHalos=function(b,d,a,c,f,l,k){var m=d.indexVector,e=d.get("geometry"),e=this._getOffset(e),g=0;if(this._haloSize)for(var h=0;h<f.length;h++,g+=4){var p=f[h],q=B.i1616to32(2*p.anchorX+1,2*p.anchorY),n=f[h].materialId,r=this._materialStore.get(n),
n=new C(a,this.geometryType,n,null==l?Math.floor(10*p.minZoom):l,null==k?Math.floor(10*p.maxZoom):k);n.vertexFrom=e+g;n.indexFrom=m.length;this._writeVertex(n,d,a,q,this._haloColor,p,r,c);this._writeIndices(n,m,e+g);b.push(n)}};g.prototype._writeText=function(b,d,a,c,f,l,k){for(var g=d.indexVector,e=d.get("geometry"),e=this._getOffset(e),h=0,q=0;q<f.length;q++,h+=4){var p=f[q],r=B.i1616to32(2*p.anchorX,2*p.anchorY),n=f[q].materialId,t=this._materialStore.get(n),n=new C(a,this.geometryType,n,null==
l?Math.floor(10*p.minZoom):l,null==k?Math.floor(10*p.maxZoom):k);n.vertexFrom=e+h;n.indexFrom=g.length;this._writeVertex(n,d,a,r,this._color,p,t,c);this._writeIndices(n,g,e+h);b.push(n)}};g.prototype._writeVertex=function(b,d,a,c,f,g,k,h){var e=d.get("geometry");d=d.get("visibility");e.push(c);e.push(a);e.push(f);e.push(g.vertexOffsetUpperLeft);e.push(g.texFontSizeUpperLeft);this._writeVV(e,h,k);d.push(255);e.push(c);e.push(a);e.push(f);e.push(g.vertexOffsetUpperRight);e.push(g.texFontSizeUpperRight);
this._writeVV(e,h,k);d.push(255);e.push(c);e.push(a);e.push(f);e.push(g.vertexOffsetLowerLeft);e.push(g.texFontSizeLowerLeft);this._writeVV(e,h,k);d.push(255);e.push(c);e.push(a);e.push(f);e.push(g.vertexOffsetLowerRight);e.push(g.texFontSizeLowerRight);this._writeVV(e,h,k);d.push(255);b.vertexCount+=4};g.prototype._writeVV=function(b,d,a){a.materialKeyInfo.hasVV()&&(b.push(d[u.VVType.SIZE]),b.push(d[u.VVType.COLOR]),b.push(d[u.VVType.OPACITY]),b.push(d[u.VVType.ROTATION]))};g.prototype._writeIndices=
function(b,d,a){d.push(a+0);d.push(a+1);d.push(a+2);d.push(a+1);d.push(a+3);d.push(a+2);b.indexCount+=6};return g}(J.default);z.default=r});
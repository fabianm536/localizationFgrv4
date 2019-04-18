// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/gl-matrix ../../support/debugFlags ./Camera ./ComponentUtils ./DefaultVertexBufferLayouts ./glUtil3D ./GridLocalOriginFactory ./HighlightUtils ./Renderer ./SliceHelper ../lighting/Lightsources ../materials/internal/TexOnlyGLMaterial ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util".split(" "),function(p,G,m,q,u,r,v,w,x,y,z,A,B,C,D,E,F){p=function(){function b(a,c,e,d,b,g){var f=this;this._renderTargets={};this._clearColor=
m.vec4f64.fromValues(0,0,0,0);this._uniqueIdx=0;this._localOrigins=new x;this._rctx=a;this._canvas=c;this._programRep=e;this._modelDirtySet=g;this._modelDirtySet.onMaterialChanged=function(a){return f.materialChanged(a)};this._renderer=new z(e,d,b,this._rctx,!0);this._sliceHelper=new A;this._renderer.onHasHighlightsChanged=function(a){if(f.onHasHighlightsChanged)f.onHasHighlightsChanged(a)};this._renderer.setLighting({lights:[new B.AmbientLight(m.vec3f64.fromValues(1,1,1))],groundLightingFactor:1,
globalFactor:0})}b.prototype.dispose=function(){for(var a in this._renderTargets)this._renderTargets[a].dispose();this._renderTargets=null;this._renderer.dispose();this._renderer=null};b.prototype.createRenderTarget=function(a){return this.createRenderTargetInternal(a,!0)};b.prototype.createHighlightRenderTarget=function(a){return this.createRenderTargetInternal(a,!1)};b.prototype.disposeRenderTarget=function(a){var c=this._renderTargets[a];c&&c.dispose();delete this._renderTargets[a]};b.prototype.getRenderTargetTexture=
function(a){return(a=this._renderTargets[a])?a.colorTexture:null};b.prototype.addRenderGeometries=function(a){var c=this;a.forEach(function(a){null==a.origin&&(a.origin=c._localOrigins.getOrigin(a.center));a.idx=c._uniqueIdx++});this._renderer.modify(a,[]);if(this.onContentChanged)this.onContentChanged()};b.prototype.removeRenderGeometries=function(a){this._renderer.modify([],a);if(this.onContentChanged)this.onContentChanged()};b.prototype.updateRenderGeometries=function(a,c){a=a.map(function(a){return{renderGeometry:a,
updateType:c}});this._renderer.modify([],[],a);if(this.onContentChanged)this.onContentChanged()};b.prototype.updateRenderOrder=function(a){if(0<a.size&&(this._renderer.modifyRenderOrder(a),this.onContentChanged))this.onContentChanged()};b.prototype.setBackgroundColor=function(a){this._clearColor=a;if(this.onContentChanged)this.onContentChanged()};b.prototype.addRenderGeometryHighlight=function(a,c){var e=a.instanceParameters,d=y.generateHighlightId();e.componentHighlights=r.addHighlight(e.componentHighlights,
null,c,d);this.updateRenderGeometries([a],32);return d};b.prototype.removeRenderGeometryHighlight=function(a,c){var e=a.instanceParameters;e.componentHighlights=r.removeHighlight(e.componentHighlights,c);this.updateRenderGeometries([a],32)};b.prototype.isEmpty=function(){return this._renderer.isEmpty()&&!q.OVERLAY_DRAW_TEST_TEXTURE};b.prototype.processDirtyMaterials=function(){var a=this._modelDirtySet.getDirtyMaterials();a&&this._renderer.modify([],[],[],a);this._modelDirtySet.clearDirtyMaterials()};
Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},enumerable:!0,configurable:!0});b.prototype.draw=function(a,c){return this.drawPass(0,a,c)};b.prototype.drawHighlights=function(a,c){return this.drawPass(4,a,c)};b.prototype.drawPass=function(a,c,e){if(this.isEmpty()||4===a&&!this.hasHighlights)return!1;this.processDirtyMaterials();if(!e.views.some(function(a){return a.extent[0]!==a.extent[2]&&a.extent[1]!==a.extent[3]}))return!1;c=this._renderTargets[c];
if(!c)return!1;var d=this._rctx,b=d.gl,g=e.width,f=e.height;if(c.width!==g||c.height!==f)c.resize(g,f),c.colorTexture.setSamplingMode(9729);var h=l.camera;l.fbo=c;l.pixelRatio=e.pixelRatio||1;h.near=1;h.far=1E4;d.bindFramebuffer(c);d.setDepthTestEnabled(!1);d.setBlendFunctionSeparate(770,771,1,771);d.setClearColor.apply(d,this._clearColor);d.clear(b.COLOR_BUFFER_BIT);for(b=0;b<e.views.length;b++){var k=e.views[b];h.viewport=k.viewport;m.mat4.ortho(h.projectionMatrix,0,k.extent[2]-k.extent[0],0,k.extent[3]-
k.extent[1],h.near,h.far);m.mat4.identity(h.viewMatrix);m.mat4.translate(h.viewMatrix,h.viewMatrix,[-k.extent[0],-k.extent[1],0]);h.setGLViewport(this._rctx);q.OVERLAY_DRAW_TEST_TEXTURE&&this._drawTestTexture(g,f,t[e.index%t.length]);this._renderer.renderGeometryPass(a,l,null,null,this._sliceHelper)}d.setDepthTestEnabled(!0);d.setBlendFunctionSeparate(770,771,1,771);d.bindFramebuffer(null);d.setViewport(0,0,this._canvas.width,this._canvas.height);c.colorTexture.descriptor.hasMipmap&&c.colorTexture.generateMipmap();
return!0};b.prototype._drawTestTexture=function(a,c,b){var d=this._rctx,e=d.gl;if(!this._testPatternMat){for(var g=new Uint8Array(a*c*4),f=0,h=0;h<c;h++)for(var k=0;k<a;k++){var l=Math.floor(k/10),n=Math.floor(h/10);2>l||2>n||10*l>a-20||10*n>c-20?(g[f++]=255,g[f++]=255,g[f++]=255,g[f++]=255):(g[f++]=255,g[f++]=255,g[f++]=255,l&1&&n&1?g[f++]=k&1^h&1?0:255:g[f++]=l&1^n&1?0:128)}a=new E(d,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:c},g);this._testPatternMat=new C(this._programRep,
a,[1,1,1,1],!0,e.ALWAYS);this._testPatternBindParams={proj:m.mat4f64.create(),view:m.mat4f64.create(),nearFar:[-1,1],origin:[0,0,0],viewInvTransp:null,viewport:null,lightingData:null,fovY:0};this._quadVAO=w.createQuadVAO(d,v.Pos3Tex)}this._testPatternMat.setColor([b[0],b[1],b[2],1]);this._testPatternMat.bind(d,this._testPatternBindParams);this._testPatternMat.bindView(d,this._testPatternBindParams);d.bindVAO(this._quadVAO);d.drawArrays(5,0,F.vertexCount(this._quadVAO,"geometry"));this._testPatternMat.release(d)};
b.prototype.materialChanged=function(a){if(this.onContentChanged)this.onContentChanged()};b.prototype.createRenderTargetInternal=function(a,c){for(var b=a,d=0;this._renderTargets[b];)b=a+"_"+ ++d;this._renderTargets[b]=D.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:c,maxAnisotropy:8,width:0,height:0},{colorTarget:0,depthStencilTarget:0});return b};return b}();var t=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],l={fbo:null,camera:new u,pixelRatio:1};
return p});
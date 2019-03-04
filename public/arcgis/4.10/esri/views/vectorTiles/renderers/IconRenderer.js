// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/gl-matrix ../GeometryUtils ./rendererUtils ../../webgl/VertexArrayObject".split(" "),function(E,F,n,A,C,v){return function(){function d(f){this._viewProjMat=n.mat4f32.create();this._offsetVector=n.vec3f32.create();this._spritesTextureSize=n.vec2f32.create();this._color=n.vec4f32.create();this._initialized=!1;this._programOptions={id:!1,dd:!1,sdf:!1};this._programCache=f}d.prototype.dispose=function(){};d.prototype.render=function(f,b,a,t,d,w,
p,e,x,y,g,h){var z=this;this._initialized||this._initialize(f);var v=e.hasDataDrivenIconSize?1:e.getLayoutValue("icon-size",a),k=e.hasDataDrivenIconColor?[1,1,1,1]:e.getPaintValue("icon-color",a),u=e.hasDataDrivenIconOpacity?1:e.getPaintValue("icon-opacity",a);h*=k[3]*u;this._color[0]=h*k[0];this._color[1]=h*k[1];this._color[2]=h*k[2];this._color[3]=h;k=e.getLayoutValue("icon-rotation-alignment",a);2===k&&(k=1===e.getLayoutValue("symbol-placement",a)?0:1);var D=0===k;h=b.isSDF;u=e.hasDataDrivenIcon;
t=3===t;var k=A.degToByte(d),q=p.tileTransform.transform,l=e.getPaintValue("icon-translate",a);if(0!==l[0]||0!==l[1]){n.mat4.copy(this._viewProjMat,p.tileTransform.transform);var q=l[0],l=l[1],r=0,m=0,m=(1<<p.key.level)/Math.pow(2,a)*(p.coordRange/512);if(1===e.getPaintValue("icon-translate-anchor",a)){r=-A.C_DEG_TO_RAD*d;d=Math.sin(r);var B=Math.cos(r),r=m*(q*B-l*d),m=m*(q*d+l*B)}else r=m*q,m*=l;this._offsetVector[0]=r;this._offsetVector[1]=m;this._offsetVector[2]=0;n.mat4.translate(this._viewProjMat,
this._viewProjMat,this._offsetVector);q=this._viewProjMat}y=D?y:g;if(g=this._getIconVAO(f,p,u)){f.bindVAO(g);g=this._programOptions;g.id=t;g.dd=u;g.sdf=h;var c=this._programCache.getProgram(4,(t?1:0)<<2|(u?1:0)<<1|(h?1:0),g);f.bindProgram(c);h&&(g=e.getPaintValue("icon-halo-color",a),h=e.getPaintValue("icon-halo-width",a),c.setUniform4f("u_outlineColor",g[0],g[1],g[2],g[3]),c.setUniform1f("u_outlineSize",h));c.setUniformMatrix4fv("u_transformMatrix",q);c.setUniformMatrix4fv("u_extrudeMatrix",y);c.setUniform2fv("u_normalized_origin",
p.tileTransform.displayCoord);c.setUniform1f("u_depth",e.z);c.setUniform1f("u_mapRotation",k);c.setUniform1f("u_keepUpright",0);c.setUniform1f("u_level",10*a);c.setUniform1f("u_fadeSpeed",10*w.fadeSpeed);c.setUniform1f("u_minfadeLevel",10*w.minfadeLevel);c.setUniform1f("u_maxfadeLevel",10*w.maxfadeLevel);c.setUniform1f("u_fadeChange",10*(a+w.fadeChange));c.setUniform1i("u_texture",5);c.setUniform1f("u_size",v);c.setUniform4fv("u_color",this._color);t&&(a=C.int32To4Bytes(b.layerID),c.setUniform4f("u_id",
a[0],a[1],a[2],a[3]));b.markerPerPageElementsMap.forEach(function(a,b){z._spritesTextureSize[0]=x.getWidth(b)/4;z._spritesTextureSize[1]=x.getHeight(b)/4;c.setUniform2fv("u_mosaicSize",z._spritesTextureSize);x.bind(f,9729,b,5);f.drawElements(4,a[1],5125,12*a[0])});f.bindVAO()}};d.prototype._initialize=function(f){if(this._initialized)return!0;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,
stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,
offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]};return this._initialized=!0};d.prototype._getIconVAO=function(f,b,a){if(a){if(b.iconDDVertexArrayObject)return b.iconDDVertexArrayObject;a=b.iconDDVertexBuffer;var d=b.iconIndexBuffer;if(!a||!d)return null;b.iconDDVertexArrayObject=new v(f,this._programCache.getProgramAttributes(4),this._vertexAttributesDD,
{geometry:a},d);return b.iconDDVertexArrayObject}if(b.iconVertexArrayObject)return b.iconVertexArrayObject;a=b.iconVertexBuffer;d=b.iconIndexBuffer;if(!a||!d)return null;b.iconVertexArrayObject=new v(f,this._programCache.getProgramAttributes(4),this._vertexAttributes,{geometry:a},d);return b.iconVertexArrayObject};return d}()});
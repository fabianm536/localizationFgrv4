// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../core/Error ../../../geometry/SpatialReference ../../../geometry/support/aaBoundingRect ../../../geometry/support/scaleUtils ../../../layers/support/TileInfo ../support/mathUtils ../support/projectionUtils".split(" "),function(q,y,w,h,l,r,x,p,g,t){var u=t.webMercator.x2lon,v=t.webMercator.y2lat;q=function(){function c(a){var b=c._checkUnsupported(a);if(b)throw b;this.spatialReference=a.spatialReference;this._isWebMercator=this.spatialReference.isWebMercator;
this._isWGS84=this.spatialReference.isWGS84;this.origin=[a.origin.x,a.origin.y];this.pixelSize=[a.size[0],a.size[1]];this.dpi=a.dpi;var e=a.lods.reduce(function(a,b,d){b.level<a.min&&(a.min=b.level,a.minIndex=d);a.max=Math.max(a.max,b.level);return a},{min:Infinity,minIndex:0,max:-Infinity}),d=a.lods[e.minIndex],m=Math.pow(2,d.level),b=d.resolution*m,d=d.scale*m;this.levels=Array(e.max+1);for(e=0;e<this.levels.length;e++)this.levels[e]={resolution:b,scale:d,tileSize:[b*a.size[0],b*a.size[1]]},b/=
2,d/=2}c.prototype.clone=function(){return new c(this.toTileInfo())};c.prototype.toTileInfo=function(){return new p({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:this.pixelSize,spatialReference:this.spatialReference,lods:this.levels.map(function(a,b){return{level:b,scale:a.scale,resolution:a.resolution}})})};c.prototype.getExtent=function(a,b,e,d,c){void 0===d&&(d=r.create());var f=this.levels[a];a=f.tileSize[0];f=f.tileSize[1];d[0]=this.origin[0]+
e*a;d[2]=d[0]+a;d[3]=this.origin[1]-b*f;d[1]=d[3]-f;c&&(this._isWebMercator?(c[0]=u(d[0]),c[1]=v(d[1]),c[2]=u(d[2]),c[3]=v(d[3])):this._isWGS84&&(c[0]=g.deg2rad(d[0]),c[1]=g.deg2rad(d[1]),c[2]=g.deg2rad(d[2]),c[3]=g.deg2rad(d[3])));return d};c.prototype.getExtentGeometry=function(a,b,c,d){void 0===d&&(d=new w.Extent);this.getExtent(a,b,c,k);d.spatialReference=this.spatialReference;d.xmin=k[0];d.ymin=k[1];d.xmax=k[2];d.ymax=k[3];d.zmin=void 0;d.zmax=void 0;return d};c.prototype.ensureMaxLod=function(a){for(;this.levels.length<=
a;){var b=this.levels[this.levels.length-1],c=b.resolution/2;this.levels.push({resolution:c,scale:b.scale/2,tileSize:[c*this.pixelSize[0],c*this.pixelSize[1]]})}};c.prototype.capMaxLod=function(a){this.levels.length>a+1&&(this.levels.length=a+1)};c.prototype.getMaxLod=function(){return this.levels.length-1};c.prototype.scaleAtLevel=function(a){return this.levels[0].scale/Math.pow(2,a)};c.prototype.levelAtScale=function(a){var b=this.levels[0].scale;return a>=b?0:Math.log(b/a)*Math.LOG2E};c.prototype.resolutionAtLevel=
function(a){return this.levels[0].resolution/Math.pow(2,a)};c.prototype.compatibleWith=function(a){if(!(a instanceof c)){if(c._checkUnsupported(a))return!1;a=new c(a)}if(!a.spatialReference.equals(this.spatialReference)||a.pixelSize[0]!==this.pixelSize[0]||a.pixelSize[1]!==this.pixelSize[1])return!1;var b=Math.min(this.levels.length,a.levels.length)-1,e=this.levels[b].resolution,d=.5*e;if(!g.floatEqualAbsolute(a.origin[0],this.origin[0],d)||!g.floatEqualAbsolute(a.origin[1],this.origin[1],d))return!1;
d=.5*e/Math.pow(2,b)/Math.max(this.pixelSize[0],this.pixelSize[1])*12;return g.floatEqualAbsolute(e,a.levels[b].resolution,d)};c.prototype.rootTilesInExtent=function(a,b,e){var d=this.levels[0].tileSize;if(0===d[0]||0===d[1])return[];c.computeRowColExtent(a,d,this.origin,k);a=k[1];var m=k[3],f=k[0],g=k[2],h=g-f,n=m-a;h*n>e&&(e=Math.floor(Math.sqrt(e)),n>e&&(a=a+Math.floor(.5*n)-Math.floor(.5*e),m=a+e),h>e&&(f=f+Math.floor(.5*h)-Math.floor(.5*e),g=f+e));e=Array((g-f)*(m-a));h=0;for(n=a;n<m;n++)for(var l=
f;l<g;l++)e[h++]=[0,n,l];b&&(b[0]=this.origin[0]+f*d[0],b[1]=this.origin[1]-m*d[1],b[2]=this.origin[0]+g*d[0],b[3]=this.origin[1]-a*d[1]);return e};c.computeRowColExtent=function(a,b,c,d){var e=.001*(a[2]-a[0]+(a[3]-a[1]));d[0]=Math.floor((a[0]+e-c[0])/b[0]);d[2]=Math.ceil((a[2]-e-c[0])/b[0]);d[1]=Math.floor((c[1]-a[3]+e)/b[1]);d[3]=Math.ceil((c[1]-a[1]-e)/b[1])};c.isPowerOfTwo=function(a){a=a.lods;var b=a[0].resolution*Math.pow(2,a[0].level);return!a.some(function(a){return!g.floatEqualRelative(a.resolution,
b/Math.pow(2,a.level))})};c.hasGapInLevels=function(a){a=a.lods.map(function(a){return a.level});a.sort(function(a,b){return a-b});for(var b=1;b<a.length;b++)if(a[b]!==a[0]+b)return!0;return!1};c.tileSizeSupported=function(a){var b=a.size[1];return b===a.size[0]&&0===(b&b-1)&&128<=b&&512>=b};c._checkUnsupported=function(a){return a?1>a.lods.length?new h("tilingscheme:generic","Tiling scheme must have at least one level"):c.isPowerOfTwo(a)?null:new h("tilingscheme:power-of-two","Tiling scheme must be power of two"):
new h("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")};c.checkUnsupported=function(a){var b=c._checkUnsupported(a);return b?b:c.hasGapInLevels(a)?new h("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):c.tileSizeSupported(a)?null:new h("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]")};c.fromExtent=function(a,b){var e=a[2]-a[0],d=a[3]-a[1],g=x.getMetersPerUnitForSR(b),f=1.2*Math.max(e,d);a=
new c(new p({size:[256,256],origin:{x:a[0]-.5*(f-e),y:a[3]+.5*(f-d)},lods:[{level:0,resolution:f/256,scale:1/(256/96*.0254/(f*g))}],spatialReference:b}));a.ensureMaxLod(20);return a};c.makeWebMercatorAuxiliarySphere=function(a){void 0===a&&(a=19);var b=new c(c.WebMercatorAuxiliarySphereTileInfo);b.ensureMaxLod(a);return b};c.makeWGS84WithTileSize=function(a,b){void 0===b&&(b=16);var e=256/a;a=new c(new p({size:[a,a],origin:{x:-180,y:90,spatialReference:l.WGS84},spatialReference:l.WGS84,lods:[{level:0,
resolution:.703125*e,scale:2.95497598570834E8*e}]}));a.ensureMaxLod(b);return a};c.WebMercatorAuxiliarySphereTileInfo=new p({size:[256,256],origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:l.WebMercator},spatialReference:l.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:5.91657527591555E8}]});c.WebMercatorAuxiliarySphere=c.makeWebMercatorAuxiliarySphere(19);return c}();var k=r.create();return q});
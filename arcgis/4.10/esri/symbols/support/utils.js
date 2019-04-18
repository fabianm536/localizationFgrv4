// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../Color ../../symbols ../../core/compilerUtils ../../core/has ../../core/Logger ../../core/screenUtils ./gfxUtils ./Symbol3DMaterial".split(" "),function(x,d,g,e,l,m,n,p,q,r){function f(a,b){if(null==b)return a;a=a.toRgba();a[3]*=b;return new g(a)}function t(a,b,c){(a=a.symbolLayers)&&a.forEach(function(a){if(a){var h=a.material;b=b||h&&h.color||null!=c&&u;var d=f(b,c);h?a.material.color=d:a.material=new r.default({color:d});null!=c&&"outline"in a&&a.outline&&a.outline.color&&
(a.outline.color=f(a.outline.color,c))}})}function v(a,b,c){(a=a.symbolLayers)&&a.forEach(function(a){if(a)switch(a.type){case "icon":case "line":case "path":case "extrude":case "text":a.size=b;break;case "object":switch(c){case "width":a.width=b;break;case "depth":a.depth=b;break;case "height":a.height=b;break;case "width-and-depth":a.width=b;a.depth=b;break;default:a.width=b,a.depth=b,a.height=b}break;default:w.warn("symbolUtils: applySizeToSymbol","symbolLayer not supported")}})}Object.defineProperty(d,
"__esModule",{value:!0});var w=n.getLogger("esri.symbols.support.utils"),k=/\/resource\/(.*?)\.svg$/,u=new g("white");d.getSymbolOutlineSize=function(a){if(!a)return 0;if(e.isSymbol3D(a)){var b=a.symbolLayers&&a.symbolLayers.length;b?(a=a.symbolLayers.getItemAt(b-1),a="outline"in a&&a.outline&&a.outline.size):a=void 0;return a||0}return(a=q.getStroke(a))&&p.px2pt(a.width)||0};d.isVolumetricSymbol=function(a){if(!a||!a.symbolLayers)return!1;switch(a.type){case "point-3d":return a.symbolLayers.some(function(a){return"object"===
a.type});case "line-3d":return a.symbolLayers.some(function(a){return"path"===a.type});case "polygon-3d":return a.symbolLayers.some(function(a){return"object"===a.type||"extrude"===a.type});default:return!1}};d.getIconHref=function(a,b){b=b.resource.href;return!m("esri-canvas-svg-support")&&a.styleOrigin&&k.test(b)?b.replace(k,"/resource/png/$1.png"):b};d.applyOpacityToColor=f;d.applyColorToSymbol=function(a,b,c){if(a&&(b||null!=c))if(b&&(b=new g(b)),e.isSymbol3D(a))t(a,b,c);else if(e.isSymbol2D(a)){if(b=
b||a.color)a.color=f(b,c);null!=c&&"outline"in a&&a.outline&&a.outline.color&&(a.outline.color=f(a.outline.color,c))}};d.applySizeToSymbol=function(a,b,c){if(a&&null!=b)if(e.isSymbol3D(a))v(a,b,c);else if(e.isSymbol2D(a))switch(a.type){case "simple-marker":a.size=b;break;case "picture-marker":c=a.width/a.height;1<c?(a.width=b,a.height=b*c):(a.width=b*c,a.height=b);break;case "simple-line":a.width=b;break;case "text":a.font.size=b;break;case "simple-fill":case "picture-fill":break;default:l.neverReached(a)}};
d.applyRotationToSymbol=function(a,b,c){a&&null!=b&&(e.isSymbol3D(a)?(a=a.symbolLayers)&&a.forEach(function(a){if(a&&"object"===a.type)switch(c){case "tilt":a.tilt=b;break;case "roll":a.roll=b;break;default:a.heading=b}}):!e.isSymbol2D(a)||"simple-marker"!==a.type&&"picture-marker"!==a.type&&"text"!==a.type||(a.angle=b))}});
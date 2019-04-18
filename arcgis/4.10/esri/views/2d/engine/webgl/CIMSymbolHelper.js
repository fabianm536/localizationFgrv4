// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ./CIMSymbolDrawHelper ./SDFHelper ../../../vectorTiles/GeometryUtils".split(" "),function(p,r,w,t,x,u){Object.defineProperty(r,"__esModule",{value:!0});var v=w.getLogger("esri/views/2d/engine/webgl/CIMSymbolHelper");p=function(){function h(){}h.getEnvelope=function(d){if("CIMPointSymbol"!==d.type)return null;var a=new t.EnvDrawHelper;a.drawSymbol(d,{type:"point",x:0,y:0});return a.envelope()};h.rasterize=function(d,a){var b=this.getEnvelope(a);if(!b||
0>=b.width||0>=b.height)return[null,0,0,0,0];var c=96/72,f=(b.x+.5*b.width)*c,e=-(b.y+.5*b.height)*c;d.width=b.width*c+2;d.height=b.height*c+2;b=d.getContext("2d");c=t.Transformation.createScale(c,-c);c.translate(.5*d.width-f,.5*d.height-e);(new t.CanvasDrawHelper(b,c)).drawSymbol(a,{type:"point",x:0,y:0});a=b.getImageData(0,0,d.width,d.height);a=new Uint8Array(a.data);for(b=0;b<a.length;b+=4)c=a[b+3]/255,a[b]*=c,a[b+1]*=c,a[b+2]*=c;return[a,d.width,d.height,f/d.width,e/d.height]};h.fromSimpleMarker=
function(d){var a,b,c=d.style;if("circle"===c||"esriSMSCircle"===c){a=Math.acos(.995);b=Math.ceil(u.C_PI/a/4);0===b&&(b=1);a=u.C_PI_BY_2/b;b*=4;c=[];c.push([50,0]);for(var f=1;f<b;f++)c.push([50*Math.cos(f*a),-50*Math.sin(f*a)]);c.push([50,0]);a={rings:[c]};b={xmin:-50,ymin:-50,xmax:50,ymax:50}}else if("cross"===c||"esriSMSCross"===c)a=0,a={rings:[[[a,50],[a,a],[50,a],[50,-a],[a,-a],[a,-50],[-a,-50],[-a,-a],[-50,-a],[-50,a],[-a,a],[-a,50],[a,50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("diamond"===
c||"esriSMSDiamond"===c)a={rings:[[[-50,0],[0,50],[50,0],[0,-50],[-50,0]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("square"===c||"esriSMSSquare"===c)a={rings:[[[-50,-50],[-50,50],[50,50],[50,-50],[-50,-50]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("x"===c||"esriSMSX"===c)a=0,a={rings:[[[0,a],[50-a,50],[50,50-a],[a,0],[50,a-50],[50-a,-50],[0,-a],[a-50,-50],[-50,a-50],[-a,0],[-50,50-a],[a-50,50],[0,a]]]},b={xmin:-50,ymin:-50,xmax:50,ymax:50};else if("triangle"===c||"esriSMSTriangle"===
c)b=2/3*100,c=b-100,a={rings:[[[-57.735026918962575,c],[0,b],[57.735026918962575,c],[-57.735026918962575,c]]]},b={xmin:-57.735026918962575,ymin:c,xmax:57.735026918962575,ymax:b};var e;a&&b&&(e=[{type:"CIMSolidFill",enable:!0,color:d.color}],d.outline&&e.push({type:"CIMSolidStroke",enable:!0,width:d.outline.width,color:d.outline.color}),e={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:d.angle,size:d.size,offsetX:d.xoffset,offsetY:d.yoffset,frame:b,markerGraphics:[{type:"CIMMarkerGraphic",
geometry:a,symbol:{type:"CIMPolygonSymbol",symbolLayers:e}}]}]});return e};return h}();r.CIMSymbolHelper=p;p=function(){function h(){}h.rasterizeSimpleFill=function(d,a){"solid"!==a&&"none"!==a&&"esriSFSSolid"!==a&&"esriSFSNull"!==a||console.error("Unexpected: style does not require rasterization");d.width=8;d.height=8;var b=d.getContext("2d");b.strokeStyle="#FFFFFF";b.beginPath();if("vertical"===a||"cross"===a||"esriSFSCross"===a||"esriSFSVertical"===a)b.moveTo(0,0),b.lineTo(0,8);if("horizontal"===
a||"cross"===a||"esriSFSCross"===a||"esriSFSHorizontal"===a)b.moveTo(0,0),b.lineTo(8,0);if("forward-diagonal"===a||"diagonal-cross"===a||"esriSFSDiagonalCross"===a||"esriSFSForwardDiagonal"===a)b.moveTo(0,0),b.lineTo(8,8);if("backward-diagonal"===a||"diagonal-cross"===a||"esriSFSBackwardDiagonal"===a||"esriSFSDiagonalCross"===a)b.moveTo(8,0),b.lineTo(0,8);b.stroke();a=b.getImageData(0,0,d.width,d.height);a=new Uint8Array(a.data);for(var c=0;c<a.length;c+=4)b=a[c+3]/255,a[c]*=b,a[c+1]*=b,a[c+2]*=b;
return[a,d.width,d.height]};h.rasterizeSimpleLine=function(d,a,b){switch(b){case "butt":b="Butt";break;case "square":b="Square";break;default:b="Round"}var c="Butt"===b;switch(a){case "dash":case "esriSLSDash":a=c?[4,3]:[3,4];break;case "dash-dot":case "esriSLSDashDot":a=c?[4,3,1,3]:[3,4,0,4];break;case "dot":case "esriSLSDot":a=c?[1,3]:[0,4];break;case "long-dash":case "esriSLSLongDash":a=c?[8,3]:[7,4];break;case "long-dash-dot":case "esriSLSLongDashDot":a=c?[8,3,1,3]:[7,4,0,4];break;case "long-dash-dot-dot":case "esriSLSDashDotDot":a=
c?[8,3,1,3,1,3]:[7,4,0,4,0,4];break;case "short-dash":case "esriSLSShortDash":a=c?[4,1]:[3,2];break;case "short-dash-dot":case "esriSLSShortDashDot":a=c?[4,1,1,1]:[3,2,0,2];break;case "short-dash-dot-dot":case "esriSLSShortDashDotDot":a=c?[4,1,1,1,1,1]:[3,2,0,2,0,2];break;case "short-dot":case "esriSLSShortDot":a=c?[1,1]:[0,2];break;case "solid":case "esriSLSSolid":case "none":v.error("Unexpected: style does not require rasterization");a=[0,0];break;default:v.error("Tried to rasterize SLS, but found an unexpected style: "+
a+"!"),a=[0,0]}return this.rasterizeDash(d,a,b)};h.rasterizeDash=function(d,a,b){d="Butt"===b;var c="Square"===b;b=!d&&!c;for(var f=0,e=0;e<a.length;e++)var g=a[e],f=f+g;for(var f=15*f,m=31*f,e=new Float32Array(m),l=b?225:15,g=0;g<m;++g)e[g]=l;for(var l=m=0,h=!0,p=0;p<a.length;p++){for(var g=a[p],m=l,l=l+15*g,k=m;k<l;){for(var q=0;31>q;){var g=q*f+k,n=b?(q-15)*(q-15):Math.abs(q-15);e[g]=h?d?Math.max(Math.max(m+7.5-k,n),Math.max(k-l+7.5,n)):n:b?Math.min((k-m)*(k-m)+n,(k-l)*(k-l)+n):c?Math.min(Math.max(k-
m,n),Math.max(l-k,n)):Math.min(Math.max(k-m+7.5,n),Math.max(l+7.5-k,n));q++}k++}h=!h}a=e.length;d=new Uint8Array(4*a);for(g=0;g<a;++g)x.packFloat((b?Math.sqrt(e[g]):e[g])/15,d,4*g);return[d,f,31]};return h}();r.SymbolHelper=p});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../request ../../core/Error ../../core/promiseUtils ./arcgisLayerUrl ./arcgisLayerUrl ./lazyLayerLoader".split(" "),function(l,f,d,g,m,e,n,p,q){function r(a,b){return a.sublayerIds.map(function(c){return new a.Constructor(d({},b,{layerId:c,sublayerTitleMode:"service-name"}))})}function t(a){var b=p.parse(a);if(!b)return e.reject(new m("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a}));var c=b.serverType,
k=b.sublayer,u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(c){case "MapServer":c=null!=k?"FeatureLayer":v(a).then(function(a){return a?"TileLayer":"MapImageLayer"});break;case "ImageServer":c=h(a).then(function(a){var b=a.tileInfo&&a.tileInfo.format;return a.tileInfo?b&&"LERC"===b.toUpperCase()&&a.cacheType&&"elevation"===a.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case "SceneServer":c=h(b.url.path).then(function(a){var b=
{Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return a&&Array.isArray(a.layers)&&0<a.layers.length&&(a=a.layers[0].layerType,null!=b[a])?b[a]:"SceneLayer"});break;default:c=u[c]}var f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:b,Constructor:null,sublayerIds:null},g;return e.when(c).then(function(b){g=b;if(f[b]&&null==k)return w(a).then(function(a){1!==a.length&&(d.sublayerIds=a)})}).then(function(){return(0,q.layerLookupMap[g])()}).then(function(a){d.Constructor=
a;return d})}function w(a){return h(a).then(function(a){return a&&Array.isArray(a.layers)?a.layers.map(function(a){return a.id}).reverse():[]})}function v(a){return h(a).then(function(a){return a.tileInfo})}function x(a,b){a=a.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===a||"esri.layers.StreamLayer"===a?d({outFields:["*"]},b):b}function h(a){return g(a,{responseType:"json",query:{f:"json"}}).then(function(a){return a.data})}Object.defineProperty(f,"__esModule",{value:!0});
f.fromUrl=function(a){return t(a.url).then(function(b){var c=x(b,d({},a.properties,{url:a.url}));return b.sublayerIds?e.create(function(a){return l(["../GroupLayer"],a)}).then(function(a){var d=new a({title:b.parsedUrl.title});r(b,c).forEach(function(a){return d.add(a)});return e.resolve(d)}):e.resolve(new b.Constructor(c))})};f.fetchServerVersion=function(a){if(!n.test(a))return e.reject();a=a.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return g(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data&&
a.data.currentVersion?a.data.currentVersion:e.reject()})}});
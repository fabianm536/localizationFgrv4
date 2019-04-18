// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Graphic ../../../request ../../../core/Collection ../../../core/Handles ../../../core/promiseUtils ../../../core/scheduling ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ../../../layers/support/kmlUtils ../engine/Bitmap ../engine/BitmapContainer ../engine/Container ./LayerView2D ./support/GraphicsView2D ../../layers/RefreshableLayerView".split(" "),
function(E,F,q,r,t,u,l,v,m,w,x,n,y,p,f,z,A,B,C,g,D){var h=l.ofType(t);return function(k){function d(){var a=null!==k&&k.apply(this,arguments)||this;a._handles=new v;a._bitmapIndex=new Map;a._mapImageContainer=new A.BitmapContainer;a._featuresMap=new Map;a.allVisiblePoints=new h;a.allVisiblePolylines=new h;a.allVisiblePolygons=new h;a.allVisibleMapImages=new l;a.container=new B.Container;return a}q(d,k);d.prototype.hitTest=function(a,c){var b=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&
!this._polygonsView)return m.resolve(null);a=[this._pointsView.hitTest(a,c),this._polylinesView.hitTest(a,c),this._polygonsView.hitTest(a,c)];return m.all(a).then(function(a){return a.filter(function(a){a&&(a.layer=b.layer,a.sourceLayer=b.layer);return!!a})[0]||null})};d.prototype.update=function(a){this._polygonsView&&this._polygonsView.update(a);this._polylinesView&&this._polylinesView.update(a);this._pointsView&&this._pointsView.update(a)};d.prototype.attach=function(){var a=this;this._handles.add(this.allVisibleMapImages.on("change",
function(c){c.added.forEach(function(b){return a._addMapImage(b)});c.removed.forEach(function(b){return a._removeMapImage(b)})}));this.container.addChild(this._mapImageContainer);this._polygonsView=new g.default({view:this.view,graphics:this.allVisiblePolygons});this.container.addChild(this._polygonsView.container);this._polylinesView=new g.default({view:this.view,graphics:this.allVisiblePolylines});this.container.addChild(this._polylinesView.container);this._pointsView=new g.default({view:this.view,
graphics:this.allVisiblePoints});this.container.addChild(this._pointsView.container);this.watch("layer.visibleSublayers",function(){return a._refreshCollections()});this._fetchService()};d.prototype.detach=function(){this._handles.removeAll();this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null);this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null);
this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)};d.prototype.moveStart=function(){this.requestUpdate()};d.prototype.viewChange=function(){this.requestUpdate()};d.prototype.moveEnd=function(){this.requestUpdate()};d.prototype._addMapImage=function(a){var c=this;this.view.spatialReference.isWGS84&&u(a.href,{responseType:"image"}).then(function(b){b=b.data;var d=y.fromJSON(a.extent);p.canProject(d,c.view.spatialReference)&&(d=p.project(d,c.view.spatialReference));var e=new z.Bitmap(b);
e.x=d.xmin;e.y=d.ymax;e.resolution=d.width/b.naturalWidth;e.rotation=a.rotation;c._mapImageContainer.addChild(e);c._bitmapIndex.set(a,e)})};d.prototype._fetchService=function(){var a=this;return this._getParsedKML().then(function(c){a._fetchSublayerService(a.layer,c)})};d.prototype._fetchSublayerService=function(a,c){var b=this;(a=a.sublayers)&&a.forEach(function(a){x.whenTrueOnce(a,"visible").then(function(){return a.load()}).then(function(){if(a.networkLink)return b._getParsedKML();b._featuresMap.set(a,
b._getGraphicsForSublayer(a,c));b._handles.remove("refresh-collections");b._handles.add(w.schedule(function(){return b._refreshCollections()}),"refresh-collections");return c}).then(function(c){b._fetchSublayerService(a,c)})})};d.prototype._getParsedKML=function(){return f.fetchService(this.layer.url,this.view.spatialReference,this.layer.refreshInterval).then(function(a){return f.parseKML(a.data)})};d.prototype._getGraphicsForSublayer=function(a,c){var b=null;return c.sublayers.some(function(c){b=
c;return c.id===a.id})?{points:b.points&&f.getGraphics(b.points),polylines:b.polylines&&f.getGraphics(b.polylines),polygons:b.polygons&&f.getGraphics(b.polygons),mapImages:b.mapImages}:null};d.prototype._refreshCollections=function(){var a=this,c=this.get("layer.visibleSublayers");this.allVisiblePoints.removeAll();this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();c&&c.length&&c.forEach(function(b){if(b=a._featuresMap.get(b))a.allVisiblePoints.addMany(b.points),
a.allVisiblePolylines.addMany(b.polylines),a.allVisiblePolygons.addMany(b.polygons),a.allVisibleMapImages.addMany(b.mapImages)})};d.prototype._removeMapImage=function(a){var c=this._bitmapIndex.get(a);c&&(this._mapImageContainer.removeChild(c),this._bitmapIndex.delete(a))};return d=r([n.subclass("esri.views.2d.layers.KMLLayerView2D")],d)}(n.declared(C,D))});
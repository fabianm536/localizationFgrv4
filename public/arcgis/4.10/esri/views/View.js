// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("../Graphic ../core/Accessor ../core/Collection ../core/CollectionFlattener ../core/Evented ../core/Handles ../core/lang ../core/Logger ../core/Promise ../core/watchUtils ../core/promiseUtils ../core/scheduling ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ./LayerViewManager ./RefreshManager ./BasemapView ./GroundView ./support/DefaultsFromMap ./input/Input ./navigation/Navigation ./interactive/interactiveToolUtils".split(" "),function(m,n,f,p,q,k,r,t,u,c,d,v,
w,x,y,z,A,B,C,l,D,E,e){var g=t.getLogger("esri.views.View");return n.createSubclass([u,q],{declaredClass:"esri.views.View",properties:{allLayerViews:{readOnly:!0},basemapView:{},animation:{},resizing:{},interacting:{},graphics:{type:f.ofType(m)},groundView:{},defaultsFromMap:l,heightModelInfo:{readOnly:!0,type:x,dependsOn:["map.heightModelInfo?","defaultsFromMap.heightModelInfo"]},initialExtent:{readOnly:!0,type:w,dependsOn:["defaultsFromMap.extent"]},initialExtentRequired:{},layerViews:{type:f},
map:{},ready:{readOnly:!0,dependsOn:"map spatialReference width height initialExtentRequired initialExtent defaultsFromMap.isSpatialReferenceDone defaultsFromMap.isTileInfoDone map.loaded?".split(" ")},size:{readOnly:!0,dependsOn:["width","height"],get:function(){return[this.width,this.height]}},spatialReference:{type:y,dependsOn:["defaultsFromMap.spatialReference","defaultsFromMap.vcsWkid","defaultsFromMap.latestVcsWkid"]},stationary:{dependsOn:["animation","interacting","resizing"]},tools:{readOnly:!0,
type:f},type:{},updating:{},padding:{},width:{},height:{},cursor:{},spatialReferenceWarningDelay:1E3,renderContext:{},suspended:!1,input:{readOnly:!0},navigation:{readOnly:!0}},constructor:function(a){this._viewHandles=new k;this._toolHandles=new k;this._viewHandles.add(this.watch("ready",function(a,h){this._currentSpatialReference=a?this.spatialReference:null;this.notifyChange("spatialReference");!a&&h&&this.layerViewManager.clear();!a&&h?this.tools.forEach(this._detachTool.bind(this)):a&&!h&&this.whenReady().then(function(){this.tools.forEach(this._attachTool.bind(this))}.bind(this))}.bind(this)));
this.allLayerViews=new p({root:this,rootCollectionNames:["basemapView.baseLayerViews","groundView.layerViews","layerViews","basemapView.referenceLayerViews"],getChildrenFunction:function(a){return a.layerViews}});this.defaultsFromMap=new l({view:this});this.input=new D;this.navigation=new E},getDefaults:function(){return r.mixin(this.inherited(arguments),{layerViews:[],graphics:[],padding:{left:0,top:0,right:0,bottom:0},tools:[]})},initialize:function(){var a=this.validate().then(function(){this._isValid=
!0;this.notifyChange("ready");var a=function(){return c.whenOnce(this,"ready").then(function(){return d.after(0)}.bind(this)).then(function(){if(!this.ready)return a()}.bind(this))}.bind(this);return a()}.bind(this));this.addResolvingPromise(a);this.basemapView=new B({view:this});this.groundView=new C({view:this});this.layerViewManager=new z({view:this});this.refreshManager=new A({view:this});this._resetInitialViewPropertiesFromContent();var b;c.init(this.defaultsFromMap,"isSpatialReferenceDone",
function(a){var c=!!(this.map&&0<this.map.allLayers.length);a&&!this.spatialReference&&c||!b?a&&!this.spatialReference&&c&&!b&&(b=d.after(this.spatialReferenceWarningDelay),b.then(function(){g.warn("#spatialReference","no spatial reference could be derived from the currently added map layers")}).catch(function(){})):(b.cancel(),b=null)}.bind(this),!0);this._viewHandles.add(e.setupCollectionHandlers(this,this._refreshToolCursorWatchers.bind(this)))},destroy:function(){this.destroyed||(this.tools.forEach(this._detachTool.bind(this)),
this.basemapView.destroy(),this.groundView.destroy(),this.destroyLayerViews(),this.refreshManager.destroy(),this.defaultsFromMap.destroy(),this.defaultsFromMap=null,this.navigation&&(this.navigation.destroy(),this._set("navigation",null)),this._viewHandles.destroy(),this._toolHandles.destroy(),this.map=null)},destroyLayerViews:function(){this.layerViewManager.destroy()},whenReady:function(){return d.resolve()},_viewHandles:null,_toolHandles:null,_isValid:!1,_readyCycleForced:!1,_userSpatialReference:null,
_currentSpatialReference:null,activeTool:null,_activeToolSetter:function(a){a&&!this.ready?g.error("#activeTool\x3d","cannot set active tool while view is not ready"):e.swap(this,a)},tools:null,animation:null,basemapView:null,groundView:null,graphics:null,heightModelInfo:null,_heightModelInfoGetter:function(){return this.getDefaultHeightModelInfo()},interacting:!1,layerViews:null,map:null,_mapSetter:function(a){var b=this._get("map");a!==b&&(a&&a.load&&a.load(),this._forceReadyCycle(),this._resetInitialViewPropertiesFromContent(),
this._set("map",a))},padding:null,_readyGetter:function(){return!!(this._isValid&&!this._readyCycleForced&&this.map&&0!==this.width&&0!==this.height&&this.spatialReference&&(!this.map.load||this.map.loaded)&&(this._currentSpatialReference||!this.initialExtentRequired||this.initialExtent||this.defaultsFromMap&&this.defaultsFromMap.isSpatialReferenceDone)&&this.defaultsFromMap&&this.defaultsFromMap.isTileInfoDone&&this.isSpatialReferenceSupported(this.spatialReference))},spatialReference:null,_spatialReferenceGetter:function(){var a=
this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null;a&&this.isHeightModelInfoRequired&&this.defaultsFromMap&&(a=a.clone(),a.vcsWkid=this.defaultsFromMap.vcsWkid,a.latestVcsWkid=this.defaultsFromMap.latestVcsWkid);return a},_spatialReferenceSetter:function(a){this._userSpatialReference=a;this._set("spatialReference",a)},stationary:!0,_stationaryGetter:function(){return!this.animation&&!this.interacting&&!this.resizing},type:null,updating:!1,initialExtentRequired:!0,
initialExtent:null,_initialExtentGetter:function(){return this.defaultsFromMap&&this.defaultsFromMap.extent},cursor:"default",renderContext:null,input:null,navigation:null,whenLayerView:function(a){return this.layerViewManager.whenLayerView(a)},getDefaultSpatialReference:function(){return this.get("defaultsFromMap.spatialReference")},getDefaultHeightModelInfo:function(){return this.get("map.supportsHeightModelInfo")&&this.get("map.heightModelInfo")||this.get("defaultsFromMap.heightModelInfo")||null},
validate:function(){return d.resolve()},isSpatialReferenceSupported:function(){return!0},isTileInfoRequired:function(){return!1},when:function(a,b,c){this.isResolved()&&!this.ready&&g.warn("#when()",'Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use watchUtils.whenOnce(view, "ready").then(...) instead.');return this.inherited(arguments)},_resetInitialViewPropertiesFromContent:function(){if(this.defaultsFromMap){var a=this.defaultsFromMap.start.bind(this.defaultsFromMap);
this.defaultsFromMap.reset();this._currentSpatialReference=null;this.notifyChange("spatialReference");this._viewHandles.remove("defaultsFromMap");this._viewHandles.add([c.watch(this,"spatialReference",a),c.watch(this,"initialExtentRequired",a),v.schedule(a)],"defaultsFromMap")}},_forceReadyCycle:function(){this.ready&&(this._readyCycleForced=!0,c.whenFalseOnce(this,"ready",function(){this._readyCycleForced=!1;this.notifyChange("ready")}.bind(this)),this.notifyChange("ready"))},_attachTool:function(a){e.attachTool(a,
this._refreshToolCursorWatchers.bind(this))},_detachTool:function(a){e.detachTool(a,this._refreshToolCursorWatchers.bind(this))},_refreshToolCursorWatchers:function(){this._toolHandles.removeAll();this._setToolCursor();this.tools.forEach(function(a){a=c.watch(a,["cursor","visible"],this._setToolCursor.bind(this));this._toolHandles.add(a)}.bind(this))},_setToolCursor:function(){this._clearOverride("cursor");for(var a=0;a<this.tools.length;a++){var b=this.tools.getItemAt(a);if(null!=b.cursor&&!1!==
b.visible){this._override("cursor",b.cursor);break}}}})});
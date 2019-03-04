// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/arrayUtils ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ./FeatureTileFetcher3D".split(" "),function(e,l,k,c,f,g){e=function(){function a(b){this.descriptor=b;this.fetchRequest=null;this.fetchStatus=0;this._features=null;this.featureLimit=this._numVertices=0;this.featuresMissing=!0;this._shuffled=!1;this._numFeatures=a.UNKNOWN_COUNT;this._emptyFeatureRatio=0;this.displayingFeatures=null;this.alive=!0;this.filtered=
!1}Object.defineProperty(a.prototype,"perTileMaximumNumberOfFeaturesExceeded",{get:function(){return!this.filtered&&(this.featuresMissing||this.features&&this.featureLimit!==this.features.length)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"features",{get:function(){return this._features},enumerable:!0,configurable:!0});a.prototype.setFeatures=function(b,a){this._features=b;this._shuffled=!1;b&&0<b.length?(this._emptyFeatureRatio=a/(b.length+a),this._numVertices=b.reduce(function(b,
a){return b+f.numVertices(a.geometry)},0)):this._numVertices=this._emptyFeatureRatio=0};Object.defineProperty(a.prototype,"emptyFeatureRatio",{get:function(){return this._emptyFeatureRatio},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"numFeatures",{get:function(){return this._numFeatures!==a.UNKNOWN_COUNT?this._numFeatures:this._features?this._features.length:0},set:function(b){this._numFeatures=b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"numVertices",
{get:function(){return this._numVertices},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hasPreciseFeatureCount",{get:function(){return this._numFeatures!==a.UNKNOWN_COUNT},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"id",{get:function(){return this.descriptor.id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"estimatedSize",{get:function(){var b=0;if(this._features)for(var a=0,d=this._features;a<d.length;a++)b+=f.estimateSize(d[a]);return b},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"estimatedUnusedSize",{get:function(){var b=0;if(this._features)for(var a=this.featureLimit;a<this._features.length;++a)b+=f.estimateSize(this._features[a]);return b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isFetching",{get:function(){return 2===this.fetchStatus||3===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isRefetching",{get:function(){return 3===this.fetchStatus},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"needsFetching",{get:function(){return 0===this.fetchStatus||1===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"needsRefetching",{get:function(){return 1===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isFetched",{get:function(){return 4===this.fetchStatus||5===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"needsDisplayUpdate",
{get:function(){var b;if(b=!!this._features){a:{b=this._features;var a=this.displayingFeatures,d=this.featureLimit;if(!a||!b||d!==a.length||d>b.length)b=!1;else{for(var c=0;c<d;++c)if(b[c]!==a[c]){b=!1;break a}b=!0}}b=!b}return b},enumerable:!0,configurable:!0});a.prototype.intersects=function(b){if(!b||!this.descriptor.extent)return!0;c.fromExtent(b,h);return c.intersects(this.descriptor.extent,h)};a.prototype.intersection=function(b,a){if(!b&&!this.descriptor.extent)return c.set(a,c.POSITIVE_INFINITY),
a;b?(c.fromExtent(b,a),this.descriptor.extent&&c.intersection(a,this.descriptor.extent,a)):c.set(a,this.descriptor.extent);return a};a.prototype._shuffle=function(a){this._features.sort(function(b,c){return g.getFeatureId(b,a)-g.getFeatureId(c,a)});k.shuffle(this._features,16438);this._shuffled=!0};a.prototype.reduceFeatures=function(a,c){if(0>=a)return!1;var b=!1;this._features?(this.featureLimit=Math.ceil(this.numFeatures*a),this.featureLimit>this._features.length&&(this.featureLimit=this._features.length,
4===this.fetchStatus&&0<this._features.length&&(this.fetchStatus=1,b=!0)),!this._shuffled&&1>a&&this._shuffle(c)):this.featureLimit=0;return b};Object.defineProperty(a.prototype,"cacheItem",{get:function(){return{features:this.features,numFeatures:this._numFeatures,emptyFeatureRatio:this._emptyFeatureRatio,fetchStatus:this.fetchStatus,featuresMissing:this.featuresMissing}},enumerable:!0,configurable:!0});a.prototype.loadCache=function(a){this.fetchRequest=null;this._features=a.features;this._numFeatures=
a.numFeatures;this._emptyFeatureRatio=a.emptyFeatureRatio;this.fetchStatus=a.fetchStatus;this.featuresMissing=a.featuresMissing};return a}();(e||(e={})).UNKNOWN_COUNT=-1;var h=c.create();return e});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./VisualVariable ./support/OpacityStop ./support/utils ../../support/arcadeUtils".split(" "),function(t,u,n,f,c,p,q,r,l){return function(m){function b(a){a=m.call(this,a)||this;a.type="opacity";a.normalizationField=null;return a}n(b,m);k=b;Object.defineProperty(b.prototype,"_cache",{get:function(){var a=l.createSyntaxTree(this.valueExpression);return{ipData:this._interpolateData(),
hasExpression:!!this.valueExpression,compiledFunc:l.createFunction(a)}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stops",{set:function(a){a&&Array.isArray(a)&&(a=a.filter(function(a){return!!a}),a.sort(function(a,b){return a.value-b.value}));this._set("stops",a)},enumerable:!0,configurable:!0});b.prototype.getOpacity=function(a,b){var e="number"===typeof a,g=e?null:a,d=g&&g.attributes,h=e?a:null,c=this._cache;a=c.ipData;var f=c.hasExpression,c=c.compiledFunc,k=this.field;
if(!k&&!f)return(e=this.stops)&&e[0]&&e[0].opacity;"number"!==typeof h&&(f?(h=l.getViewInfo(b),g=l.createExecContext(g,h),h=l.executeFunction(c,g)):d&&(h=d[k]));g=this.normalizationField;d=d?parseFloat(d[g]):void 0;if(null!=h&&(!g||e||!isNaN(d)&&0!==d)&&(isNaN(d)||e||(h/=d),e=r.lookupData(h,a))){a=e[0];d=e[1];if(a===d)return this.stops[a].opacity;a=this.stops[a].opacity;return a+(this.stops[d].opacity-a)*e[2]}};b.prototype.clone=function(){return new k({field:this.field,normalizationField:this.normalizationField,
valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(a){return a.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})};b.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(a){return a.value||0})};var k;f([c.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],b.prototype,"_cache",null);f([c.property({type:["opacity"],json:{type:["transparencyInfo"]}})],b.prototype,"type",
void 0);f([c.property({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0);f([c.property({type:[q],json:{write:!0}})],b.prototype,"stops",null);return b=k=f([c.subclass("esri.renderers.visualVariables.OpacityVariable")],b)}(c.declared(p))});
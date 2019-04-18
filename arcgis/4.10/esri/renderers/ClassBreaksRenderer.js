// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../symbols ../core/kebabDictionary ../core/lang ../core/Logger ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ./Renderer ./mixins/VisualVariablesRenderer ./support/ClassBreakInfo ./support/LegendOptions ../support/arcadeUtils ../symbols/support/jsonUtils ../symbols/support/typeUtils".split(" "),function(E,F,w,d,x,t,y,l,z,c,q,A,B,m,C,k,g,h){var u=z.getLogger("esri.renderers.ClassBreaksRenderer"),
n=y({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),D=q.ensureType(m.ClassBreakInfo);return function(v){function a(b){b=v.call(this)||this;b.backgroundFillSymbol=null;b.classBreakInfos=null;b.defaultLabel=null;b.defaultSymbol=null;b.field=null;b.isMaxInclusive=!0;b.legendOptions=null;b.normalizationField=null;b.normalizationTotal=null;b.type="class-breaks";b.valueExpression=null;b.valueExpressionTitle=null;b._set("classBreakInfos",[]);return b}
w(a,v);r=a;a.prototype.readClassBreakInfos=function(b,a,c){if(Array.isArray(b)){var p=a.minValue;return b.map(function(b){var a=new m.ClassBreakInfo;a.read(b,c);null==a.minValue&&(a.minValue=p);null==a.maxValue&&(a.maxValue=a.minValue);p=a.maxValue;return a})}};a.prototype.writeClassBreakInfos=function(b,a,c,e){b=b.map(function(b){return b.write({},e)});this._areClassBreaksConsecutive()&&b.forEach(function(b){return delete b.classMinValue});a[c]=b};Object.defineProperty(a.prototype,"compiledFunc",
{get:function(){return k.createFunction(this.valueExpression)},enumerable:!0,configurable:!0});a.prototype.readDefaultSymbol=function(b,a,c){return g.read(b,a,c)};a.prototype.writeDefaultSymbolWebScene=function(b,a,c,e){g.writeTarget(b,a,c,e)};a.prototype.writeDefaultSymbol=function(b,a,c,e){g.writeTarget(b,a,c,e)};a.prototype.castField=function(b){return null==b?b:"function"===typeof b?(u.error(".field: field must be a string value"),null):q.ensureString(b)};Object.defineProperty(a.prototype,"minValue",
{get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"normalizationType",{get:function(){var b=this._get("normalizationType"),a=!!this.normalizationField,c=null!=this.normalizationTotal;if(a||c)b=a&&"field"||c&&"percent-of-total"||null,a&&c&&u.warn("warning: both normalizationField and normalizationTotal are set!");else if("field"===b||"percent-of-total"===b)b=null;return b},set:function(b){this._set("normalizationType",
b)},enumerable:!0,configurable:!0});a.prototype.addClassBreakInfo=function(b,a,c){var e=null,e="number"===typeof b?new m.ClassBreakInfo({minValue:b,maxValue:a,symbol:c}):D(l.clone(b));this.classBreakInfos.push(e);1===this.classBreakInfos.length&&this.notifyChange("minValue")};a.prototype.removeClassBreakInfo=function(b,a){for(var c=this.classBreakInfos.length,e=0;e<c;e++){var d=[this.classBreakInfos[e].minValue,this.classBreakInfos[e].maxValue];if(d[0]===b&&d[1]===a){this.classBreakInfos.splice(e,
1);break}}};a.prototype.getBreakIndex=function(b,a){var c=this.field,d=b.attributes,p=this.isMaxInclusive,f=null;if(this.valueExpression)f=k.executeFunction(this.compiledFunc,k.createExecContext(b,k.getViewInfo(a)));else if(f=parseFloat(d[c]),b=this.normalizationType)if(a=this.normalizationTotal,d=parseFloat(d[this.normalizationField]),"log"===b)f=Math.log(f)*Math.LOG10E;else if("percent-of-total"===b&&!isNaN(a))f=f/a*100;else if("field"===b&&!isNaN(d)){if(isNaN(f)||isNaN(d))return-1;f/=d}if(null!=
f&&"number"===typeof f&&!isNaN(f))for(d=0;d<this.classBreakInfos.length;d++)if(b=[this.classBreakInfos[d].minValue,this.classBreakInfos[d].maxValue],b[0]<=f&&(p?f<=b[1]:f<b[1]))return d;return-1};a.prototype.getClassBreakInfo=function(b,a){b=this.getBreakIndex(b,a);return-1!==b?this.classBreakInfos[b]:null};a.prototype.getSymbol=function(b,a){b=this.getBreakIndex(b,a);return-1<b?this.classBreakInfos[b].symbol:this.defaultSymbol};a.prototype.getSymbols=function(){var b=[];this.classBreakInfos.forEach(function(a){a.symbol&&
b.push(a.symbol)});this.defaultSymbol&&b.push(this.defaultSymbol);return b};a.prototype.clone=function(){return new r({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:l.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,
normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:l.clone(this.visualVariables),legendOptions:l.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};a.prototype.collectRequiredFields=function(b){this.inherited(arguments);[this.field,this.normalizationField].forEach(function(a){a&&"string"===typeof a&&(b[a]=!0)});this.valueExpression&&k.extractFieldNames(this.valueExpression).forEach(function(a){b[a]=!0})};a.prototype._areClassBreaksConsecutive=
function(){for(var a=this.classBreakInfos,c=a.length,d=1;d<c;d++)if(a[d-1].maxValue!==a[d].minValue)return!1;return!0};var r;d([c.property({types:{base:t.BaseSymbol,key:"type",typeMap:{"simple-fill":h.rendererTypes.typeMap["simple-fill"],"picture-fill":h.rendererTypes.typeMap["picture-fill"],"polygon-3d":h.rendererTypes.typeMap["polygon-3d"]}},json:{origins:{"web-scene":{read:g.read,write:{target:{backgroundFillSymbol:{type:t.PolygonSymbol3D}},writer:g.writeTarget}}},read:g.read,write:g.writeTarget}})],
a.prototype,"backgroundFillSymbol",void 0);d([c.property({type:[m.ClassBreakInfo]})],a.prototype,"classBreakInfos",void 0);d([c.reader("classBreakInfos")],a.prototype,"readClassBreakInfos",null);d([c.writer("classBreakInfos")],a.prototype,"writeClassBreakInfos",null);d([c.property({dependsOn:["valueExpression"]})],a.prototype,"compiledFunc",null);d([c.property({type:String,json:{write:!0}})],a.prototype,"defaultLabel",void 0);d([c.property({types:h.rendererTypes})],a.prototype,"defaultSymbol",void 0);
d([c.reader("defaultSymbol")],a.prototype,"readDefaultSymbol",null);d([c.writer("web-scene","defaultSymbol",{defaultSymbol:{types:h.rendererTypes3D}})],a.prototype,"writeDefaultSymbolWebScene",null);d([c.writer("defaultSymbol")],a.prototype,"writeDefaultSymbol",null);d([c.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);d([c.cast("field")],a.prototype,"castField",null);d([c.property({type:Boolean})],a.prototype,"isMaxInclusive",void 0);d([c.property({type:C.default,json:{write:!0}})],
a.prototype,"legendOptions",void 0);d([c.property({type:Number,readOnly:!0,value:null,dependsOn:["classBreakInfos"],json:{read:!1,write:{overridePolicy:function(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],a.prototype,"minValue",null);d([c.property({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0);d([c.property({type:Number,cast:function(a){return q.ensureNumber(a)},json:{write:!0}})],a.prototype,"normalizationTotal",
void 0);d([c.property({type:n.apiValues,value:null,dependsOn:["normalizationField","normalizationTotal"],json:{type:n.jsonValues,read:n.read,write:n.write}})],a.prototype,"normalizationType",null);d([c.property({dependsOn:["field","normalizationField","valueExpression"],readOnly:!0})],a.prototype,"requiredFields",void 0);d([c.enumeration.serializable()({classBreaks:"class-breaks"})],a.prototype,"type",void 0);d([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);d([c.property({type:String,
json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);d([x(2,c.cast(h.ensureType))],a.prototype,"addClassBreakInfo",null);return a=r=d([c.subclass("esri.renderers.ClassBreaksRenderer")],a)}(c.declared(A,B))});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./support/arcadeUtils ./support/ContentElement ./support/ExpressionInfo ./support/FieldInfo ./support/LayerOptions ./support/RelatedRecordsInfo ./support/ContentElement/Attachments ./support/ContentElement/ContentElement ./support/ContentElement/Fields ./support/ContentElement/Media ./support/ContentElement/Text ./support/ContentElement/Media/types ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle".split(" "),
function(L,M,N,r,e,h,t,g,u,v,c,w,x,y,z,A,B,C,k,D,l,m,n,E,F,G,H){var I=h.ofType({key:"type",defaultKeyValue:"button",base:F,typeMap:{button:G,toggle:H}}),J={base:D,key:"type",typeMap:{media:m,text:n,attachments:k,fields:l}},K=u.getLogger("esri.PopupTemplate");return function(p){function b(){var a=null!==p&&p.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=null;a.layerOptions=null;a.lastEditInfoEnabled=!0;a.outFields=null;a.overwriteActions=!1;a.title="";
a.relatedRecordsInfo=null;return a}r(b,p);q=b;b.prototype.castContent=function(a){if(Array.isArray(a))return a.map(function(a){return w.ensureOneOfType(J,a)});if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||v.isThenable(a))return a;K.error("content error","unsupported content value",{value:a});return null};b.prototype.readContent=function(a,d){var f=d.description,b=d.mediaInfos;a=d.popupElements;d=d.showAttachments;if(Array.isArray(a)&&0<a.length)return a.map(function(a){if("media"===
a.type)return!a.mediaInfos&&b&&(a.mediaInfos=b),m.fromJSON(a);if("text"===a.type)return!a.text&&f&&(a.text=f),n.fromJSON(a);if("attachments"===a.type)return k.fromJSON(a);if("fields"===a.type)return l.fromJSON(a)}).filter(Boolean);a=[];f?a.push(new n({text:f})):a.push(new l);Array.isArray(b)&&b.length&&a.push(m.fromJSON({mediaInfos:b}));d&&a.push(k.fromJSON({displayType:"list"}));return a.length?a:f};b.prototype.writeContent=function(a,d){d.showAttachments=!1;"string"===typeof a?d.description=a:Array.isArray(a)&&
(d.popupElements=a.map(function(a){return a&&a.toJSON()}),d.popupElements.forEach(function(a){"attachments"!==a.type||d.showAttachments?"media"!==a.type||d.mediaInfos?"text"!==a.type||d.description||(a.text&&(d.description=a.text),delete a.text):(a.mediaInfos&&(d.mediaInfos=g.clone(a.mediaInfos)),delete a.mediaInfos):d.showAttachments=!0}))};b.prototype.writeLayerOptions=function(a,d){d.layerOptions=a&&null!==a.showNoDataRecords?a.toJSON():null};b.prototype.writeTitle=function(a,d){d.title=a||""};
Object.defineProperty(b.prototype,"requiredFields",{get:function(){return this.collectRequiredFields()},enumerable:!0,configurable:!0});b.prototype.clone=function(){var a=this.actions,a=a?g.clone(a.toArray()):[];return new q({actions:a,content:Array.isArray(this.content)?g.clone(this.content):this.content,fieldInfos:Array.isArray(this.fieldInfos)?g.clone(this.fieldInfos):null,layerOptions:this.layerOptions?g.clone(this.layerOptions):null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?
g.clone(this.relatedRecordsInfo):null,title:this.title})};b.prototype.collectRequiredFields=function(){var a=(this.outFields||[]).concat(this._getActionsFields(this.actions),this._getTitleFields(this.title),this._getContentFields(this.content),this._getExpressionInfoFields(this.expressionInfos));return-1!==a.indexOf("*")?["*"]:a.filter(function(a,b,c){return a&&b===c.indexOf(a)})};b.prototype._getContentElementFields=function(a){var b=this;if(!a||"attachments"===a.type)return[];if("fields"===a.type)return this._getFieldInfoFields(a.fieldInfos||
this.fieldInfos);if("media"===a.type)return(a.mediaInfos||[]).reduce(function(a,d){return a.concat(b._getMediaInfoFields(d))},[]);if("text"===a.type)return this._extractFieldNames(a.text)};b.prototype._getMediaInfoFields=function(a){var b=a.caption,f=a.value||{},c=f.fields,e=void 0===c?[]:c,c=f.normalizeField,g=f.tooltipField,h=f.sourceURL,f=f.linkURL;a=this._extractFieldNames(a.title).concat(this._extractFieldNames(b),this._extractFieldNames(h),this._extractFieldNames(f),e);c&&a.push(c);g&&a.push(g);
return a};b.prototype._getContentFields=function(a){var b=this;return"string"===typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce(function(a,d){return a.concat(b._getContentElementFields(d))},[]):[]};b.prototype._getExpressionInfoFields=function(a){return a?a.reduce(function(a,b){return a.concat(x.extractFieldNames(b.expression))},[]):[]};b.prototype._getFieldInfoFields=function(a){return a?a.filter(function(a){return"undefined"===typeof a.visible?!0:!!a.visible}).map(function(a){return a.fieldName}).filter(function(a){return-1===
a.indexOf("relationships/")&&-1===a.indexOf("expression/")}):[]};b.prototype._getActionsFields=function(a){var b=this;return a?a.toArray().reduce(function(a,d){return a.concat(b._getActionFields(d))},[]):[]};b.prototype._getActionFields=function(a){var b=a.className,c=a.type,c="button"===c||"toggle"===c?a.image:"";return this._extractFieldNames(a.title).concat(this._extractFieldNames(b),this._extractFieldNames(c))};b.prototype._getTitleFields=function(a){return"string"===typeof a?this._extractFieldNames(a):
[]};b.prototype._extractFieldNames=function(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];var b=/\{(\w+):.+\}/;return(a=a.filter(function(a){return!(0===a.indexOf("{relationships/")||0===a.indexOf("{expression/"))}).map(function(a){return a.replace(b,"{$1}")}))?a.map(function(a){return a.slice(1,-1)}):[]};var q;e([c.property({type:I})],b.prototype,"actions",void 0);e([c.property()],b.prototype,"content",void 0);e([c.cast("content")],b.prototype,"castContent",null);e([c.reader("content",
["description","popupElements","mediaInfos","showAttachments"])],b.prototype,"readContent",null);e([c.writer("content",{popupElements:{type:h.ofType(y.types)},showAttachments:{type:Boolean},mediaInfos:{type:h.ofType(E.default)},description:{type:String}})],b.prototype,"writeContent",null);e([c.property({type:[z],json:{write:!0}})],b.prototype,"expressionInfos",void 0);e([c.property({type:[A],json:{write:!0}})],b.prototype,"fieldInfos",void 0);e([c.property({type:B})],b.prototype,"layerOptions",void 0);
e([c.writer("layerOptions")],b.prototype,"writeLayerOptions",null);e([c.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],b.prototype,"lastEditInfoEnabled",void 0);e([c.property()],b.prototype,"outFields",void 0);e([c.property()],b.prototype,"overwriteActions",void 0);e([c.property({json:{type:String}})],b.prototype,"title",void 0);e([c.writer("title")],b.prototype,"writeTitle",null);e([c.property({type:C,json:{write:!0}})],b.prototype,
"relatedRecordsInfo",void 0);e([c.property({dependsOn:"actions title content fieldInfos expressionInfos outFields".split(" "),readOnly:!0})],b.prototype,"requiredFields",null);return b=q=e([c.subclass("esri.PopupTemplate")],b)}(c.declared(t))});
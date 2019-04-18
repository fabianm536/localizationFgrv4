// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/date/locale ../moment ../core/accessorSupport/decorators ../layers/support/domains ../layers/support/fieldUtils ./Widget ./FeatureForm/FeatureFormViewModel ./support/widget".split(" "),function(y,z,k,t,h,n,l,g,u,v,w,x,d){var p={datePattern:"M/d/y",timePattern:"h:mm:ss a"};return function(q){function b(a){a=q.call(this)||this;a._fieldFocusNeeded=!1;a._activeDateEdit=null;
a._activeInput=null;a.feature=null;a.fieldConfig=null;a.groupDisplay="all";a.layer=null;a.strict=null;a.viewModel=new x;a._handleFormKeyDown=a._handleFormKeyDown.bind(a);a._handleInputBlur=a._handleInputBlur.bind(a);a._handleInputFocus=a._handleInputFocus.bind(a);a._handleNumberInputMouseDown=a._handleNumberInputMouseDown.bind(a);a._handleInputKeyDown=a._handleInputKeyDown.bind(a);a._handleOptionChange=a._handleOptionChange.bind(a);a._handleCollapsedGroupClick=a._handleCollapsedGroupClick.bind(a);
a._handleSubmit=a._handleSubmit.bind(a);a._afterScrollerCreateOrUpdate=a._afterScrollerCreateOrUpdate.bind(a);return a}t(b,q);b.prototype.postInitialize=function(){var a=this;this.own(this.watch("feature",function(){var c=a.viewModel.inputFields[0];a._activeInput=c&&c.inputFields?c.inputFields[0]:c;a._fieldFocusNeeded=!0}),this.on("submit",function(c){0<c.invalid.length&&(c=a.viewModel.findField(c.invalid[0]),a._activeInput=c,a._fieldFocusNeeded=!0,a.scheduleRender())}))};b.prototype.getValues=function(){return null};
b.prototype.submit=function(){return null};b.prototype.render=function(){var a=this.viewModel.state;return d.tsx("div",{class:this.classes("esri-feature-form","esri-widget")},"ready"===a?this.renderForm():null)};b.prototype.renderForm=function(){return d.tsx("form",{class:"esri-feature-form__form",novalidate:!0,onsubmit:this._handleSubmit,onkeydown:this._handleFormKeyDown},this.renderFields())};b.prototype.renderFields=function(){var a=this;return this.viewModel.inputFields.map(function(c,f){return c&&
c.inputFields?a.renderGroup(c,f):a.renderLabeledField(c)})};b.prototype.renderGroup=function(a,c){var f=this,b=a.description,e=a.label,m=a.inputFields,r=this._activeInput&&this._activeInput.group===a,k=this.id+"_group_"+c,g=this.id+"_group-label_"+c;c=this.id+"_group-description_"+c;var h=b?d.tsx("p",{class:this.classes("esri-feature-form__group-description","esri-feature-form__description-text"),id:c},b):null,l="sequential"===this.groupDisplay;return d.tsx("fieldset",{class:this.classes("esri-feature-form__group",
l?"esri-feature-form__group--sequential":null,!l||r?null:"esri-feature-form__group--collapsed",r?"esri-feature-form__group--active":null),"aria-labelledby":g,"aria-describedby":b?c:"","data-group":a,id:k,onclick:this._handleCollapsedGroupClick},d.tsx("div",{class:"esri-feature-form__group-label",id:g},e),h,m.map(function(a){return f.renderLabeledField(a)}))};b.prototype.renderLabeledField=function(a){return d.tsx("label",{key:a.layer.id+"-"+a.name,class:"esri-feature-form__label"},[a.label,"unsupported"!==
a.type?this.renderInputField(a):this.renderUnsupportedField(a),this.renderAuxiliaryText(a)])};b.prototype.renderInputField=function(a){var c=a.domain,f=a.editable,b=a.type,e=this.viewModel.getValue(a.name),f=!f,m=this.getCommonInputProps(a);return c&&"coded-value"===c.type&&!f?this.renderSelectInputField(e,c.codedValues.map(function(a){return{value:a.code,name:a.name}}),m):"text"===b&&"text-area"===a.editorType||"rich-text"===a.editorType?d.tsx("textarea",k({},m)):"date"===b?this.renderDateInputField(e,
m):d.tsx("input",k({type:"text"===b?"text":"number"},m))};b.prototype.renderDateInputField=function(a,c){var f=this._formatDate(0),b=f.date,f=f.time,e=this.id+"-"+c.key,m=e+"-date",e=e+"-time",g=c["data-field"];return d.tsx("div",{key:c.key+"-date",class:"esri-feature-form__date-input-container"},d.tsx("div",{class:"esri-feature-form__date-input-part"},d.tsx("input",k({"aria-label":g.label,"aria-describedby":m,type:"text"},c,{"data-date-part":"date",class:this.classes(c.class,"esri-feature-form__input--date"),
value:this._formatDate(a).date})),d.tsx("div",{class:"esri-feature-form__date-format-hint",id:m},b)),d.tsx("div",{class:"esri-feature-form__date-input-part"},d.tsx("input",k({"aria-describedby":e,"aria-label":g.label,type:"text"},c,{"data-date-part":"time",class:this.classes(c.class,"esri-feature-form__input--time"),value:this._formatDate(a).time})),d.tsx("div",{class:"esri-feature-form__date-format-hint",id:e},f)))};b.prototype.renderUnsupportedField=function(a){a=this.viewModel.getValue(a.name);
return d.tsx("input",{class:this.classes("esri-input","esri-feature-form__input","esri-feature-form__input--disabled"),disabled:!0,type:"text",value:""+a})};b.prototype.renderSelectInputField=function(a,c,f){var b=!1;c=c.map(function(c){c.value===a&&(b=!0);return d.tsx("option",{value:""+c.value,key:c.name},c.name)});null==a||""===a||b||c.unshift(d.tsx("option",{value:""+a,key:"outlier-option"},a));var e=f["data-field"];e.required||null!=e.value||c.unshift(d.tsx("option",{value:"",key:"empty-option"}));
return d.tsx("select",k({},f,{class:this.classes(f.class,"esri-select"),onchange:this._handleOptionChange}),c)};b.prototype.renderAuxiliaryText=function(a){if(!a.valid)return d.tsx("div",{key:"error-message"},d.tsx("span",{class:this.classes("esri-feature-form__input-icon--invalid","esri-icon-notice-triangle")}),d.tsx("div",{class:"esri-feature-form__field-error-message"},a.errorMessage));if(a.valid&&a.description)return d.tsx("div",{key:"description",class:"esri-feature-form__description-text"},
a.description)};b.prototype.getCommonInputProps=function(a){var c=a.editable,f=a.name,b=a.required,e=a.maxLength,d=a.hint,g=a.type,h=a.valid,l=this.viewModel.getValue(f),c=!c;return k({afterCreate:this._afterScrollerCreateOrUpdate,afterUpdate:this._afterScrollerCreateOrUpdate,"aria-invalid":h?"false":"true",class:this.classes("esri-input","esri-feature-form__input",c?"esri-feature-form__input--disabled":null,h?null:"esri-feature-form__input--invalid"),key:f,maxlength:-1<e?""+e:""},this._getNumberFieldConstraints(a),
{disabled:c,value:null==l?"":""+l,"data-field":a,onfocus:this._handleInputFocus,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===g?this._handleNumberInputMouseDown:null,required:b,title:d})};b.prototype._handleNumberInputMouseDown=function(a){a=a.target;a.disabled||a.focus();this.scheduleRender()};b.prototype._getNumberFieldConstraints=function(a){return(a=u.getDomainRange(a.domain)||v.getFieldRange(a.field))&&a.max!==Number.MAX_VALUE&&a.min!==Number.MIN_VALUE?
a:{min:null,max:null}};b.prototype._afterScrollerCreateOrUpdate=function(a){var c=a["data-field"];c.editable&&this._fieldFocusNeeded&&this._activeInput===c&&(this._fieldFocusNeeded=!1,a.focus())};b.prototype._handleInputFocus=function(a){this._activeInput=a.target["data-field"]};b.prototype._handleInputBlur=function(a){var c,f=a.target,b=f["data-field"],e=(a=a.relatedTarget)&&a["data-field"];if("date"===b.type){var d=f.getAttribute("data-date-part");this._activeDateEdit=k({},this._activeDateEdit,
(c={},c[d]={value:f.value,input:f},c))}e&&"date"===b.type&&"date"===e.type&&b.field===e.field?""!==f.value&&""===a.value&&(d=a.getAttribute("data-date-part"),a.value=this._formatDate(Date.now())[d]):(this._activeDateEdit?(f=this._activeDateEdit,c=f.date,f=f.time,a=this._getDateEditValue(b,"date"),b=this._getDateEditValue(b,"time"),e=""===a||""===b,c&&(c=c.input,c.value=e?"":a,this._updateFieldValue(c)),f&&(c=f.input,c.value=e?"":b,this._updateFieldValue(c)),this._activeDateEdit=null):this._updateFieldValue(f),
this.scheduleRender())};b.prototype._getDateEditValue=function(a,c){var b=this._activeDateEdit[c];if(b)return""===b.value?"":(b=this._parseDate(b.value,c))?this._formatDate(b.getTime())[c]:this._formatDate(a.value)[c]};b.prototype._handleInputKeyDown=function(a){var c=a.key,b=a.altKey,d=a.ctrlKey,e=a.metaKey;if("Enter"!==c){var g=a.target["data-field"].field.type,h="single"===g||"double"===g;"integer"!==g&&"small-integer"!==g&&!h||b||d||e||1!==c.length||(b=Number(c),d=["-","+"],e=["e","."],h=h?d.concat(e):
d,isNaN(b)&&-1===h.indexOf(c)&&a.preventDefault())}else this._updateFieldValue(a.target),this.scheduleRender()};b.prototype._updateFieldValue=function(a){this.viewModel.setValue(a["data-field"].name,this._parseValue(a))};b.prototype._parseValue=function(a){var c=a["data-field"],b=a.value,d=c.type;if(!c.required&&""===b)return null;if("number"===d)return parseFloat(b);if("date"===d){if(!b)return null;a=a.getAttribute("data-date-part");d=Number(b);if(!isNaN(d))return d;b=this._parseDate(b,a);if(!b)return null;
var b=l(b),e=c.domain,g=l(),d=g;e&&"range"===e.type&&(e=l(e.maxValue),g.isAfter(e)||(d=e));c=this.viewModel.getValue(c.name);c=l(null!=c?c:d);"date"===a?(b.hour(c.hour()),b.minutes(c.minutes()),b.seconds(c.seconds())):(b.date(c.date()),b.month(c.month()),b.year(c.year()));return b.valueOf()}return b};b.prototype._handleOptionChange=function(a){this._updateFieldValue(a.target);this.scheduleRender()};b.prototype._handleCollapsedGroupClick=function(a){!(a=a.currentTarget["data-group"])||this._activeInput&&
this._activeInput.group===a||(this._activeInput=a.inputFields[0],this._fieldFocusNeeded=!0,this.scheduleRender())};b.prototype._handleSubmit=function(a){a.preventDefault()};b.prototype._handleFormKeyDown=function(a){"Enter"===a.key&&this.viewModel.submit()};b.prototype._formatDate=function(a){if(null==a)return{date:"",time:""};a=new Date(a);return{date:n.format(a,k({selector:"date"},p)),time:n.format(a,k({selector:"time"},p))}};b.prototype._parseDate=function(a,b){return null==a||""===a?null:n.parse(a,
k({selector:b},p))};h([g.aliasOf("viewModel.feature")],b.prototype,"feature",void 0);h([g.aliasOf("viewModel.fieldConfig")],b.prototype,"fieldConfig",void 0);h([g.property(),d.renderable()],b.prototype,"groupDisplay",void 0);h([g.aliasOf("viewModel.layer")],b.prototype,"layer",void 0);h([g.aliasOf("viewModel.strict")],b.prototype,"strict",void 0);h([g.property(),d.renderable(["viewModel.inputFields","viewModel.state"]),d.vmEvent(["value-change","submit"])],b.prototype,"viewModel",void 0);h([g.aliasOf("viewModel.getValues")],
b.prototype,"getValues",null);h([g.aliasOf("viewModel.submit")],b.prototype,"submit",null);return b=h([g.subclass("esri.widgets.FeatureForm")],b)}(g.declared(w))});
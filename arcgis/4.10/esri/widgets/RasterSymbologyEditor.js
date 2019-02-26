// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dgrid/OnDemandGrid ./ColorRampSelector dijit/TitlePane dijit/form/CheckBox dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/NumberTextBox dojo/dom-construct dojo/i18n!./RasterSymbologyEditor/nls/RasterSymbologyEditor dojo/store/Memory ../core/lang ../core/accessorSupport/decorators ./Widget ./RasterSymbologyEditor/RasterSymbologyEditorViewModel ./support/widget".split(" "),function(L,M,F,
g,G,v,p,H,h,I,k,e,f,n,J,l,K,u,b){var d={base:"esri-raster-symbology-editor",filteringSelect:"esri-raster-symbology-editor__filtering-select",stretchColorSchemeRow:"esri-raster-symbology-editor__stretch-color-ramp-row",percentClipOptionsRow:"esri-raster-symbology-editor__percent-clip-row",stdDeviationOptionsRow:"esri-raster-symbology-editor__std-deviation-row",stretchOptionsBlock:"esri-raster-symbology-editor__stretch-options",stretchGammaBlock:"esri-raster-symbology-editor__stretch-gamma-row",stretchDraBlock:"esri-raster-symbology-editor__stretch-dra-row",
displayHidden:"esri-raster-symbology-editor--hidden",displayBlock:"esri-raster-symbology-editor--block",table:"esri-raster-symbology-editor__table",thumbnailImage:"esri-raster-symbology-editor__thumbnail-image",bandCombinationPresetNaturalColorIcon:"esri-raster-symbology-editor__band-combination-icon--natural-color",bandCombinationPresetLanduseIcon:"esri-raster-symbology-editor__band-combination-icon--landuse",bandCombinationPresetLandWaterIcon:"esri-raster-symbology-editor__band-combination-icon--land-water",
bandCombinationPresetVegetationIcon:"esri-raster-symbology-editor__band-combination-icon--vegetation",bandCombinationPresetShallowBathymetricIcon:"esri-raster-symbology-editor__band-combination-icon--bathymetric",bandCombinationPresetColorInfraredIcon:"esri-raster-symbology-editor__band-combination-icon--color-infrared",minMaxStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--min-max",noneStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--none",standardDeviationStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--standard-deviation",
percentClipStretchTypeIcon:"esri-raster-symbology-editor__stretch-type-icon--percent-clip",rgbSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--rgb",stretchSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--stretch",uniqueValueSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--unique-value",discreteSymbologyTypeIcon:"esri-raster-symbology-editor__symbology-type-icon--discrete",menuItemTd:"esri-raster-symbology-editor__menu-item-td",dgridSymbolCell:"esri-raster-symbology-editor__dgrid-symbol-cell",
menuItemText:"esri-raster-symbology-editor__menu-item-text",checkbox:"esri-raster-symbology-editor__checkbox"};return function(w){function c(){var a=null!==w&&w.apply(this,arguments)||this;a.layer=null;a.defaultParams=null;a.viewModel=new u;a.stretchType=0;a.symbologyType="";a._components=[];a._symbologySelect=null;a._supportsBandPresets=!1;return a}F(c,w);c.prototype.postInitialize=function(a){this.defaultParams=this.viewModel.getDefaultRenderParameters();this._createUIComponents()};c.prototype.destroy=
function(){this._components.forEach(function(a){a&&(a.destroy(),a=null)})};c.prototype.render=function(){var a,c,q,e,r,x,h,k,y,l,z,A,m=this.symbologyType,t=this.stretchType,g=u.SymbologyTypes,n=g.stretch,p=g.rgb,v=g.uniqueValue,w=g.discrete,B=this.viewModel.isStretchColorRampApplicable(t),C=this.viewModel.getStretchFilterType(u.StretchTypeNames.percentClip),D=this.viewModel.getStretchFilterType(u.StretchTypeNames.none),E=this.viewModel.getStretchFilterType(u.StretchTypeNames.standardDeviation),g=
b.tsx("div",null,b.tsx("div",{afterCreate:this._placeSymbologySelect,bind:this})),B=b.tsx("div",{class:this.classes((a={},a[d.displayBlock]=m===n,a[d.displayHidden]=m!==n,a))},b.tsx("div",{afterCreate:this._createColorSchemeTitlePane,bind:this},b.tsx("table",{class:d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.bandSelectionLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBandSelect,bind:this}))),b.tsx("tr",{class:this.classes((c={},c[d.stretchColorSchemeRow]=B,c[d.displayHidden]=
!B,c))},b.tsx("td",null,b.tsx("label",null,f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeColorRampSelect,bind:this}))))));a=b.tsx("div",{class:this.classes((q={},q[d.displayBlock]=m===n||m===p,q[d.displayHidden]=m!==n,q))},b.tsx("div",{afterCreate:this._createNoDataTitlePane,bind:this},b.tsx("table",{class:d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeNoDataInput,bind:this}))))));q=b.tsx("div",
{afterCreate:this._placeStretchTypeSelect,bind:this});C=b.tsx("tr",{class:this.classes((e={},e[d.percentClipOptionsRow]=t===C,e[d.displayHidden]=t!==C,e))},b.tsx("td",null,b.tsx("label",null,f.minLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeMinPercentInput,bind:this})),b.tsx("td",null,b.tsx("label",null,f.maxLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeMaxPercentInput,bind:this})));e=b.tsx("tr",{class:this.classes((r={},r[d.stdDeviationOptionsRow]=t===E,r[d.displayHidden]=
t!==E,r))},b.tsx("td",{colSpan:2},b.tsx("label",null,f.nStdDeviationsLabel)),b.tsx("td",{colSpan:2},b.tsx("div",{afterCreate:this._placeStandardDeviationsInput,bind:this})));r=b.tsx("div",{class:this.classes((x={},x[d.displayBlock]=m===n||m===p,x[d.displayHidden]=m!==n,x))},b.tsx("div",{afterCreate:this._createStretchTitlePane,bind:this},b.tsx("table",{class:d.table},b.tsx("tr",{class:d.stretchOptionsBlock},b.tsx("td",{colSpan:2},b.tsx("label",null,f.stretchTypeLabel)),b.tsx("td",{colSpan:2},q)),
C,e,b.tsx("tr",{class:this.classes((h={},h[d.stretchGammaBlock]=t!==D,h[d.displayHidden]=t===D,h))},b.tsx("td",{colSpan:2},b.tsx("label",null,f.gammaLabel)),b.tsx("td",{colSpan:2},b.tsx("div",{afterCreate:this._placeGammaInput,bind:this}))),b.tsx("tr",{class:this.classes((k={},k[d.stretchDraBlock]=t!==D,k[d.displayHidden]=t===D,k))},b.tsx("td",{colSpan:4},b.tsx("div",{class:d.checkbox,afterCreate:this._placeStretchStatisticsCheckbox,bind:this}),b.tsx("label",null,f.draStatisticsTitle))))));x=b.tsx("div",
{class:this.classes((y={},y[d.displayBlock]=m===p,y[d.displayHidden]=m!==p,y))},b.tsx("div",{afterCreate:this._createBandCombinationTitlePane,bind:this},b.tsx("table",{class:d.table},b.tsx("tr",{class:this.classes((l={},l[d.stdDeviationOptionsRow]=this._supportsBandPresets,l[d.displayHidden]=!this._supportsBandPresets,l))},b.tsx("td",null,b.tsx("label",null,f.bandCombinationPresetLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBandCombinationPresetSelect,bind:this}))),b.tsx("tr",null,
b.tsx("td",null,b.tsx("label",null,f.redBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeRedBandSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.greenBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeGreenBandSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.blueBandTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeBlueBandSelect,bind:this}))))));y=b.tsx("div",{class:this.classes((z={},z[d.displayBlock]=m===v,
z[d.displayHidden]=m!==v,z))},b.tsx("table",{class:d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.valueFieldTitle)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueFieldSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueColorSchemeSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeUniqueValueNoDataInput,
bind:this})))),b.tsx("div",{afterCreate:this._placeUniqueValuesGrid,bind:this}));z=b.tsx("div",{class:this.classes((A={},A[d.displayBlock]=m===w,A[d.displayHidden]=m!==w,A))},b.tsx("table",{class:d.table},b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.colorSchemeLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteColorSchemeSelect,bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.numberOfColors)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteNColorsInput,
bind:this}))),b.tsx("tr",null,b.tsx("td",null,b.tsx("label",null,f.noDataLabel)),b.tsx("td",null,b.tsx("div",{afterCreate:this._placeDiscreteNoDataInput,bind:this})))));return b.tsx("div",null,g,B,x,a,r,y,z)};c.prototype._createUIComponents=function(){this._createSymbologySelect();this._createStretchStatisticsCheckbox();this._createBandSelect();this._createStretchTypeSelect();this._createColorRampSelect();this._createBandCombinationPresetSelect();this._createRedBandSelect();this._createGreenBandSelect();
this._createBlueBandSelect();this._createNoDataInput();this._createMinPercentInput();this._createMaxPercentInput();this._createStandardDeviationsInput();this._createGammaInput();this._createUniqueValueFieldSelect();this._createUniqueValueColorSchemeSelect();this._createUniqueValueNoDataInput();this._createUniqueValuesGrid();this._createDiscreteColorSchemeSelect();this._createDiscreteNoDataInput();this._createDiscreteNColorsInput()};c.prototype._createSymbologySelect=function(){var a=this;this._symbologySelect=
new h({store:this._getSymbologyStore(),class:d.filteringSelect,labelAttr:"label",labelType:"html",onChange:function(b){return a._updateSymbologyType(b)},value:this.defaultParams.symbologyType});this._symbologySelect.startup();this._components.push(this._symbologySelect)};c.prototype._createStretchStatisticsCheckbox=function(){var a=this;this._stretchStatisticsCheckBox=new H({onChange:function(){return a._updateSymbology()}});this._stretchStatisticsCheckBox.startup();this._components.push(this._stretchStatisticsCheckBox)};
c.prototype._createColorSchemeTitlePane=function(a){this._colorSchemeTitlePane=new p({title:f.colorRampTitle},a);this._colorSchemeTitlePane.startup();this._components.push(this._colorSchemeTitlePane)};c.prototype._createNoDataTitlePane=function(a){this._noDataTitlePane=new p({title:f.backgroundTitle},a);this._noDataTitlePane.startup();this._components.push(this._noDataTitlePane)};c.prototype._createStretchTitlePane=function(a){this._stretchTitlePane=new p({title:f.stretchTitle},a);this._stretchTitlePane.startup();
this._components.push(this._stretchTitlePane)};c.prototype._createBandCombinationTitlePane=function(a){this._bandCombinationTitlePane=new p({title:f.bandCombinationTitle},a);this._bandCombinationTitlePane.startup();this._components.push(this._bandCombinationTitlePane)};c.prototype._createBandSelect=function(){var a=this;this._bandSelect=new h({class:d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._bandSelect.startup();this._populateBandSelect();this._components.push(this._bandSelect)};
c.prototype._createStretchTypeSelect=function(){var a=this;this._stretchTypeSelect=new h({class:d.filteringSelect,onChange:function(b){return a._onStretchTypeChange(b)},labelAttr:"label",labelType:"html"});this._stretchTypeSelect.startup();this._populateStretchTypeSelect();this._components.push(this._stretchTypeSelect)};c.prototype._createColorRampSelect=function(){var a=this;this._stretchColorRampSelect=new v({class:d.filteringSelect,maxHeight:300});this._stretchColorRampSelect.on("change",function(){return a._updateSymbology()});
this._stretchColorRampSelect.startup();this._stretchColorRampSelect.set("value",this.defaultParams.colorRamp);this._components.push(this._stretchColorRampSelect)};c.prototype._createBandCombinationPresetSelect=function(){var a=this;this._bandCombinationPresetSelect=new h({class:d.filteringSelect,onChange:function(b){return a._updateBandCombination(b)},labelType:"html",labelAttr:"label",maxHeight:350});this._bandCombinationPresetSelect.startup();this._components.push(this._bandCombinationPresetSelect)};
c.prototype._createRedBandSelect=function(){var a=this;this._redBandSelect=new h({class:d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._redBandSelect.startup();this._populateBandLists();this._components.push(this._redBandSelect)};c.prototype._createGreenBandSelect=function(){var a=this;this._greenBandSelect=new h({class:d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._greenBandSelect.startup();this._populateBandLists();this._components.push(this._greenBandSelect)};
c.prototype._createBlueBandSelect=function(){var a=this;this._blueBandSelect=new h({class:d.filteringSelect,onChange:function(){return a._bandCombinationChanged()}});this._blueBandSelect.startup();this._populateBandLists();this._components.push(this._blueBandSelect)};c.prototype._createNoDataInput=function(){var a=this;this._noDataInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._noDataInput.startup();this._components.push(this._noDataInput)};c.prototype._createMinPercentInput=
function(){var a=this;this._minPercentInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.minPercent});this._minPercentInput.startup();this._components.push(this._minPercentInput)};c.prototype._createMaxPercentInput=function(){var a=this;this._maxPercentInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.maxPercent});this._maxPercentInput.startup();this._components.push(this._maxPercentInput)};
c.prototype._createStandardDeviationsInput=function(){var a=this;this._standardDeviationsInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.numberOfStandardDeviations});this._standardDeviationsInput.startup();this._components.push(this._standardDeviationsInput)};c.prototype._createGammaInput=function(){var a=this;this._gammaInput=new I({class:d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.gamma,
smallDelta:.1});this._gammaInput.startup();this._components.push(this._gammaInput)};c.prototype._createUniqueValueFieldSelect=function(){var a=this;this._uniqueValueFieldSelect=new h({class:d.filteringSelect,onChange:function(){return a._updateUniqueValueGrid()}});this._populateUniqueValueFieldSelect();this._components.push(this._uniqueValueFieldSelect)};c.prototype._createUniqueValueColorSchemeSelect=function(){var a=this;this._uniqueValueColorSchemeSelect=new v({class:d.filteringSelect,maxHeight:300});
this._uniqueValueColorSchemeSelect.on("change",function(){return a._updateUniqueValueGrid()});this._uniqueValueColorSchemeSelect.startup();this.defaultParams.uniqueValuesColorRamp&&(this.defaultParams.uniqueValuesColorRamp.name=f.uniqueValuesColorRampTitle,this._uniqueValueColorSchemeSelect.addColorRamp(this.defaultParams.uniqueValuesColorRamp,!0));this._components.push(this._uniqueValueColorSchemeSelect)};c.prototype._createUniqueValueNoDataInput=function(){var a=this;this._uniqueValueNoDataInput=
new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._components.push(this._uniqueValueNoDataInput);this._uniqueValueNoDataInput.startup()};c.prototype._createDiscreteColorSchemeSelect=function(){var a=this;this._discreteColorSchemeSelect=new v({class:d.filteringSelect,maxHeight:300});this._discreteColorSchemeSelect.on("change",function(){a._updateSymbology()});this._discreteColorSchemeSelect.startup();this._discreteColorSchemeSelect.set("value",this.defaultParams.colorRamp);
this._components.push(this._discreteColorSchemeSelect)};c.prototype._createDiscreteNoDataInput=function(){var a=this;this._discreteNoDataInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()}});this._discreteNoDataInput.startup();this._components.push(this._discreteNoDataInput)};c.prototype._createDiscreteNColorsInput=function(){var a=this;this._discreteNColorsInput=new k({class:d.filteringSelect,onChange:function(){return a._updateSymbology()},value:this.defaultParams.discreteNColors});
this._discreteNColorsInput.startup();this._components.push(this._discreteNColorsInput)};c.prototype._createUniqueValuesGrid=function(){this._uniqueValuesGrid=new G({columns:[{field:"esriRasterSymbologyEditorUniqueValueSymbol",renderCell:function(a,b,c){c.innerHTML="\x3cdiv class \x3d "+d.dgridSymbolCell+'\n          style \x3d "background: rgb( '+a.esriRasterSymbologyEditorUniqueValueSymbol.r+",\n          "+a.esriRasterSymbologyEditorUniqueValueSymbol.g+",\n          "+a.esriRasterSymbologyEditorUniqueValueSymbol.b+
'");\x3e\x3c/div\x3e'},label:f.symbolLabel},{field:"esriRasterSymbologyEditorUniqueValueValue",label:f.valueLabel}]});this._uniqueValuesGrid.startup();this._components.push(this._uniqueValuesGrid)};c.prototype._placeSymbologySelect=function(a){this._symbologySelect&&e.place(this._symbologySelect.domNode,a)};c.prototype._placeStretchStatisticsCheckbox=function(a){this._stretchStatisticsCheckBox&&e.place(this._stretchStatisticsCheckBox.domNode,a)};c.prototype._placeBandSelect=function(a){this._bandSelect&&
e.place(this._bandSelect.domNode,a)};c.prototype._placeStretchTypeSelect=function(a){this._stretchTypeSelect&&e.place(this._stretchTypeSelect.domNode,a)};c.prototype._placeColorRampSelect=function(a){this._stretchColorRampSelect&&e.place(this._stretchColorRampSelect.domNode,a)};c.prototype._placeBandCombinationPresetSelect=function(a){this._bandCombinationPresetSelect&&e.place(this._bandCombinationPresetSelect.domNode,a)};c.prototype._placeRedBandSelect=function(a){this._redBandSelect&&e.place(this._redBandSelect.domNode,
a)};c.prototype._placeGreenBandSelect=function(a){this._colorSchemeTitlePane&&e.place(this._greenBandSelect.domNode,a)};c.prototype._placeBlueBandSelect=function(a){this._blueBandSelect&&e.place(this._blueBandSelect.domNode,a)};c.prototype._placeNoDataInput=function(a){this._noDataInput&&e.place(this._noDataInput.domNode,a)};c.prototype._placeMinPercentInput=function(a){this._minPercentInput&&e.place(this._minPercentInput.domNode,a)};c.prototype._placeMaxPercentInput=function(a){this._maxPercentInput&&
e.place(this._maxPercentInput.domNode,a)};c.prototype._placeStandardDeviationsInput=function(a){this._standardDeviationsInput&&e.place(this._standardDeviationsInput.domNode,a)};c.prototype._placeGammaInput=function(a){this._gammaInput&&e.place(this._gammaInput.domNode,a)};c.prototype._placeUniqueValueFieldSelect=function(a){this._uniqueValueFieldSelect&&e.place(this._uniqueValueFieldSelect.domNode,a)};c.prototype._placeUniqueValueColorSchemeSelect=function(a){this._uniqueValueColorSchemeSelect&&e.place(this._uniqueValueColorSchemeSelect.domNode,
a)};c.prototype._placeUniqueValueNoDataInput=function(a){this._uniqueValueNoDataInput&&e.place(this._uniqueValueNoDataInput.domNode,a)};c.prototype._placeUniqueValuesGrid=function(a){this._uniqueValuesGrid&&e.place(this._uniqueValuesGrid.domNode,a)};c.prototype._placeDiscreteColorSchemeSelect=function(a){this._discreteColorSchemeSelect&&e.place(this._discreteColorSchemeSelect.domNode,a)};c.prototype._placeDiscreteNoDataInput=function(a){this._discreteNoDataInput&&e.place(this._discreteNoDataInput.domNode,
a)};c.prototype._placeDiscreteNColorsInput=function(a){this._discreteNColorsInput&&e.place(this._discreteNColorsInput.domNode,a)};c.prototype._bandCombinationChanged=function(){this._redBandSelect&&this._redBandSelect.validate()&&this._greenBandSelect&&this._greenBandSelect.validate()&&this._blueBandSelect&&this._blueBandSelect.validate()&&this._updateSymbology()};c.prototype._updateBandCombination=function(a){if("custom"===a)this._redBandSelect.set("disabled",!1),this._greenBandSelect.set("disabled",
!1),this._blueBandSelect.set("disabled",!1);else{var b;this._bandCombinationPresetSelect.store.data.some(function(c){a===c.id&&(b=c.combination)});b&&(this._redBandSelect.set({value:b[0]-1,disabled:!0}),this._greenBandSelect.set({value:b[1]-1,disabled:!0}),this._blueBandSelect.set({value:b[2]-1,disabled:!0}),this._updateSymbology())}};c.prototype._updateSymbologyType=function(a){this.symbologyType=a;this._updateSymbology()};c.prototype._updateUniqueValueGrid=function(){var a=this.viewModel.getUniqueValueGridData(this._uniqueValueColorSchemeSelect.colorRamp,
this._uniqueValueFieldSelect.value);a&&(this._uniqueValuesGrid.refresh(),this._uniqueValuesGrid.renderArray(a),this._uniqueValuesSymbolData=a,this._updateSymbology())};c.prototype._populateUniqueValueFieldSelect=function(){var a=this.viewModel.getUniqueValueFields(),a=new n({data:a,idProperty:"name"});this._uniqueValueFieldSelect.set({store:a,labelAttr:"alias",value:this.defaultParams.uniqueValuesField})};c.prototype._populateStretchTypeSelect=function(){var a,b,c,e=J.clone(this.viewModel.stretchTypes);
e.forEach(function(e){a=f[e.name+"StretchTypeDescription"]||f[e.name+"TypeDescription"];c=d[e.name+"StretchTypeIcon"];b=f[e.name+"StretchTitle"];e.id=e.filterType.toString();e.label="\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n        \x3ch4\x3e"+b+"\x3c/h4\x3e\n        \x3ctable\x3e\x3ctr\x3e\n          \x3ctd class\x3d"+d.menuItemTd+'\x3e\n            \x3cimg class\x3d"'+c+" "+d.thumbnailImage+'" /\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d'+d.menuItemTd+"\x3e\n            \x3cp class\x3d"+
d.menuItemText+"\x3e\x3ci\x3e"+a+"\x3c/i\x3e\x3c/p\x3e\n          \x3c/td\x3e\n          \x3c/tr\x3e\x3c/table\x3e\n        \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e";e.name=b});this._stretchTypeSelect.set({store:new n({data:e}),value:this.defaultParams.stretchType.toString(),labelAttr:"label",labelType:"html"})};c.prototype._populateBandSelect=function(){var a=this,b;this.viewModel.getBandData().then(function(c){b=new n({data:c.lists[0],idProperty:"index"});a._bandSelect.set("store",b);1===c.lists[0].length&&
a._bandSelect.set({value:c.lists[0][0].index,disabled:!0})})};c.prototype._populateBandLists=function(){var a=this;if(this._redBandSelect&&this._greenBandSelect&&this._blueBandSelect&&this._bandCombinationPresetSelect){var b=[this._redBandSelect,this._greenBandSelect,this._blueBandSelect],c=[],e,r,g,h,k,l,p;this.viewModel.getBandData().then(function(q){q.lists.forEach(function(a,c){a.some(function(a){if(a.selected)return r=a.index,!0});g=new n({data:a,idProperty:"index"});b[c].set({store:g,value:r})});
q.presets&&q.presets.length?(a._supportsBandPresets=!0,q.presets.forEach(function(a,b){e=Object.keys(a)[0];k=f["bandComboName"+e];l=f["bandComboDesc"+e];p=d["bandCombinationPreset"+e+"Icon"];c.push({name:f["bandComboName"+e],label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n              \x3ch4\x3e"+k+"\x3c/h4\x3e\n              \x3ctable\x3e\x3ctr\x3e\n                \x3ctd class\x3d"+d.menuItemTd+'\x3e\n                  \x3cimg class\x3d "'+p+" "+d.thumbnailImage+'" /\x3e\n                \x3c/td\x3e\n                \x3ctd class\x3d'+
d.menuItemTd+"\x3e\n                  \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+l+"\x3c/i\x3e\x3c/p\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\x3c/table\x3e\n            \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e",combination:a[e],id:e})}),c.push({name:f.bandComboNameCustom,combination:null,id:"custom",label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n            \x3ch4\x3e "+f.bandComboNameCustom+":\x3c/h4\x3e\n            \x3ctable cellspacing\x3d'5'\x3e\n              \x3ctr\x3e\n                \x3ctd class\x3d"+
d.menuItemTd+"\x3e\n                  \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+f.bandComboNameCustom+"\x3c/i\x3e\x3c/p\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\n            \x3c/table\x3e\n          \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e"}),h=new n({data:c}),a._bandCombinationPresetSelect.set({store:h,value:"custom"})):a._supportsBandPresets=!1;a.scheduleRender()})}};c.prototype._onStretchTypeChange=function(a){var b;this._stretchTypeSelect.store.data.forEach(function(c){c.id===
a&&(b=c.filterType)});this.stretchType=b;this.scheduleRender();this._updateSymbology()};c.prototype._updateSymbology=function(){if(this._symbologySelect&&this._stretchTypeSelect&&this._stretchColorRampSelect&&this._noDataInput&&this._minPercentInput&&this._maxPercentInput&&this._stretchTypeSelect&&this._gammaInput&&this._standardDeviationsInput){var a=this._getProperties();this.viewModel.updateRendering(a)}};c.prototype._getProperties=function(){var a={};a.symbologyType=this._symbologySelect.value;
a.stretchType=this.stretchType;a.minPercent=this._minPercentInput.value;a.maxPercent=this._maxPercentInput.value;a.numberOfStandardDeviations=this._standardDeviationsInput.value;a.noData=this.symbologyType===u.SymbologyTypes.uniqueValue?this._uniqueValueNoDataInput.value:this.symbologyType===u.SymbologyTypes.discrete?this._discreteNoDataInput.value:this._noDataInput.value;a.gamma=this._gammaInput.value;a.colorRampName=this._stretchColorRampSelect.colorRampName;a.dra=this._stretchStatisticsCheckBox.checked;
a.selectedBand=this._bandSelect.value;a.bandIds=[this._redBandSelect.value,this._greenBandSelect.value,this._blueBandSelect.value];a.uniqueValuesColorRamp=this._uniqueValueColorSchemeSelect.colorRamp;a.uniqueValuesSymbolData=this._uniqueValuesSymbolData;a.discreteColorRamp=this._discreteColorSchemeSelect.colorRamp;a.discreteNColors=this._discreteNColorsInput.value;return a};c.prototype._getSymbologyStore=function(){var a=[],b,c,e;this.viewModel.getSymbologyTypes().forEach(function(g){b=f[g+"Title"];
c=f[g+"Description"]||f[g+"Title"];e=d[g+"SymbologyTypeIcon"];a.push({id:g,name:b,label:"\x3chtml\x3e\x3cbody\x3e\x3csection\x3e\n          \x3ch4\x3e"+b+"\x3c/h4\x3e\n          \x3ctable\x3e\x3ctr\x3e\n            \x3ctd class\x3d"+d.menuItemTd+"\x3e\x3cimg class\x3d "+e+" /\x3e\x3c/td\x3e\n            \x3ctd class\x3d"+d.menuItemTd+"\x3e\n              \x3cp class\x3d"+d.menuItemText+"\x3e\x3ci\x3e"+c+"\x3c/i\x3e\x3c/p\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\x3c/table\x3e\n        \x3c/section\x3e\x3c/body\x3e\x3c/html\x3e"})},
this);return new n({data:a})};g([l.property(),b.renderable()],c.prototype,"layer",void 0);g([l.property()],c.prototype,"defaultParams",void 0);g([l.property({type:u})],c.prototype,"viewModel",void 0);g([l.property(),b.renderable()],c.prototype,"stretchType",void 0);g([l.property(),b.renderable()],c.prototype,"symbologyType",void 0);return c=g([l.subclass("esri.widgets.RasterSymbologyEditor")],c)}(l.declared(K))});
//>>built
define("dojo/_base/declare dojo/dom dijit/registry dojo/_base/connect dojo/_base/array dojo/query".split(" "),function(d,e,b,c,f,g){function h(a){return/^(ltr|rtl|auto)$/.test(a)?a:null}return d(null,{postMixInProperties:function(){if(this.chart)this.textDir=this.chart.textDir,c.connect(this.chart,"setTextDir",this,"_setTextDirAttr");else if(this.chartRef){var a=b.byId(this.chartRef);if(!a)if(a=e.byId(this.chartRef))a=b.byNode(a);else return;this.textDir=a.textDir;c.connect(a,"setTextDir",this,"_setTextDirAttr")}},
_setTextDirAttr:function(a){null!=h(a)&&this.textDir!=a&&(this._set("textDir",a),a=g(".dojoxLegendText",this._tr),f.forEach(a,function(a){a.dir=this.getTextDir(a.innerHTML,a.dir)},this))}})});
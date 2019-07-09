// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../Color ../core/kebabDictionary ../core/lang ../core/accessorSupport/decorators ./FillSymbol".split(" "),function(r,t,h,c,k,l,m,n,d,p){var e=m({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"}),
q={outline:{type:"simple-line"}};return function(g){function a(b,a,d){b=g.call(this,b)||this;b.color=new l([0,0,0,.25]);b.type="simple-fill";b.style="solid";return b}h(a,g);f=a;a.prototype.getDefaults=function(){return k({},this.inherited(arguments),q)};a.prototype.normalizeCtorArgs=function(b,a,d){if(b&&"string"!==typeof b)return b;var c={};b&&(c.style=b);a&&(c.outline=a);d&&(c.color=d);return c};a.prototype.clone=function(){return new f({color:n.clone(this.color),outline:this.outline&&this.outline.clone(),
style:this.style})};var f;c([d.property()],a.prototype,"color",void 0);c([d.enumeration.serializable()({esriSFS:"simple-fill"})],a.prototype,"type",void 0);c([d.property({type:e.apiValues,json:{read:e.read,write:e.write}})],a.prototype,"style",void 0);return a=f=c([d.subclass("esri.symbols.SimpleFillSymbol")],a)}(d.declared(p))});
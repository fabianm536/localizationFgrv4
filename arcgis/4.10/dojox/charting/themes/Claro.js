//>>built
define(["../Theme","dojox/gfx/gradutils","./common"],function(d,h,b){var e=d.generateGradient,f={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};b.Claro=new d({chart:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]},stroke:{color:"#b5bcc7"}},plotarea:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]}},axis:{stroke:{color:"#888c76",width:1},tick:{color:"#888c76",position:"center",font:"normal normal normal 7pt Verdana, Arial, sans-serif",
fontColor:"#888c76"}},series:{stroke:{width:2.5,color:"#fff"},outline:null,font:"normal normal normal 7pt Verdana, Arial, sans-serif",fontColor:"#131313"},marker:{stroke:{width:1.25,color:"#131313"},outline:{width:1.25,color:"#131313"},font:"normal normal normal 8pt Verdana, Arial, sans-serif",fontColor:"#131313"},seriesThemes:[{fill:e(f,"#2a6ead","#3a99f2")},{fill:e(f,"#613e04","#996106")},{fill:e(f,"#0e3961","#155896")},{fill:e(f,"#55aafa","#3f7fba")},{fill:e(f,"#ad7b2a","#db9b35")}],markerThemes:[{fill:"#2a6ead",
stroke:{color:"#fff"}},{fill:"#613e04",stroke:{color:"#fff"}},{fill:"#0e3961",stroke:{color:"#fff"}},{fill:"#55aafa",stroke:{color:"#fff"}},{fill:"#ad7b2a",stroke:{color:"#fff"}}]});b.Claro.next=function(c,e,f){var g="line"==c,a;if(g||"area"==c){a=this.seriesThemes[this._current%this.seriesThemes.length];var b=this.markerThemes[this._current%this.markerThemes.length];a.fill.space="plot";g&&(a.stroke={width:4,color:a.fill.colors[0].color});b.outline={width:1.25,color:b.fill};g=d.prototype.next.apply(this,
arguments);delete a.outline;delete a.stroke;a.fill.space="shape";return g}return"candlestick"==c?(a=this.seriesThemes[this._current%this.seriesThemes.length],a.fill.space="plot",a.stroke={width:1,color:a.fill.colors[0].color},g=d.prototype.next.apply(this,arguments)):d.prototype.next.apply(this,arguments)};b.Claro.post=function(c,b){c=d.prototype.post.apply(this,arguments);"slice"!=b&&"circle"!=b||!c.series.fill||"radial"!=c.series.fill.type||(c.series.fill=h.reverse(c.series.fill));return c};return b.Claro});
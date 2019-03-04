// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/gl-matrix ../../viewpointUtils".split(" "),function(n,p,l,e,m,c,d,f){var g=d.vec2f64.create(),k=d.vec2f64.create();return function(h){function a(){var b=null!==h&&h.apply(this,arguments)||this;b._previousCenter=d.vec2f64.create();b.viewpoint=f.create();return b}l(a,h);a.prototype.begin=
function(b,a){this.navigation.begin();d.vec2.set(this._previousCenter,a.center.x,a.center.y)};a.prototype.update=function(a,c){var b=a.state,e=b.size,b=b.padding;d.vec2.set(g,c.center.x,c.center.y);f.getAnchor(k,e,b);a.viewpoint=f.rotateBy(this.viewpoint,a.content.viewpoint,f.angleBetween(k,this._previousCenter,g));d.vec2.copy(this._previousCenter,g)};a.prototype.end=function(a,c){this.navigation.end()};e([c.property()],a.prototype,"viewpoint",void 0);e([c.property()],a.prototype,"navigation",void 0);
return a=e([c.subclass("esri.views.2d.actions.Rotate")],a)}(c.declared(m))});
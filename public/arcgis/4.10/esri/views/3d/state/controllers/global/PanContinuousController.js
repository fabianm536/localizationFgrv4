// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/gl-matrix ../../../camera/constraintUtils ../CameraController ../../../support/earthUtils ../../../support/mathUtils".split(" "),function(h,c,l,d,m,n,f,k){Object.defineProperty(c,"__esModule",{value:!0});c.Direction={LEFT:1,RIGHT:2,FORWARD:4,BACKWARD:8,UP:16,DOWN:32};h=function(g){function e(b){var a=g.call(this)||this;a.view=b;a.directionStatus=0;a.direction=d.vec3f64.create();a.tmpAxis=d.vec3f64.create();
a.radiusChange=0;a.velocity=0;a.tmpP1=d.vec3f64.create();a.tmpTransf=d.mat4f64.create();return a}l(e,g);Object.defineProperty(e.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0});e.prototype.addDirection=function(b){0===this.directionStatus&&d.vec3.set(this.direction,0,0,0);this.directionStatus&b||(this.directionStatus|=b,b&(c.Direction.LEFT|c.Direction.RIGHT|c.Direction.FORWARD|c.Direction.BACKWARD)?(this.computePanAxis(b,this.tmpAxis),d.vec3.add(this.direction,this.direction,
this.tmpAxis)):(b=this.directionStatus&(c.Direction.UP|c.Direction.DOWN),this.radiusChange=b===c.Direction.UP?1:b===c.Direction.DOWN?-1:0),this.velocity=this.computePanVelocity())};e.prototype.removeDirection=function(b){this.directionStatus&=~b;0===this.directionStatus&&this.active?this.finishController():b&(c.Direction.LEFT|c.Direction.RIGHT|c.Direction.FORWARD|c.Direction.BACKWARD)?(this.computePanAxis(b,this.tmpAxis),d.vec3.subtract(this.direction,this.direction,this.tmpAxis),.01>d.vec3.length(this.direction)&&
d.vec3.set(this.direction,0,0,0)):(b=this.directionStatus&(c.Direction.UP|c.Direction.DOWN),this.radiusChange=b===c.Direction.UP?1:b===c.Direction.DOWN?-1:0)};e.prototype.stepController=function(b,a){g.prototype.stepController.call(this,b,a);b*=this.velocity;var c=!1;if(0<Math.abs(this.radiusChange)){var c=1+b*this.radiusChange,e=a.viewForward,f=d.vec3.normalize(this.tmpP1,a.center);(-.999<d.vec3.dot(e,f)||0>this.radiusChange)&&d.vec3.scale(a.center,a.center,c);d.vec3.scale(a.eye,a.eye,c);this.velocity=
this.computePanVelocity();c=!0}.01<d.vec3.squaredLength(this.direction)&&(d.mat4.identity(this.tmpTransf),d.mat4.rotate(this.tmpTransf,this.tmpTransf,b,this.direction),d.vec3.transformMat4(a.eye,a.eye,this.tmpTransf),d.vec3.transformMat4(a.center,a.center,this.tmpTransf),d.vec3.transformMat4(a.up,a.up,this.tmpTransf),c=!0);c&&m.applyAll(this.view,a,{selection:14,interactionType:4,interactionStartCamera:this.view.state.camera,interactionFactor:null,interactionDirection:null,tiltMode:0})};e.prototype.computePanAxis=
function(b,a){var e=this.view.state.camera;d.vec3.subtract(a,e.center,e.eye);d.vec3.cross(a,a,e.up);if(b===c.Direction.LEFT||b===c.Direction.RIGHT)d.vec3.normalize(a,a),d.vec3.cross(a,a,e.center);b!==c.Direction.RIGHT&&b!==c.Direction.FORWARD||d.vec3.negate(a,a);d.vec3.normalize(a,a)};e.prototype.computePanVelocity=function(){var b=.5*Math.abs(d.vec3.length(this.view.state.camera.eye)-f.earthRadius),b=k.clamp(b,1,2*f.earthRadius);return k.acos(1-b*b/(2*f.earthRadius*f.earthRadius))};return e}(n.CameraController);
c.PanContinuousController=h});
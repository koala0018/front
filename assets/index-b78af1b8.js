import{q as _,s as l,t as C,v as q,x as v,y as U,z as H,A as x,B as T,C as G,D as M,E as O,G as R,H as j,I as J,J as K,K as Q,L as S,V as b,M as W,O as z,P as $,Q as N,R as X,S as Y,T as I,U as k}from"./index-43e1b317.js";function Z(e){const i=e.initialPosition,{dx:t,dy:s}=_(i,e.position),n=Math.abs(t),a=Math.abs(s),{maxDistance:o}=e.retina,r=o.horizontal,h=o.vertical;if(!(!r&&!h)){if((r&&n>=r||h&&a>=h)&&!e.misplaced)e.misplaced=!!r&&n>r||!!h&&a>h,r&&(e.velocity.x=e.velocity.y/2-e.velocity.x),h&&(e.velocity.y=e.velocity.x/2-e.velocity.y);else if((!r||n<r)&&(!h||a<h)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){const u=e.position,d=e.velocity;r&&(u.x<i.x&&d.x<0||u.x>i.x&&d.x>0)&&(d.x*=-l()),h&&(u.y<i.y&&d.y<0||u.y>i.y&&d.y>0)&&(d.y*=-l())}}}function V(e,i,t,s,n,a){ti(e,a);const o=e.gravity,r=o!=null&&o.enable&&o.inverse?-1:1;n&&t&&(e.velocity.x+=n*a.factor/(60*t)),o!=null&&o.enable&&t&&(e.velocity.y+=r*(o.acceleration*a.factor)/(60*t));const h=e.moveDecay;e.velocity.multTo(h);const u=e.velocity.mult(t);o!=null&&o.enable&&s>0&&(!o.inverse&&u.y>=0&&u.y>=s||o.inverse&&u.y<=0&&u.y<=-s)&&(u.y=r*s,t&&(e.velocity.y=u.y/t));const d=e.options.zIndex,c=(1-e.zIndexFactor)**d.velocityRate;u.multTo(c);const{position:f}=e;f.addTo(u),i.vibrate&&(f.x+=Math.sin(f.x*Math.cos(f.y)),f.y+=Math.cos(f.y*Math.sin(f.x)))}function ii(e,i){const t=e.container;if(!e.spin)return;const s={x:e.spin.direction==="clockwise"?Math.cos:Math.sin,y:e.spin.direction==="clockwise"?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*s.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*s.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;const n=Math.max(t.canvas.size.width,t.canvas.size.height);e.spin.radius>n/2?(e.spin.radius=n/2,e.spin.acceleration*=-1):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-1),e.spin.angle+=i/100*(1-e.spin.radius/n)}function ti(e,i){var o;const t=e.options,s=t.move.path;if(!s.enable)return;if(e.lastPathTime<=e.pathDelay){e.lastPathTime+=i.value;return}const a=(o=e.pathGenerator)==null?void 0:o.generate(e,i);a&&e.velocity.addTo(a),s.clamp&&(e.velocity.x=C(e.velocity.x,-1,1),e.velocity.y=C(e.velocity.y,-1,1)),e.lastPathTime-=e.pathDelay}function ei(e){return e.slow.inRange?e.slow.factor:1}const si=2;class ni{constructor(){this._initSpin=i=>{const t=i.container,s=i.options,n=s.move.spin;if(!n.enable)return;const a=n.position??{x:50,y:50},o={x:a.x/100*t.canvas.size.width,y:a.y/100*t.canvas.size.height},r=i.getPosition(),h=q(r,o),u=v(n.acceleration);i.retina.spinAcceleration=u*t.retina.pixelRatio,i.spin={center:o,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:h,acceleration:i.retina.spinAcceleration}}}init(i){const t=i.options,s=t.move.gravity;i.gravity={enable:s.enable,acceleration:v(s.acceleration),inverse:s.inverse},this._initSpin(i)}isEnabled(i){return!i.destroyed&&i.options.move.enable}move(i,t){var m,p;const s=i.options,n=s.move;if(!n.enable)return;const a=i.container,o=a.retina.pixelRatio,r=ei(i),h=((m=i.retina).moveSpeed??(m.moveSpeed=v(n.speed)*o))*a.retina.reduceFactor,u=(p=i.retina).moveDrift??(p.moveDrift=v(i.options.move.drift)*o),d=U(s.size.value)*o,c=n.size?i.getRadius()/d:1,f=h*c*r*(t.factor||1)/si,y=i.retina.maxSpeed??a.retina.maxSpeed;n.spin.enable?ii(i,f):V(i,n,f,y,u,t),Z(i)}}async function oi(e,i=!0){await e.addMover("base",()=>new ni,i)}class ai{draw(i,t,s){t.circleRange||(t.circleRange={min:0,max:Math.PI*2});const n=t.circleRange;i.arc(0,0,s,n.min,n.max,!1)}getSidesCount(){return 12}particleInit(i,t){const s=t.shapeData,n=(s==null?void 0:s.angle)??{max:360,min:0};t.circleRange=H(n)?{min:n.min*Math.PI/180,max:n.max*Math.PI/180}:{min:0,max:n*Math.PI/180}}}async function ri(e,i=!0){await e.addShape("circle",new ai,i)}function E(e,i,t,s,n){if(!i||!t.enable||(i.maxLoops??0)>0&&(i.loops??0)>(i.maxLoops??0)||(i.time||(i.time=0),(i.delayTime??0)>0&&i.time<(i.delayTime??0)&&(i.time+=e.value),(i.delayTime??0)>0&&i.time<(i.delayTime??0)))return;const a=x(t.offset),o=(i.velocity??0)*e.factor+a*3.6,r=i.decay??1;!n||i.status==="increasing"?(i.value+=o,i.value>s&&(i.loops||(i.loops=0),i.loops++,n&&(i.status="decreasing",i.value-=i.value%s))):(i.value-=o,i.value<0&&(i.loops||(i.loops=0),i.loops++,i.status="increasing",i.value+=i.value)),i.velocity&&r!==1&&(i.velocity*=r),i.value>s&&(i.value%=s)}function hi(e,i){const{h:t,s,l:n}=e.options.color.animation,{color:a}=e;if(!a)return;const{h:o,s:r,l:h}=a;o&&E(i,o,t,360,!1),r&&E(i,r,s,100,!0),h&&E(i,h,n,100,!0)}class ui{constructor(i){this.container=i}init(i){const t=T(i.options.color,i.id,i.options.reduceDuplicates);t&&(i.color=G(t,i.options.color.animation,this.container.retina.reduceFactor))}isEnabled(i){const{h:t,s,l:n}=i.options.color.animation,{color:a}=i;return!i.destroyed&&!i.spawning&&((a==null?void 0:a.h.value)!==void 0&&t.enable||(a==null?void 0:a.s.value)!==void 0&&s.enable||(a==null?void 0:a.l.value)!==void 0&&n.enable)}update(i,t){hi(i,t)}}async function di(e,i=!0){await e.addParticleUpdater("color",t=>new ui(t),i)}class fi{randomPosition(i,t,s){const n=(c,f)=>{const y=l()/4,m=Math.atan(f/c*Math.tan(2*Math.PI*y)),p=l();return p<.25?m:p<.5?Math.PI-m:p<.75?Math.PI+m:-m},a=(c,f,y)=>c*f/Math.sqrt((f*Math.cos(y))**2+(c*Math.sin(y))**2),[o,r]=[t.width/2,t.height/2],h=n(o,r),u=a(o,r,h),d=s?u*Math.sqrt(l()):u;return{x:i.x+d*Math.cos(h),y:i.y+d*Math.sin(h)}}}class ci{constructor(){this.wait=!1}load(i){i&&(i.count!==void 0&&(this.count=i.count),i.delay!==void 0&&(this.delay=i.delay),i.duration!==void 0&&(this.duration=i.duration),i.wait!==void 0&&(this.wait=i.wait))}}class li{constructor(){this.quantity=1,this.delay=.1}load(i){i!==void 0&&(i.quantity!==void 0&&(this.quantity=M(i.quantity)),i.delay!==void 0&&(this.delay=M(i.delay)))}}class B{constructor(){this.mode="percent",this.height=0,this.width=0}load(i){i!==void 0&&(i.mode!==void 0&&(this.mode=i.mode),i.height!==void 0&&(this.height=i.height),i.width!==void 0&&(this.width=i.width))}}class g{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new ci,this.rate=new li,this.shape="square",this.startCount=0}load(i){i&&(i.autoPlay!==void 0&&(this.autoPlay=i.autoPlay),i.size!==void 0&&(this.size||(this.size=new B),this.size.load(i.size)),i.direction!==void 0&&(this.direction=i.direction),this.domId=i.domId,i.fill!==void 0&&(this.fill=i.fill),this.life.load(i.life),this.name=i.name,this.particles=O(i.particles,t=>R({},t)),this.rate.load(i.rate),i.shape!==void 0&&(this.shape=i.shape),i.position!==void 0&&(this.position={},i.position.x!==void 0&&(this.position.x=M(i.position.x)),i.position.y!==void 0&&(this.position.y=M(i.position.y))),i.spawnColor!==void 0&&(this.spawnColor===void 0&&(this.spawnColor=new j),this.spawnColor.load(i.spawnColor)),i.startCount!==void 0&&(this.startCount=i.startCount))}}class mi{constructor(i,t,s,n,a){var r,h;this.emitters=t,this.container=s,this._calcPosition=()=>J({size:this.container.canvas.size,position:this.options.position}),this._destroy=()=>{this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._emit=()=>{if(this._paused)return;const u=v(this.options.rate.quantity);this._emitParticles(u)},this._emitParticles=u=>{var y,m;const d=this.getPosition(),c=this.getSize(),f=K(this._particlesOptions);for(let p=0;p<u;p++){const w=R({},f);if(this.spawnColor){const P=(y=this.options.spawnColor)==null?void 0:y.animation;P&&(this.spawnColor.h=this._setColorAnimation(P.h,this.spawnColor.h,360),this.spawnColor.s=this._setColorAnimation(P.s,this.spawnColor.s,100),this.spawnColor.l=this._setColorAnimation(P.l,this.spawnColor.l,100)),w.color?w.color.value=this.spawnColor:w.color={value:this.spawnColor}}if(!d)return;const L=((m=this._shape)==null?void 0:m.randomPosition(d,c,this.fill))??d;this.container.particles.addParticle(L,w)}},this._prepareToDie=()=>{var d;if(this._paused)return;const u=(d=this.options.life)==null?void 0:d.duration;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&u!==void 0&&u>0&&(this._duration=u*1e3)},this._setColorAnimation=(u,d,c)=>{const f=this.container;if(!u.enable)return d;const y=x(u.offset),m=v(this.options.rate.delay),p=1e3*m/f.retina.reduceFactor,w=v(u.speed??0);return(d+w*f.fpsLimit/p+y*3.6)%c},this._engine=i,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=a,n instanceof g?this.options=n:(this.options=new g,this.options.load(n)),this._spawnDelay=(this.options.life.delay??0)*1e3/this.container.retina.reduceFactor,this.position=this._initialPosition??this._calcPosition(),this.name=this.options.name,this._shape=(r=this._engine.emitterShapeManager)==null?void 0:r.getShape(this.options.shape),this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let o=R({},this.options.particles);o??(o={}),o.move??(o.move={}),(h=o.move).direction??(h.direction=this.options.direction),this.options.spawnColor&&(this.spawnColor=T(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=o,this.size=this.options.size??(()=>{const u=new B;return u.load({height:0,mode:"percent",width:0}),u})(),this._lifeCount=this.options.life.count??-1,this._immortal=this._lifeCount<=0,this._engine.dispatchEvent("emitterCreated",{container:s,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}getPosition(){if(this.options.domId){const i=this.container,t=document.getElementById(this.options.domId);if(t){const s=t.getBoundingClientRect();return{x:(s.x+s.width/2)*i.retina.pixelRatio,y:(s.y+s.height/2)*i.retina.pixelRatio}}}return this.position}getSize(){const i=this.container;if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const s=t.getBoundingClientRect();return{width:s.width*i.retina.pixelRatio,height:s.height*i.retina.pixelRatio}}}return Q(this.size,i.canvas.size)}pause(){this._paused||delete this._emitDelay}play(){if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(this._spawnDelay??0))){if(this._emitDelay===void 0){const i=v(this.options.rate.delay);this._emitDelay=1e3*i/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){const i=this._initialPosition;this.position=i&&S(i,this.container.canvas.size,b.origin)?i:this._calcPosition()}update(i){this._paused||(this._firstSpawn&&(this._firstSpawn=!1,this._currentSpawnDelay=this._spawnDelay??0,this._currentEmitDelay=this._emitDelay??0),this._startParticlesAdded||(this._startParticlesAdded=!0,this._emitParticles(this.options.startCount)),this._duration!==void 0&&(this._currentDuration+=i.value,this._currentDuration>=this._duration&&(this.pause(),this._spawnDelay!==void 0&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal?(this.position=this._calcPosition(),this._spawnDelay=(this.options.life.delay??0)*1e3/this.container.retina.reduceFactor):this._destroy(),this._currentDuration-=this._duration,delete this._duration)),this._spawnDelay!==void 0&&(this._currentSpawnDelay+=i.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),this._emitDelay!==void 0&&(this._currentEmitDelay+=i.value,this._currentEmitDelay>=this._emitDelay&&(this._emit(),this._currentEmitDelay-=this._emitDelay)))}}class yi{constructor(i,t){this.container=t,this._engine=i,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]},t.getEmitter=s=>s===void 0||W(s)?this.array[s||0]:this.array.find(n=>n.name===s),t.addEmitter=(s,n)=>this.addEmitter(s,n),t.removeEmitter=s=>{const n=t.getEmitter(s);n&&this.removeEmitter(n)},t.playEmitter=s=>{const n=t.getEmitter(s);n&&n.externalPlay()},t.pauseEmitter=s=>{const n=t.getEmitter(s);n&&n.externalPause()}}addEmitter(i,t){const s=new g;s.load(i);const n=new mi(this._engine,this,this.container,s,t);return this.array.push(n),n}handleClickMode(i){const t=this.emitters,s=this.interactivityEmitters;if(i!=="emitter")return;let n;if(s&&z(s.value))if(s.value.length>0&&s.random.enable){n=[];const r=[];for(let h=0;h<s.random.count;h++){const u=$(s.value);if(r.includes(u)&&r.length<s.value.length){h--;continue}r.push(u),n.push(N(s.value,u))}}else n=s.value;else n=s==null?void 0:s.value;const a=n??t,o=this.container.interactivity.mouse.clickPosition;O(a,r=>{this.addEmitter(r,o)})}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,!!this.emitters)if(z(this.emitters))for(const i of this.emitters)this.addEmitter(i);else this.addEmitter(this.emitters)}pause(){for(const i of this.array)i.pause()}play(){for(const i of this.array)i.play()}removeEmitter(i){const t=this.array.indexOf(i);t>=0&&this.array.splice(t,1)}resize(){for(const i of this.array)i.resize()}stop(){this.array=[]}update(i){for(const t of this.array)t.update(i)}}const D=new Map;class pi{constructor(i){this._engine=i}addShape(i,t){this.getShape(i)||D.set(i,t)}getShape(i){return D.get(i)}getSupportedShapes(){return D.keys()}}function F(e,i){return e+i*(l()-.5)}class vi{randomPosition(i,t,s){if(s)return{x:F(i.x,t.width),y:F(i.y,t.height)};{const n=t.width/2,a=t.height/2,o=Math.floor(l()*4),r=(l()-.5)*2;switch(o){case 0:return{x:i.x+r*n,y:i.y-a};case 1:return{x:i.x-n,y:i.y+r*a};case 2:return{x:i.x+r*n,y:i.y+a};case 3:default:return{x:i.x+n,y:i.y+r*a}}}}}class gi{constructor(i){this._engine=i,this.id="emitters"}getPlugin(i){return new yi(this._engine,i)}loadOptions(i,t){var n,a;if(!this.needsPlugin(i)&&!this.needsPlugin(t))return;t!=null&&t.emitters&&(i.emitters=O(t.emitters,o=>{const r=new g;return r.load(o),r}));const s=(a=(n=t==null?void 0:t.interactivity)==null?void 0:n.modes)==null?void 0:a.emitters;if(s)if(z(s))i.interactivity.modes.emitters={random:{count:1,enable:!0},value:s.map(o=>{const r=new g;return r.load(o),r})};else{const o=s;if(o.value!==void 0)if(z(o.value))i.interactivity.modes.emitters={random:{count:o.random.count??1,enable:o.random.enable??!1},value:o.value.map(r=>{const h=new g;return h.load(r),h})};else{const r=new g;r.load(o.value),i.interactivity.modes.emitters={random:{count:o.random.count??1,enable:o.random.enable??!1},value:r}}else(i.interactivity.modes.emitters={random:{count:1,enable:!1},value:new g}).value.load(s)}}needsPlugin(i){var s,n,a;if(!i)return!1;const t=i.emitters;return z(t)&&!!t.length||t!==void 0||!!((a=(n=(s=i.interactivity)==null?void 0:s.events)==null?void 0:n.onClick)!=null&&a.mode)&&X("emitter",i.interactivity.events.onClick.mode)}}async function wi(e,i=!0){e.emitterShapeManager||(e.emitterShapeManager=new pi(e)),e.addEmitterShape||(e.addEmitterShape=(s,n)=>{var a;(a=e.emitterShapeManager)==null||a.addShape(s,n)});const t=new gi(e);await e.addPlugin(t,i),e.addEmitterShape("circle",new fi),e.addEmitterShape("square",new vi)}function xi(e,i,t,s){switch(e.options.opacity.animation.destroy){case"max":i>=s&&e.destroy();break;case"min":i<=t&&e.destroy();break}}function bi(e,i){const t=e.opacity;if(e.destroyed||!(t!=null&&t.enable)||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0))return;const s=t.min,n=t.max,a=t.decay??1;if(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),!((t.delayTime??0)>0&&t.time<(t.delayTime??0))){switch(t.status){case"increasing":t.value>=n?(t.status="decreasing",t.loops||(t.loops=0),t.loops++):t.value+=(t.velocity??0)*i.factor;break;case"decreasing":t.value<=s?(t.status="increasing",t.loops||(t.loops=0),t.loops++):t.value-=(t.velocity??0)*i.factor;break}t.velocity&&t.decay!==1&&(t.velocity*=a),xi(e,t.value,s,n),e.destroyed||(t.value=C(t.value,s,n))}}class _i{constructor(i){this.container=i}init(i){const t=i.options.opacity;i.opacity=Y(t,1);const s=t.animation;s.enable&&(i.opacity.velocity=v(s.speed)/100*this.container.retina.reduceFactor,s.sync||(i.opacity.velocity*=l()))}isEnabled(i){return!i.destroyed&&!i.spawning&&!!i.opacity&&i.opacity.enable&&((i.opacity.maxLoops??0)<=0||(i.opacity.maxLoops??0)>0&&(i.opacity.loops??0)<(i.opacity.maxLoops??0))}reset(i){i.opacity&&(i.opacity.time=0,i.opacity.loops=0)}update(i,t){this.isEnabled(i)&&bi(i,t)}}async function zi(e,i=!0){await e.addParticleUpdater("opacity",t=>new _i(t),i)}function Pi(e){if(e.outMode!=="bounce"&&e.outMode!=="bounce-horizontal"&&e.outMode!=="bounceHorizontal"&&e.outMode!=="split")return;e.bounds.right<0?e.particle.position.x=e.size+e.offset.x:e.bounds.left>e.canvasSize.width&&(e.particle.position.x=e.canvasSize.width-e.size-e.offset.x);const i=e.particle.velocity.x;let t=!1;if(e.direction==="right"&&e.bounds.right>=e.canvasSize.width&&i>0||e.direction==="left"&&e.bounds.left<=0&&i<0){const n=I(e.particle.options.bounce.horizontal);e.particle.velocity.x*=-n,t=!0}if(!t)return;const s=e.offset.x+e.size;e.bounds.right>=e.canvasSize.width?e.particle.position.x=e.canvasSize.width-s:e.bounds.left<=0&&(e.particle.position.x=s),e.outMode==="split"&&e.particle.destroy()}function Ci(e){if(e.outMode!=="bounce"&&e.outMode!=="bounce-vertical"&&e.outMode!=="bounceVertical"&&e.outMode!=="split")return;e.bounds.bottom<0?e.particle.position.y=e.size+e.offset.y:e.bounds.top>e.canvasSize.height&&(e.particle.position.y=e.canvasSize.height-e.size-e.offset.y);const i=e.particle.velocity.y;let t=!1;if(e.direction==="bottom"&&e.bounds.bottom>=e.canvasSize.height&&i>0||e.direction==="top"&&e.bounds.top<=0&&i<0){const n=I(e.particle.options.bounce.vertical);e.particle.velocity.y*=-n,t=!0}if(!t)return;const s=e.offset.y+e.size;e.bounds.bottom>=e.canvasSize.height?e.particle.position.y=e.canvasSize.height-s:e.bounds.top<=0&&(e.particle.position.y=s),e.outMode==="split"&&e.particle.destroy()}class Mi{constructor(i){this.container=i,this.modes=["bounce","bounce-vertical","bounce-horizontal","bounceVertical","bounceHorizontal","split"]}update(i,t,s,n){if(!this.modes.includes(n))return;const a=this.container;let o=!1;for(const[,f]of a.plugins)if(f.particleBounce!==void 0&&(o=f.particleBounce(i,s,t)),o)break;if(o)return;const r=i.getPosition(),h=i.offset,u=i.getRadius(),d=k(r,u),c=a.canvas.size;Pi({particle:i,outMode:n,direction:t,bounds:d,canvasSize:c,offset:h,size:u}),Ci({particle:i,outMode:n,direction:t,bounds:d,canvasSize:c,offset:h,size:u})}}class Si{constructor(i){this.container=i,this.modes=["destroy"]}update(i,t,s,n){if(!this.modes.includes(n))return;const a=this.container;switch(i.outType){case"normal":case"outside":if(S(i.position,a.canvas.size,b.origin,i.getRadius(),t))return;break;case"inside":{const{dx:o,dy:r}=_(i.position,i.moveCenter),{x:h,y:u}=i.velocity;if(h<0&&o>i.moveCenter.radius||u<0&&r>i.moveCenter.radius||h>=0&&o<-i.moveCenter.radius||u>=0&&r<-i.moveCenter.radius)return;break}}a.particles.remove(i,void 0,!0)}}class Ei{constructor(i){this.container=i,this.modes=["none"]}update(i,t,s,n){if(!this.modes.includes(n)||i.options.move.distance.horizontal&&(t==="left"||t==="right")||i.options.move.distance.vertical&&(t==="top"||t==="bottom"))return;const a=i.options.move.gravity,o=this.container,r=o.canvas.size,h=i.getRadius();if(a.enable){const u=i.position;(!a.inverse&&u.y>r.height+h&&t==="bottom"||a.inverse&&u.y<-h&&t==="top")&&o.particles.remove(i)}else{if(i.velocity.y>0&&i.position.y<=r.height+h||i.velocity.y<0&&i.position.y>=-h||i.velocity.x>0&&i.position.x<=r.width+h||i.velocity.x<0&&i.position.x>=-h)return;S(i.position,o.canvas.size,b.origin,h,t)||o.particles.remove(i)}}}class Di{constructor(i){this.container=i,this.modes=["out"]}update(i,t,s,n){if(!this.modes.includes(n))return;const a=this.container;switch(i.outType){case"inside":{const{x:o,y:r}=i.velocity,h=b.origin;h.length=i.moveCenter.radius,h.angle=i.velocity.angle+Math.PI,h.addTo(b.create(i.moveCenter));const{dx:u,dy:d}=_(i.position,h);if(o<=0&&u>=0||r<=0&&d>=0||o>=0&&u<=0||r>=0&&d<=0)return;i.position.x=Math.floor(x({min:0,max:a.canvas.size.width})),i.position.y=Math.floor(x({min:0,max:a.canvas.size.height}));const{dx:c,dy:f}=_(i.position,i.moveCenter);i.direction=Math.atan2(-f,-c),i.velocity.angle=i.direction;break}default:{if(S(i.position,a.canvas.size,b.origin,i.getRadius(),t))return;switch(i.outType){case"outside":{i.position.x=Math.floor(x({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor(x({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y;const{dx:o,dy:r}=_(i.position,i.moveCenter);i.moveCenter.radius&&(i.direction=Math.atan2(r,o),i.velocity.angle=i.direction);break}case"normal":{const o=i.options.move.warp,r=a.canvas.size,h={bottom:r.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:r.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},u=i.getRadius(),d=k(i.position,u);t==="right"&&d.left>r.width+i.offset.x?(i.position.x=h.left,i.initialPosition.x=i.position.x,o||(i.position.y=l()*r.height,i.initialPosition.y=i.position.y)):t==="left"&&d.right<-i.offset.x&&(i.position.x=h.right,i.initialPosition.x=i.position.x,o||(i.position.y=l()*r.height,i.initialPosition.y=i.position.y)),t==="bottom"&&d.top>r.height+i.offset.y?(o||(i.position.x=l()*r.width,i.initialPosition.x=i.position.x),i.position.y=h.top,i.initialPosition.y=i.position.y):t==="top"&&d.bottom<-i.offset.y&&(o||(i.position.x=l()*r.width,i.initialPosition.x=i.position.x),i.position.y=h.bottom,i.initialPosition.y=i.position.y);break}}break}}}}class Ri{constructor(i){this.container=i,this._updateOutMode=(t,s,n,a)=>{for(const o of this.updaters)o.update(t,a,s,n)},this.updaters=[new Mi(i),new Si(i),new Di(i),new Ei(i)]}init(){}isEnabled(i){return!i.destroyed&&!i.spawning}update(i,t){const s=i.options.move.outModes;this._updateOutMode(i,t,s.bottom??s.default,"bottom"),this._updateOutMode(i,t,s.left??s.default,"left"),this._updateOutMode(i,t,s.right??s.default,"right"),this._updateOutMode(i,t,s.top??s.default,"top")}}async function Oi(e,i=!0){await e.addParticleUpdater("outModes",t=>new Ri(t),i)}function Fi(e,i,t,s){switch(e.options.size.animation.destroy){case"max":i>=s&&e.destroy();break;case"min":i<=t&&e.destroy();break}}function Ai(e,i){const t=e.size;if(e.destroyed||!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0))return;const s=(t.velocity??0)*i.factor,n=t.min,a=t.max,o=t.decay??1;if(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),!((t.delayTime??0)>0&&t.time<(t.delayTime??0))){switch(t.status){case"increasing":t.value>=a?(t.status="decreasing",t.loops||(t.loops=0),t.loops++):t.value+=s;break;case"decreasing":t.value<=n?(t.status="increasing",t.loops||(t.loops=0),t.loops++):t.value-=s}t.velocity&&o!==1&&(t.velocity*=o),Fi(e,t.value,n,a),e.destroyed||(t.value=C(t.value,n,a))}}class Ti{init(i){const t=i.container,s=i.options.size,n=s.animation;n.enable&&(i.size.velocity=(i.retina.sizeAnimationSpeed??t.retina.sizeAnimationSpeed)/100*t.retina.reduceFactor,n.sync||(i.size.velocity*=l()))}isEnabled(i){return!i.destroyed&&!i.spawning&&i.size.enable&&((i.size.maxLoops??0)<=0||(i.size.maxLoops??0)>0&&(i.size.loops??0)<(i.size.maxLoops??0))}reset(i){i.size.loops=0}update(i,t){this.isEnabled(i)&&Ai(i,t)}}async function Ii(e,i=!0){await e.addParticleUpdater("size",()=>new Ti,i)}const A={fpsLimit:120,background:{color:"#fff"},particles:{number:{value:50},color:{value:["#3998D0","#2EB6AF","#A9BD33","#FEC73B","#F89930","#F45623","#D62E32","#EB586E","#9952CF"]},shape:{type:"circle"},opacity:{value:.5},size:{value:{min:200,max:400}},move:{enable:!0,angle:{value:30,offset:0},speed:{min:10,max:20},direction:"top",outModes:{default:"destroy",bottom:"none"}}},detectRetina:!0,emitters:{position:{x:50,y:150},rate:{delay:.2,quantity:3},size:{width:100,height:50}}};async function Bi(e,i=!0){await oi(e,!1),await ri(e,!1),await di(e,!1),await Ii(e,!1),await zi(e,!1),await Oi(e,!1),await wi(e,!1),await e.addPreset("bigCircles",A,!1),await e.addPreset("big-circles",A,i)}export{Bi as l};

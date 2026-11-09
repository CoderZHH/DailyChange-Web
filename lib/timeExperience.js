export function mountTimeExperience(root, assets) {
 const cards=[...root.querySelectorAll('.time-window')], motion=matchMedia('(prefers-reduced-motion: reduce)');
 const stage=root.querySelector('.time-constellation');
 // Deliberately uneven tabletop positions: x, y, angle, scale, travel bend.
 // Stable between visits, so reversing the scroll retraces each photograph.
 const desktop=[
  [.44,.51,-8,1.06,-65], [.61,.64,13,.98,75],
  [.245,.635,-14,.94,-100], [.90,.64,16,.87,60],
  [.085,.455,-11,.91,-45], [.80,.47,8,.96,90],
 ];
 const phone=[
  [.49,.415,-8,1.04,-20], [.40,.70,11,1.03,24],
  [.16,.58,-13,.94,-28], [.81,.735,14,.90,18],
  [.14,.345,-10,.87,-16], [.82,.445,9,.97,22],
 ];
 const clamp=v=>Math.min(1,Math.max(0,v));const ease=v=>v*v*(3-2*v);
 let raf=0,alive=true;
 cards.forEach(card=>{const img=new Image();img.src=assets[card.dataset.scene];card.querySelector('.window-photo').style.backgroundImage=`url("${img.src}")`;});
 function update(){
  raf=0;if(!alive)return;const box=root.getBoundingClientRect(),mobile=root.clientWidth<=700;
  const p=clamp(-box.top/Math.max(1,root.offsetHeight-innerHeight));
  const time=clamp((p-.38)/.56),frame=Math.round(time*23),spread=motion.matches?1:ease(clamp(p/.32));
  root.dataset.frame=frame;root.dataset.progress=p.toFixed(3);root.dataset.phase=p<.32?'scattering':p<.38?'settled':'changing';
  root.style.setProperty('--time',time);root.style.setProperty('--spread',spread);
  cards.forEach((card,i)=>{
   const [tx,ty,angle,size,bend]=(mobile?phone:desktop)[i];
   const stackOrder=[6,3,5,2,1,4][i];
   // The curve exists only during scattering; all positions lock before time advances.
   const flight=motion.matches?0:Math.sin(Math.PI*spread);
   const startX=(6-stackOrder)*5,startY=(6-stackOrder)*4;
   const x=startX*(1-spread)+(tx-.5)*stage.clientWidth*spread+bend*flight;
   const y=startY*(1-spread)+(ty-(mobile?.56:.55))*stage.clientHeight*spread-Math.abs(bend)*.45*flight;
   const rotation=(6-stackOrder)*-3*(1-spread)+angle*spread;
   const scale=(mobile?1.55:1.22)*(1-spread)+size*spread;
   card.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px) rotate(${rotation}deg) scale(${scale})`;
   card.style.zIndex=String(stackOrder);
   card.querySelector('.window-photo').style.backgroundPosition=`${frame%3*50}% ${Math.floor(frame/3)*100/7}%`;card.dataset.frame=frame;
  });
  root.querySelector('.time-position').textContent=String(frame+1).padStart(2,'0');
  root.querySelector('.time-caption').textContent=p<.32?(root.dataset.locale==='en'?'Lay out the days.':'把这些日子，散落在眼前。'):p<.38?(root.dataset.locale==='en'?'Keep scrolling. Watch the changes.':'继续滚动，看见变化。'):time>.9?(root.dataset.locale==='en'?'Look how much has changed.':'连起来，才看见变化。'):(root.dataset.locale==='en'?'Watch the little changes, together.':'慢慢发生的变化，一起看见。');
 }
 function queue(){if(!raf)raf=requestAnimationFrame(update);}
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);motion.addEventListener('change',queue);
 const observer=new ResizeObserver(queue);observer.observe(stage);update();
 return ()=>{alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);motion.removeEventListener('change',queue);};
}

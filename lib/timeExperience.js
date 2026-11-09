export function mountTimeExperience(root, assets) {
 const cards=[...root.querySelectorAll('.time-window')], motion=matchMedia('(prefers-reduced-motion: reduce)');
 const stage=root.querySelector('.time-constellation'),slots=[2,3,1,5,0,4];
 const clamp=v=>Math.min(1,Math.max(0,v));const ease=v=>v*v*(3-2*v);
 let raf=0,alive=true;
 cards.forEach(card=>{const img=new Image();img.src=assets[card.dataset.scene];card.querySelector('.window-photo').style.backgroundImage=`url("${img.src}")`;});
 function update(){
  raf=0;if(!alive)return;const box=root.getBoundingClientRect(),mobile=root.clientWidth<=700;
  const p=clamp(-box.top/Math.max(1,root.offsetHeight-innerHeight));
  const frame=Math.round(p*23),spread=motion.matches?1:ease(clamp(p/.52)),push=motion.matches?0:ease(clamp((p-.52)/.48));
  root.dataset.frame=frame;root.dataset.progress=p.toFixed(3);root.dataset.phase=p<.15?'gathered':p<.55?'opening':'forward';
  root.style.setProperty('--time',p);root.style.setProperty('--spread',spread);root.style.setProperty('--push',push);
  const width=cards[0].offsetWidth,height=cards[0].offsetHeight;
  cards.forEach((card,i)=>{
   const slot=slots[i],n=slot-2.5,initialX=n*13,initialY=Math.abs(n)*5;
   let x,y,z,rotation,rotateY;
   if(mobile){const col=slot%3-1,row=Math.floor(slot/3);x=col*width*1.06*spread*(1+push*.08);y=(row-.5)*height*1.06*spread;z=(slot===2||slot===3?15:-15)*spread;rotation=(col*5+(row?2:-2))*spread+n*5*(1-spread);rotateY=col*-3*spread;}
   else{const step=Math.min(stage.clientWidth/6.15,width*.87);x=initialX*(1-spread)+n*step*spread*(1+push*.14);y=initialY*(1-spread)+(Math.pow(Math.abs(n),1.55)*21-45)*spread-push*(2.5-Math.abs(n))*16;z=(-Math.abs(n)*46+85)*spread+push*(130-Math.abs(n)*38);rotation=n*(7-4*push)*spread+n*6*(1-spread);rotateY=n*-5*spread*(1-push*.5);}
   if(motion.matches){z=0;rotation=0;rotateY=0;}
   card.style.transform=`translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateZ(${rotation}deg) rotateY(${rotateY}deg)`;
   card.style.zIndex=String(20-Math.round(Math.abs(n)*3));
   card.querySelector('.window-photo').style.backgroundPosition=`${frame%3*50}% ${Math.floor(frame/3)*100/7}%`;card.dataset.frame=frame;
  });
  root.querySelector('.time-position').textContent=String(frame+1).padStart(2,'0');
  root.querySelector('.time-caption').textContent=p<.15?(root.dataset.locale==='en'?'A little photo, every day.':'每天留下的那一张。'):p>.85?(root.dataset.locale==='en'?'Look how much has changed.':'连起来，才看见变化。'):(root.dataset.locale==='en'?'All these days. All these changes.':'日子展开，变化一起发生。');
 }
 function queue(){if(!raf)raf=requestAnimationFrame(update);}
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);motion.addEventListener('change',queue);
 const observer=new ResizeObserver(queue);observer.observe(stage);update();
 return ()=>{alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);motion.removeEventListener('change',queue);};
}

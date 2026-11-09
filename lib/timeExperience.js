export function mountTimeExperience(root, assets) {
 const cards=[...root.querySelectorAll('.time-window')], motion=matchMedia('(prefers-reduced-motion: reduce)');
 const stage=root.querySelector('.time-constellation'),slots=[2,3,1,5,0,4];
 const clamp=v=>Math.min(1,Math.max(0,v));const ease=v=>v*v*(3-2*v);
 let raf=0,alive=true;
 cards.forEach(card=>{const img=new Image();img.src=assets[card.dataset.scene];card.querySelector('.window-photo').style.backgroundImage=`url("${img.src}")`;});
 function update(){
  raf=0;if(!alive)return;const box=root.getBoundingClientRect(),mobile=root.clientWidth<=700;
  const p=clamp(-box.top/Math.max(1,root.offsetHeight-innerHeight));
  const time=clamp((p-.38)/.56),frame=Math.round(time*23),spread=motion.matches?1:ease(clamp(p/.32));
  root.dataset.frame=frame;root.dataset.progress=p.toFixed(3);root.dataset.phase=p<.32?'opening':p<.38?'settled':'changing';
  root.style.setProperty('--time',time);root.style.setProperty('--spread',spread);
  const width=cards[0].offsetWidth,height=cards[0].offsetHeight;
  cards.forEach((card,i)=>{
   const slot=slots[i],n=slot-2.5;
   // Flat, uniquely ordered layers keep overlapping portraits from intersecting.
   const stackOrder=[6,5,4,1,3,2][i];
   let x,y,rotation,scale;
   if(mobile){
    const col=slot%3-1,row=Math.floor(slot/3);
    x=col*width*1.07*spread;
    y=(row-.5)*height*1.06*spread+(6-stackOrder)*3*(1-spread);
    rotation=(col*4+(row?1:-1))*spread+(6-stackOrder)*-3*(1-spread);
    scale=1.55-.55*spread;
   }else{
    const step=Math.min(stage.clientWidth/6.2,width*.94);
    x=n*step*spread+(6-stackOrder)*5*(1-spread);
    y=(Math.pow(Math.abs(n),1.5)*14-24)*spread+(6-stackOrder)*4*(1-spread);
    rotation=n*3.2*spread+(6-stackOrder)*-3*(1-spread);
    scale=1.22-.22*spread;
   }
   if(motion.matches){rotation=0;scale=1;}
   card.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px) rotate(${rotation}deg) scale(${scale})`;
   card.style.zIndex=String(stackOrder);
   card.querySelector('.window-photo').style.backgroundPosition=`${frame%3*50}% ${Math.floor(frame/3)*100/7}%`;card.dataset.frame=frame;
  });
  root.querySelector('.time-position').textContent=String(frame+1).padStart(2,'0');
  root.querySelector('.time-caption').textContent=p<.32?(root.dataset.locale==='en'?'Unfold the photos.':'先展开这些日子。'):p<.38?(root.dataset.locale==='en'?'Keep scrolling. Watch the changes.':'继续滚动，看见变化。'):time>.9?(root.dataset.locale==='en'?'Look how much has changed.':'连起来，才看见变化。'):(root.dataset.locale==='en'?'Watch the little changes, together.':'慢慢发生的变化，一起看见。');
 }
 function queue(){if(!raf)raf=requestAnimationFrame(update);}
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);motion.addEventListener('change',queue);
 const observer=new ResizeObserver(queue);observer.observe(stage);update();
 return ()=>{alive=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);motion.removeEventListener('change',queue);};
}

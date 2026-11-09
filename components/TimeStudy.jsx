"use client";
import {useEffect,useRef} from 'react';
import {asset} from '../lib/paths';
import {mountTimeExperience} from '../lib/timeExperience';
const scenes=['hair','beard','child','pet','curls','color'];
export default function TimeStudy({locale='zh'}){
 const root=useRef(null),en=locale==='en';
 useEffect(()=>mountTimeExperience(root.current,Object.fromEntries(scenes.map(n=>[n,asset(`/media/sequence/${n}-sequence.webp`)]))),[]);
 const labels=en?['Growing out my hair','My first beard','Growing up','Growing together','Growing my curls','A new shade']:['头发，慢慢留长。','胡子，一点点蓄起。','孩子，悄悄长大。','陪它，一起长大。','卷发，自在生长。','发色，慢慢褪去。'];
 return <div className="photo-journey" ref={root} data-locale={locale}>
  <div className="time-canvas">
   <header className="time-canvas-heading"><p>DAILYCHANGE / A LITTLE EVERY DAY</p><h2>{en?<>Watch the days<br/><em>unfold.</em></>:<>把日子展开，<br/><em>看见自己的变化。</em></>}</h2><div className="time-heading-note"><p>{en?'A little longer. A little older. A little different.':'每天一张，留住那些慢慢发生的改变。'}</p><span>{en?'SCROLL TO UNFOLD':'向下滚动，展开这些日子'} ↓</span></div></header>
   <div className="time-constellation">
    {scenes.map((scene,i)=><figure className={`time-window window-${scene}`} data-scene={scene} key={scene} style={{'--depth':[30,-32,20,-20,24,-24][i]+'px','--tilt':[-3,3,-5,4,4,-4][i]+'deg'}}>
     <div className="window-photo" role="img" aria-label={labels[i]} style={{backgroundImage:`url("${asset(`/media/sequence/${scene}-sequence.webp`)}")`}}/>
     <figcaption><span>{labels[i]}</span><small>{i===3?(en?'CONCEPT':'概念场景'):['01 / SELF','02 / CHANGE','03 / GROW','04 / COMPANION','05 / CURLS','06 / COLOR'][i]}</small></figcaption>
    </figure>)}
   </div>
   <div className="time-axis"><div className="time-axis-copy"><span className="time-caption">{en?'It starts with one photo.':'从第一张开始。'}</span><span><b className="time-position">01</b> / 24</span></div><div className="time-axis-line"><i/></div><div className="time-axis-ends"><span>{en?'THEN':'最初'}</span><span>{en?'LATER':'后来'}</span></div></div>
   <p className="time-concept-note">{en?'Illustrated scenes. Pet alignment is a concept, not a current feature.':'场景示意 · 宠物自动对齐为概念，当前尚未支持。'}</p>
  </div>
 </div>;
}

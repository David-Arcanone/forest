import React from 'react';
import styles from './Mario.module.css';
import { gsap } from "gsap";
import imageBg from '../../img/ArtMario/mario_bg_low.jpeg';
import imageMid from '../../img/ArtMario/mario_mid.png';
import imageFront from '../../img/ArtMario/mario_front.png';

const Mario: React.FC = () => {
  const targetFront = React.useRef<HTMLImageElement>(null);
  const targetMid = React.useRef<HTMLImageElement>(null);
  const targetTitle = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.to(targetTitle.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetTitle.current,
        start: "bottom 90%",
        end: "+=60%"
      },
      scale: 1.2,
      color: "white"
    });
    gsap.to(targetFront.current, {      
        duration: 5,
        ease: "none",
        x: "+=300%",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % 300)
        },
        repeat: -1     
      
    });
    gsap.to(targetMid.current, {      
      duration: 5,
      ease: "none",
      x: "-=400%",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 400)
      },
      repeat: -1     
    
  });
  },)

  return (
    <>
      <div className={styles.ArtMario}>
        <img src={imageBg} alt="бэкграунд" className={styles.ArtMario__img}/>
        <h2 className={styles.ArtMario__title} ref={targetTitle}>Study</h2>
        <img src={imageMid} alt="тяжелая работа" className={`${styles.ArtMario__img} ${styles.ArtMario__img_m2}`} ref={targetMid} />
        <img src={imageFront} alt="работа" className={`${styles.ArtMario__img} ${styles.ArtMario__img_m1}`} ref={targetFront} />
        
      </div>
    </>
  );
}

export default Mario;


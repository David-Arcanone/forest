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
    gsap.to(targetMid.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetMid.current,
      },
      xPercent: 200
    });
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
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
      },
      xPercent: -100
    });
  },)

  return (
    <>
      <div className={styles.ArtMario}>
        <img src={imageBg} alt="бэкграунд" className={styles.ArtMario__img}/>
        <h2 className={styles.ArtMario__title} ref={targetTitle}>Study</h2>
        <img src={imageMid} alt="тяжелая работа" className={`${styles.ArtMario__img} ${styles.ArtMario__img_alt}`} ref={targetMid} />
        <img src={imageFront} alt="работа" className={styles.ArtMario__img} ref={targetFront} />
        
      </div>
    </>
  );
}

export default Mario;


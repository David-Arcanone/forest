import React from 'react';
import styles from './Ilon.module.css';
import { gsap } from "gsap";
import imageBg from '../../img/ArtIlon/Ilon-bg.png';
import imageBgAlt from '../../img/ArtIlon/Ilon-bg-alt.png';
import imageMid from '../../img/ArtIlon/Ilon-mid.png';
import imageFront from '../../img/ArtIlon/Ilon-front.png';

const Ilon: React.FC = () => {
  const targetFront = React.useRef<HTMLImageElement>(null);
  const targetMid = React.useRef<HTMLImageElement>(null);
  const targetBackground = React.useRef<HTMLImageElement>(null);
  const targetBackgroundAlt = React.useRef<HTMLImageElement>(null);
  const targetTitle = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.to(targetMid.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetMid.current,
      },
      scaleY: 1.1,
      yPercent: -5
    });
    gsap.to(targetTitle.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetTitle.current,
        start: "bottom 90%",
        end: "+=60%"
      },
      yPercent: -5,
      opacity: 0,
    });
    gsap.to(targetFront.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
      },
      scale: 1.3,
      yPercent: -8
    });
    gsap.to(targetBackgroundAlt.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetBackground.current,
        end: "+=50%"
      },
      yPercent: -100
    });
  },)

  return (
    <>
      <div className={styles.ArtForest}>
        <img src={imageBg} alt="бэкграунд" className={styles.ArtForest__img} />
        <img src={imageMid} alt="инвесторы" className={styles.ArtForest__img} ref={targetMid} />
        <img src={imageFront} alt="Илон" className={styles.ArtForest__img} ref={targetFront} />
        <img src={imageBgAlt} alt="лого" className={styles.ArtForest__img} ref={targetBackgroundAlt} />
        <h2 className={styles.ArtForest__title} ref={targetTitle}>Profit</h2>
      </div>
    </>
  );
}

export default Ilon;


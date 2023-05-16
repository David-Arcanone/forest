import React from 'react';
import styles from './ForestMovingBlock.module.css';
import { gsap } from "gsap";
import imageBg from '../../img/ArtForest/bg_forest.png';
import imageMid from '../../img/ArtForest/mid_forest.png';
import imageFront from '../../img/ArtForest/front_forest.png';

const ForestMovingBlock: React.FC = () => {

  const targetFront = React.useRef<HTMLImageElement>(null);
  const targetMid = React.useRef<HTMLImageElement>(null);
  const targetBackground = React.useRef<HTMLImageElement>(null);
  const targetTitle = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.to(targetMid.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
        start: "top 50%"
      },
      scale: 1.1,
      xPercent: 10,
      yPercent: -5
    });
    gsap.to(targetTitle.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
        start: "top 50%"
      },
      scale: 0.9,
    });
    gsap.to(targetFront.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
        start: "top 50%"
      },
      yPercent: -10,
      xPercent: -5,
      scale: 1.2
    });
    gsap.to(targetBackground.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetFront.current,
        start: "top 50%"
      },
      scaleX: 1.2,
      scaleY: 1.2,
      opacity: 0,   
    });
  },)

  return (
    <>
    {//<div className={styles.test} id="qwert"></div>
    }
      <div className={styles.ArtForest}>
        <img src={imageBg} alt="небо" className={styles.ArtForest__img} ref={targetBackground} />
        <img src={imageMid} alt="облака" className={styles.ArtForest__img} ref={targetMid} />
        <h2 className={styles.ArtForest__title} ref={targetTitle}>Deep forest</h2>
        <img src={imageFront} alt="дом" className={styles.ArtForest__img} ref={targetFront} />
        { /*<img src={imageFrame} alt="рамка" className={`${styles.ArtHouse__img} ${styles.ArtHouse__img_frame}`}/> */}
      </div>
    </>
  );
}

export default ForestMovingBlock;


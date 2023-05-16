import React from 'react';
import styles from './ArtHouse.module.css';
import imageSky from '../../img/ArtHouse/sky00.png';
import imageClouds from '../../img/ArtHouse/clouds03.png';
import imageHills from '../../img/ArtHouse/hills01.png';
import imageHouse from '../../img/ArtHouse/house02.png';
import { gsap } from "gsap";


const ArtHouse: React.FC = () => {
  const targetCloud = React.useRef<HTMLImageElement>(null);
  const targetSky = React.useRef<HTMLImageElement>(null);
  const targetHills = React.useRef<HTMLImageElement>(null);
  const targetHouse = React.useRef<HTMLImageElement>(null);
  const targetTitle = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.to(targetCloud.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetCloud.current,
      },
      scale: 1.1,
    });
    gsap.to(targetTitle.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetCloud.current,
      },
      xPercent: 10,
      yPercent: 19,
      scale: 0.8,
    });
    gsap.to(targetHills.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetCloud.current,
      },
      //yPercent: -1,
      scaleX: 1.05,
    });
    gsap.to(targetHouse.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetCloud.current,
      },
      yPercent: -15,
      scale: 1.30
    });

    gsap.to(targetSky.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetCloud.current,
        start: "center 60%"
      },
      scaleX: 1.1,
      scaleY: 1.2,
      backgroundColor: "#fd2",
      opacity: 0.05,
    });
  },)


  return (
    <>
      <div className={styles.ArtHouse}>
        <img src={imageSky} alt="небо" className={styles.ArtHouse__img} ref={targetCloud} />
        <img src={imageClouds} alt="облака" className={styles.ArtHouse__img} ref={targetSky} />
        <h2 className={styles.ArtHouse__title} ref={targetTitle}>forest of Art</h2>
        <img src={imageHills} alt="холмы" className={styles.ArtHouse__img} ref={targetHills} />
        <img src={imageHouse} alt="дом" className={styles.ArtHouse__img} ref={targetHouse} />
      </div>
    </>
  );
}

export default ArtHouse;
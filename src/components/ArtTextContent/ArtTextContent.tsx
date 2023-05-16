import React from 'react';
import styles from './ArtTextContent.module.css';
import { gsap } from "gsap";

const ArtTextContent: React.FC<{ textArt: string; headerArt: string; trueColor: string }> = ({ textArt, headerArt, trueColor }) => {
  const targetBox = React.useRef<HTMLDivElement>(null);
  const targetTitle = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    gsap.to(targetBox.current, {
      scrollTrigger: {
        scrub: 1.5,
        trigger: targetBox.current,
        end: "+=40%"
      },
      backgroundColor: trueColor,
    });
  },)
  return (
    <div className={styles.ArtTextContent} ref={targetBox}>
      <h2 className={styles.ArtTextContent__title} ref={targetTitle}>{headerArt}</h2>
      <div>
        <p>{textArt}</p>
      </div>
    </div>
  );
}

export default ArtTextContent;
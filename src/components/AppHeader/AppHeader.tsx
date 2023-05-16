import React from 'react';
import styles from './AppHeader.module.css';
import { gsap } from "gsap";
const AppHeader: React.FC = () => {
  const targetTitle1 = React.useRef<HTMLHeadingElement>(null);
  const targetDiv = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.to(targetTitle1.current, {
      scrollTrigger: {
        scrub: 1,
        trigger: targetDiv.current,
        start: "bottom 80%",
      },
      yPercent: 150,
    });
  },)

  return (
    <>
      <div className={styles.ArtForest} ref={targetDiv}>
        <h1 className={styles.ArtForest__title}>Scroll</h1>
        <h2 className={styles.ArtForest__title} ref={targetTitle1}>Down</h2>
      </div>
    </>
  );
}

export default AppHeader;


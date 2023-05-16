import React from 'react';
import styles from './AppFooter.module.css';
const AppFooter: React.FC = () => {

  return (
    <div className={styles.ArtFooter}>
      <a href="https://github.com/David-Arcanone" className={styles.ArtFooter__anchor}>ссылка на Githab</a>
      <p>2023 Grigorev David</p>
    </div>
  );
}

export default AppFooter;


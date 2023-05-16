import React from 'react';
import styles from './App.module.css';
import ArtHouse from "../ArtHouse/ArtHouse";
import ArtTextContent from '../ArtTextContent/ArtTextContent';
import { IlonText, forestText, houseText } from '../../utils/const/textConst';
import ForestMovingBlock from '../ForestMovingBlock/ForestMovingBlock';
import Ilon from '../Ilon/Ilon';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App__ArtHouseContainer}>
        <AppHeader/>
      </header>
      <div className={styles.App__ArtHouseContainer}>
        <ArtHouse />
      </div>
      <ArtTextContent textArt={houseText} headerArt='House' trueColor='#fff' />
      <div className={styles.App__ArtHouseContainer}>
        <ForestMovingBlock />
      </div>
      <ArtTextContent textArt={forestText} headerArt='Forest' trueColor='#fff' />
      <div className={styles.App__ArtHouseContainer}>
        <Ilon />
      </div>
      <ArtTextContent textArt={IlonText} headerArt='Succes' trueColor='#fff' />
      <AppFooter/>
    </div>
  );
}

export default App;

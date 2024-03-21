import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './layout.module.css';
import { AllRoutes } from '../Routes';
/**
 * The layout component displays the basic jsx that every page has, this includes the header, footer and the component containing Routes to the different pages.
 */
export function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

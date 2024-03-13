import React from 'react';
import { Header } from '../Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer';
import styles from './layout.module.css';
import { HomePage } from '../../pages/Home';
import { ProductSpecific } from '../../pages/ProductSpecific';
import { CartPage } from '../../pages/Cart';
/**
 * the layout component displays the basic jsx that every page has, this includes the header, footer and Routes to the different pages
 */
export function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Outlet></Outlet>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="product/:id"
          element={<ProductSpecific></ProductSpecific>}
        ></Route>
        <Route path="contact"></Route>
        <Route path="cart" element={<CartPage></CartPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

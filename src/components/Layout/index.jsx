import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from '../Footer';
import styles from './layout.module.css';
import { HomePage } from '../../pages/Home';
import { ProductSpecific } from '../../pages/ProductSpecific';
import { CartPage } from '../../pages/Cart';
import { CheckoutSuccessPage } from '../../pages/CheckoutSuccessPage';
import { ContactPage } from '../../pages/Contact';
import { NotFound } from '../../pages/NotFound';
import { changeTitle } from '../../js/changeTitle';
/**
 * The layout component displays the basic jsx that every page has, this includes the header, footer and Routes to the different pages, it also includes the title for each page
 */
export function Layout() {
  const currentLocation = useLocation();
  useEffect(() => {
    let title = 'E-shop';
    if (currentLocation.pathname === '/contact') {
      title = 'Contact us';
    } else if (currentLocation.pathname === '/cart') {
      title = 'Cart';
    } else if (currentLocation.pathname === '/checkOutSuccess') {
      title = 'Checkout success';
    } else if (currentLocation.pathname.startsWith('/product/')) {
      title = `E-shop${currentLocation.pathname}`;
    }
    changeTitle(title);
  }, [currentLocation.pathname]);
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Routes>
        <Route
          path="product/:id"
          element={<ProductSpecific></ProductSpecific>}
        ></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="cart" element={<CartPage></CartPage>}></Route>
        <Route
          path="checkOutSuccess"
          element={<CheckoutSuccessPage></CheckoutSuccessPage>}
        ></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/Home';
import { ProductSpecific } from '../../pages/ProductSpecific';
import { CartPage } from '../../pages/Cart';
import { CheckoutSuccessPage } from '../../pages/CheckoutSuccessPage';
import { ContactPage } from '../../pages/Contact';
import { NotFound } from '../../pages/NotFound';
import { changeTitle } from '../../js/changeTitle';
import React, { useEffect } from 'react';
/**
 * component that changes the title of each page depending on the route of the current page, the component also handles routes to each page
 */
export function AllRoutes() {
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
    <Routes>
      <Route path="product/:id" element={<ProductSpecific />}></Route>
      <Route path="contact" element={<ContactPage />}></Route>
      <Route path="cart" element={<CartPage />}></Route>
      <Route path="checkOutSuccess" element={<CheckoutSuccessPage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

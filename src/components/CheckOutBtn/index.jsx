import React from 'react';
import styles from './checkOutBtn.module.css';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../states/cart';
/**
 * the check out button component
 */
export function CheckOutBtn() {
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.total);
  if (total <= 0) {
    return (
      <Link
        className={`${styles.checkOutBtn} ${styles.checkOutBtnEmpty}`}
        onClick={clearCart}
      >
        Checkout
      </Link>
    );
  } else {
    return (
      <Link
        className={styles.checkOutBtn}
        onClick={clearCart}
        to="/checkOutSuccess"
      >
        Checkout
      </Link>
    );
  }
}

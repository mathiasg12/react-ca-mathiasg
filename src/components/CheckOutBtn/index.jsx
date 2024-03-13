import React from 'react';
import styles from './checkOutBtn.module.css';
import { Link } from 'react-router-dom';
/**
 * the check out button component
 */
export function CheckOutBtn() {
  return (
    <Link className={styles.checkOutBtn} to="/checkOutSuccess">
      Checkout
    </Link>
  );
}

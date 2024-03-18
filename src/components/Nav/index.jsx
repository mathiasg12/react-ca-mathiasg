import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { Cart } from '../Cart';
/**
 * function Nav creates the nav component
 * @returns nav component
 */
export function Nav() {
  return (
    <nav className={styles.navigation}>
      <Link to={'/'}>
        <div className={styles.imgWrapper}>
          <img
            src="../pictures/logo.png"
            alt="logo"
            className={styles.img}
          ></img>
        </div>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} to="/contact">
            Contact us
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/cart">
            <Cart></Cart>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

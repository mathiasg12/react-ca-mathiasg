import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
/**
 * the footer component
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksWrapper}>
        <Link to="/contact" className={styles.footerLink}>
          Contact us
        </Link>
        <Link to="/" className={styles.footerLink}>
          Home
        </Link>
      </div>
      <p className={styles.footerItem}>copyright &copy;</p>
    </footer>
  );
}

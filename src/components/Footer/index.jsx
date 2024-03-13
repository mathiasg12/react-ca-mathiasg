import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
/**
 * the footer component
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/contact" className={styles.footerLink}>
        Contact us
      </Link>
      <p className={styles.footerItem}>copyright &copy</p>
    </footer>
  );
}

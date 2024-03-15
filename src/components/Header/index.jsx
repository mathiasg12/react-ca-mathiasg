import React from 'react';
import { Nav } from '../Nav';
import styles from './header.module.css';
/**
 * creating the Header and exporting it to the Layout component
 */
export function Header() {
  return (
    <header className={styles.header}>
      <Nav></Nav>
    </header>
  );
}

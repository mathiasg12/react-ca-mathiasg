import React from 'react';
import { Link } from 'react-router-dom';
import styles from './continueBtn.module.css';
/**
 * the continue button component
 */
export function ContinueBtn() {
  return (
    <Link className={styles.ContinueBtn} to="/">
      Continue
    </Link>
  );
}

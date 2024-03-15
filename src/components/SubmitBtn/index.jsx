import React from 'react';
import styles from './submitBtn.module.css';
/**
 * submit button component
 */
export function SubmitBtn() {
  return (
    <input
      type="submit"
      value="Send message"
      className={styles.submitBtn}
    ></input>
  );
}

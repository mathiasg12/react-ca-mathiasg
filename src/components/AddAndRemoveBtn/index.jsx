import React from 'react';
import styles from './AddAndRemoveBtn.module.css';
export function AddAndRemoveBtn(props) {
  const { object } = props;
  return (
    <div className={styles.removeAndAddButtonWrapper}>
      <button>-</button>
      <p className={styles.quantity}>{object.quantity}</p>
      <button>+</button>
    </div>
  );
}

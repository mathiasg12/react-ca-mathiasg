import React from 'react';
import styles from './AddAndRemoveBtn.module.css';
import { useCartStore } from '../../states/cart';
export function AddAndRemoveBtn(props) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const changeTotal = useCartStore((state) => state.changeTotal);
  const addToCart = useCartStore((state) => state.addProduct);
  return (
    <div className={styles.removeAndAddButtonWrapper}>
      <button
        onClick={() => {
          removeProduct(props.product);
        }}
      >
        -
      </button>
      <p className={styles.quantity}>{props.product.quantity}</p>
      <button
        onClick={() => {
          addToCart(props.product);
          changeTotal(props.product.discountedPrice);
        }}
      >
        +
      </button>
    </div>
  );
}

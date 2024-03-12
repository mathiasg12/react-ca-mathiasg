import React from 'react';
import styles from './AddAndRemoveBtn.module.css';
import { useCartStore } from '../../states/cart';
/**
 * component which creates a add button and remove button so a user can add or remove a prouct or the quantity of a product in cart, the component also displays the quantity of the product
 * @param {string} props
 */
export function AddAndRemoveBtn(props) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const changeTotal = useCartStore((state) => state.changeTotal);
  const addToCart = useCartStore((state) => state.addProduct);
  return (
    <div className={styles.removeAndAddButtonWrapper}>
      <button
        className={styles.removeBtn}
        onClick={() => {
          removeProduct(props.product);
        }}
      >
        -
      </button>
      <p className={styles.quantity}>{props.product.quantity}</p>
      <button
        className={styles.addBtn}
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

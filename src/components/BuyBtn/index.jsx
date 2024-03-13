import React from 'react';
import styles from './addToCart.module.css';
import { useCartStore } from '../../states/cart';
/**
 * the buyBtn component is a button that on click calls two hooks, one is the addToCart which adds a product to cart and the other one is changeTotal which changes the total in cart
 * @param {string} props
 */
export function BuyBtn(props) {
  const addToCart = useCartStore((state) => state.addProduct);
  const changeTotal = useCartStore((state) => state.changeTotal);
  return (
    <button
      className={styles.addToCart}
      onClick={() => {
        addToCart(props.product);
        changeTotal(props.product.discountedPrice);
      }}
    >
      Add to cart
    </button>
  );
}

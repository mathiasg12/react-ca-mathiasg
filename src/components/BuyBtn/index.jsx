import React from 'react';
import styles from './addToCart.module.css';
import { useCartStore } from '../../states/cart';
export function BuyBtn(props) {
  const addToCart = useCartStore((state) => state.addProduct);
  const changeTotal = useCartStore((state) => state.changeTotal);
  return (
    <button
      className={styles.addToCart}
      onClick={() => {
        addToCart({
          id: props.id,
          title: props.title,
          imageUrl: props.imageUrl,
          price: props.price,
          discountedPrice: props.discountedPrice,
        });
        changeTotal(props.discountedPrice);
      }}
    >
      Add to cart
    </button>
  );
}

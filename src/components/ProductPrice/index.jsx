import React from 'react';
import { calculatePriceDif } from '../../js/calculatePriceDif';
import styles from './productPrice.module.css';
/**
 * function that determines if the product is on sale or not displays the discounted and not discounted price and uses the calculatePriceDif function
 * to calculate how much the product is on sale
 * @param {number} props
 * @returns the price section component
 */
export function DisplayPrice(props) {
  const { priceA, priceB } = props;
  if (priceA === priceB) {
    return (
      <div>
        <p className={styles.newPrice}>${priceA}</p>
      </div>
    );
  } else {
    const discountInPercent = calculatePriceDif(priceA, priceB).toFixed(2);
    return (
      <div className={styles.priceWrapper}>
        <div className={styles.discount}>-{discountInPercent}%</div>
        <div className={styles.priceCon}>
          <p className={styles.newPrice}>${priceB}</p>
          <p className={styles.oldPrice}>${priceA}</p>
        </div>
      </div>
    );
  }
}

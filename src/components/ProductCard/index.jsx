import React from 'react';
import { Link } from 'react-router-dom';
import { DisplayPrice } from '../ProductPrice';
import styles from './ProductCard.module.css';
export function ProductCard(props) {
  const { arrayOfProducts } = props;
  return (
    <section className={styles.productSection}>
      {arrayOfProducts.map((item) => (
        <Link
          key={item.id}
          className={styles.productCard}
          to={`product/${item.id}`}
        >
          <div className={styles.imgWrapper}>
            <img
              src={item.image.url}
              className={styles.img}
              alt="product image"
            ></img>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <h4 className={styles.rating}>Rating: {item.rating}/5</h4>
          <DisplayPrice
            priceA={item.price}
            priceB={item.discountedPrice}
          ></DisplayPrice>
        </Link>
      ))}
    </section>
  );
}

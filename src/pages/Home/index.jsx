import React from 'react';
import { useFetchProducts } from '../../hooks/FetchProducts';
import styles from './home.module.css';
import { DisplayPrice } from '../../components/ProductPrice';
import { SearchBar } from '../../components/SearchBar';
import { Link } from 'react-router-dom';
/**
 * component that creates the homepage with a search bar component and loops thrue the products from the api
 * @returns home page
 */
export function HomePage() {
  const { products, newError, loading } = useFetchProducts(
    'https://v2.api.noroff.dev/online-shop'
  );
  const allProducts = products && products.data ? products.data : [];
  if (loading || !allProducts) {
    return <div>Loading....</div>;
  }
  if (newError) {
    return <div>An error has occured please try again later</div>;
  }
  if (!loading) {
    return (
      <main>
        <SearchBar array={allProducts}></SearchBar>
        <section className={styles.productSection}>
          {allProducts.map((item) => (
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
      </main>
    );
  }
}

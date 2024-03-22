import React from 'react';
import { useFetchProducts } from '../../hooks/FetchProducts';
import styles from './home.module.css';
import { SearchBar } from '../../components/SearchBar';
import { ProductCard } from '../../components/ProductCard';
/**
 * component that creates the homepage with a search bar component and the product card component
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
      <main className={styles.homeMain}>
        <SearchBar array={allProducts}></SearchBar>
        <ProductCard arrayOfProducts={allProducts}></ProductCard>
      </main>
    );
  }
}

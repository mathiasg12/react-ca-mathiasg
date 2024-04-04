import React, { useState } from 'react';
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
  const [searched, setSearched] = useState(false);
  const [searcedArray, setSearchedArray] = useState();
  const searchedOnClick = () => {
    setSearched(true);
    document.getElementsByClassName('searchBar_searchBar__apRhP').value = '';
  };
  const allProductOnClick = () => {
    setSearched(false);
  };
  const allProducts = products && products.data ? products.data : [];
  if (loading || !allProducts) {
    return <div>Loading....</div>;
  }
  if (newError) {
    return <div>An error has occured please try again later</div>;
  }
  if (!loading) {
    if (searched === false) {
      return (
        <main className={styles.homeMain}>
          <SearchBar
            array={allProducts}
            searchedOnClick={searchedOnClick}
            setSearchedArray={setSearchedArray}
            searched={searched}
          ></SearchBar>
          <ProductCard arrayOfProducts={allProducts}></ProductCard>
        </main>
      );
    } else {
      return (
        <main className={styles.homeMain}>
          <SearchBar
            array={allProducts}
            searchedOnClick={searchedOnClick}
            setSearchedArray={setSearchedArray}
          ></SearchBar>
          <div className={styles.headingAndBtnWrapper}>
            <h2>Showing {searcedArray.length} results based on your search</h2>
            <button
              className={styles.AllProductsBtn}
              onClick={allProductOnClick}
            >
              All Products
            </button>
          </div>
          <ProductCard arrayOfProducts={searcedArray}></ProductCard>
        </main>
      );
    }
  }
}

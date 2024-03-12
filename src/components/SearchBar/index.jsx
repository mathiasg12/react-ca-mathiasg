import React, { useState } from 'react';
import styles from './searchBar.module.css';
import { search } from '../../js/search';
import { DisplayPrice } from '../ProductPrice';
import { DisplayPriceSearchBar } from '../SearchProductPrice';
import { Link } from 'react-router-dom';
/**
 * the search bar components, displays the search bar and the results of the search
 * @param {array} props
 * @returns array
 */
export function SearchBar(props) {
  const { array } = props;
  const [searchValue, setSearchValue] = useState('');
  const searchChange = (change) => {
    setSearchValue(change.target.value.toLowerCase().trim());
  };
  if (searchValue.length > 0) {
    const filteredArray = search(array, searchValue);
    return (
      <div className={styles.searchBarContainer}>
        <input
          placeholder="Search for a product"
          className={styles.searchBar}
          id="searchBar"
          onChange={searchChange}
        ></input>
        <div className={styles.overlayWrapper}>
          <div className={styles.productOverlay}>
            {filteredArray.map((item) => (
              <Link
                key={item.id}
                className={styles.smallProductCard}
                to={`product/${item.id}`}
              >
                <div className={styles.smallImgWrapper}>
                  <img
                    src={item.image.url}
                    className={styles.smallImg}
                    alt="product image"
                  ></img>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <DisplayPriceSearchBar
                  priceA={item.price}
                  priceB={item.discountedPrice}
                ></DisplayPriceSearchBar>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.searchBarContainer}>
        <input
          placeholder="Search for a product"
          className={styles.searchBar}
          id="searchBar"
          onChange={searchChange}
        ></input>
      </div>
    );
  }
}

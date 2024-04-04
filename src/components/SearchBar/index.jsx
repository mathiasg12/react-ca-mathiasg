import React, { useState } from 'react';
import styles from './searchBar.module.css';
import { search } from '../../js/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LookAheadOverlay } from '../LookAheadOverlay';
/**
 * the search bar components, displays the search bar and uses the look ahead overlay component which shows the user matching results.
 * this component takes three props, the first prop is the product array which is all products, the second is a function and the third is a state which sets a new search array.
 * the component creates two states the first state is the users search value and the second one is a boolean value for if the search button is clicked or not. the component has a function
 * that register enter as a search click.
 *
 * @param {array, function, state} props
 * @returns array
 */
export function SearchBar(props) {
  const { array, searchedOnClick, setSearchedArray } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  const searchChange = (change) => {
    setSearchValue(change.target.value.toLowerCase().trim());
    setSearchBtnClicked(false);
  };
  if (searchValue.length > 0) {
    const filteredArray = search(array, searchValue);
    const handleSearchedOnClick = () => {
      searchedOnClick();
      setSearchedArray(filteredArray);
      setSearchBtnClicked(true);
    };
    const handleEnterKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearchedOnClick();
      }
    };
    return (
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarWrapper}>
          <input
            placeholder="Search for a product"
            className={styles.searchBar}
            id="searchBar"
            onChange={searchChange}
            onKeyDown={handleEnterKeyPress}
          ></input>
          <div className={styles.searchButton}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              type="button"
              role="button"
              onClick={handleSearchedOnClick}
            ></FontAwesomeIcon>
          </div>
        </div>
        <LookAheadOverlay
          searchBtnClicked={searchBtnClicked}
          array={filteredArray}
        ></LookAheadOverlay>
      </div>
    );
  } else {
    return (
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarWrapper}>
          <input
            placeholder="Search for a product"
            className={styles.searchBar}
            id="searchBar"
            onChange={searchChange}
          ></input>
          <div
            className={`${styles.searchButton} ${styles.searchButtonDisabled}`}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              type="button"
              role="button"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  }
}

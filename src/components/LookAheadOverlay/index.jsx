import React from 'react';
import styles from './LookAheadOverlay.module.css';
import { DisplayPriceSearchBar } from '../SearchProductPrice';
import { Link } from 'react-router-dom';
/**
 * component that creates the overlay for the look ahead searchbar with matching results, if there is no results the overlay will tell the user.
 * the component takes two props, the first is the search array with results based on the users search, the second is a state which is has a boolean value
 * if the search button is pressed the overlay will be hidden if the search button is not clicked the overlay is visible
 * @param {props} props
 */
export function LookAheadOverlay(props) {
  const { array, searchBtnClicked } = props;
  if (array.length >= 1) {
    return (
      <div className={styles.overlayWrapper}>
        <div
          className={
            searchBtnClicked ? styles.hiddenOverlay : styles.productOverlay
          }
        >
          {array.map((item) => (
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
    );
  } else {
    return (
      <div className={styles.overlayWrapper}>
        <div
          className={
            searchBtnClicked
              ? styles.hiddenOverlay
              : styles.productOverlayNoMatches
          }
        >
          <p>No matches</p>
        </div>
      </div>
    );
  }
}

import React from 'react';
import styles from './reviews.module.css';
/**
 * component that takes an arrray or object and displays its content in a review section
 * @param {array} props
 */
export function Reviews(props) {
  const { array } = props;
  if (!array || array.length < 1) {
    return (
      <div className={styles.noReviews}>
        <h2 className={styles.reviewHeading}>Reviews</h2>
        <p className={styles.reviewHeading}>No reviews on this product yet</p>
      </div>
    );
  } else {
    return (
      <section className={styles.reviewSection}>
        <h2 className={styles.reviewHeading}>Reviews</h2>
        {array.map((review) => (
          <div key={review.id} className={styles.reviewCon}>
            <div>
              <p>User: {review.username}</p>
              <p>Rating: {review.rating}/5</p>
            </div>
            <p>{review.description}</p>
          </div>
        ))}
      </section>
    );
  }
}

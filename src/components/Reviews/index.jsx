import React from 'react';
export function Reviews(props) {
  const { array } = props;
  if (!array) {
    return (
      <div>
        <h3>no reviews on this product yet</h3>
      </div>
    );
  } else {
    return (
      <div>
        {array.map((review) => (
          <div key={review.id}>
            <div>
              <p>{review.username}</p>
              <p>{review.rating}/5</p>
            </div>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

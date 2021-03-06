import React from 'react';
import '../ActiveRatings/rating.css';
import Rating from '../RatingWithHoc/RatingWithHoc';

export default function ActiveRatingsState({ ratings }) {
  return(
    <div>
      {ratings.map(rating => {
        return (
          <Rating key={rating.id} rating={rating} />
        )
      })}
    </div>
  )
}

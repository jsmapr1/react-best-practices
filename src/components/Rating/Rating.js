import React from 'react';
import './rating.css';

export default function Rating({ ratings }) {
  return(
    <div>
      {ratings.map(rating => {
        return (
          <div className="rating">
            <h3>Rating</h3>
            {Array(rating.rating).fill(<span />)}
            <div>Reviewer: {rating.reviewer}</div>
          </div>
        )
      })}
    </div>
  )
}

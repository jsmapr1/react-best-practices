import React from 'react';

import withOpen from '../withOpen/withOpen';
import '../ActiveRatings/rating.css';

export function Rating({ handleClick, open, rating }) {
  return (
    <div key={rating.id} className="rating">
      <h3>Rating</h3>
      {[...Array(rating.rating)].map((item, index) => (<span key={index}/>))}
      {!open && <div><a onClick={() => handleClick(rating.id)}>See Reviewer</a></div>}
      {open && <div onClick={() => handleClick(rating.id)}>Reviewer: {rating.reviewer}</div>}
    </div>
  )
}

export default withOpen(Rating);

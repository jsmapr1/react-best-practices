import React from 'react';
import { connect } from 'react-redux'
import { toggleRating } from '../../store/actions';
import './rating.css';

export function ActiveRatings({ activeRatings, onReviewClick, ratings }) {
  console.log(activeRatings);
  return(
    <div>
      {ratings.map(rating => {
        return (
          <div key={rating.id} className="rating">
            <h3>Rating</h3>
            {Array(rating.rating).fill(<span />)}
            {!activeRatings[rating.id] && <div><a onClick={() => onReviewClick(rating.id)}>See Reviewer</a></div>}
            {activeRatings[rating.id] && <div onClick={() => onReviewClick(rating.id)}>Reviewer: {rating.reviewer}</div>}
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps({ activeRatings }) {
  return {
    activeRatings
  }
}

function mapDispatchToProps(dispatch){
  return {
      onReviewClick: id => {
        dispatch(toggleRating(id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveRatings);

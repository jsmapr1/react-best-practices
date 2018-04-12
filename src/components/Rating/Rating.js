import React, { Component } from 'react';
import '../ActiveRatings/rating.css';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.onReviewClick = this.onReviewClick.bind(this);
  }

  onReviewClick(id) {
    this.setState(state => {
      return { open: !state.open }
    })
  }

  render() {
    const { rating } = this.props;
    return (
      <div key={rating.id} className="rating">
        <h3>Rating</h3>
        {Array(rating.rating).fill(<span />)}
        {!this.state.open && <div><a onClick={() => this.onReviewClick(rating.id)}>See Reviewer</a></div>}
        {this.state.open && <div onClick={() => this.onReviewClick(rating.id)}>Reviewer: {rating.reviewer}</div>}
      </div>
    );
  }
}

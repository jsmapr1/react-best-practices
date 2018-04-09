import React from 'react';
import './rating.css';
import Ansel from './ansel.jpg';

function getRating(count) {
  return Array(count).fill('').map(item => {
    return {
      rating: Math.ceil(Math.random() * 4),
      reviewer: ['Mike', 'Joe', 'Bill', 'Evan', 'Brian', 'Frank'][Math.floor(Math.random() * 6)]
    }
  })
}

const defaultPhoto = {
  src: Ansel,
  description: {
    name: 'Tetons and Snake River',
    photographer: 'Ansel Adams',
    location: 'Tetons'
  },
  ratings: getRating(10)
}

export default function Small({ photo = defaultPhoto}) {
  return(
    <div>
      <img src={photo.src}/>
      <div className="Description">
        <ul>
          {Object.keys(photo.description).map(key => {
            return (<li key={key}>{key}: {photo.description[key]}</li>)
          })}
        </ul>
      </div>
      <div>
        {photo.ratings.map(rating => {
          return (
            <div className="rating">
              <h3>Rating</h3>
              {Array(rating.rating).fill(<span />)}
              <div>Reviewer: {rating.reviewer}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

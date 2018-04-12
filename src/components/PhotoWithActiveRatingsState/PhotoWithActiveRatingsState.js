import React from 'react';

import PhotoDescription from '../PhotoDescription/PhotoDescription';
import ActiveRatingsState from '../ActiveRatingsState/ActiveRatingsState'
import Ansel from '../PhotoWithActiveRatings/ansel.jpg';

function getRating(count) {
  return Array(count).fill('').map((item, index) => {
    return {
      id: index,
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

export default function PhotoWithActiveRatingsState({ photo = defaultPhoto}) {
  return(
    <div>
      <img alt="Grand Tetons" src={photo.src}/>
      <PhotoDescription description={ photo.description} />
      <ActiveRatingsState ratings={photo.ratings} />
    </div>
  )
}

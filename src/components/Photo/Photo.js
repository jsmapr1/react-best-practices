import React from 'react';

import PhotoDescription from '../PhotoDescription/PhotoDescription';
import Rating from '../Rating/Rating';
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

export default function Photo({ photo = defaultPhoto}) {
  return(
    <div>
      <img src={photo.src}/>
      <PhotoDescription description={ photo.description} />
      <Rating ratings={photo.ratings} />
    </div>
  )
}

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import photoApp from '../../store/reducers';

import PhotoDescription from '../PhotoDescription/PhotoDescription';
import ActiveRatings from '../ActiveRatings/ActiveRatings'
import Ansel from './ansel.jpg'; const store = createStore(photoApp)

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

export default function Photo({ photo = defaultPhoto}) {
  return(
    <Provider store={store}>
      <div>
        <img alt="Grand Tetons" src={photo.src}/>
        <PhotoDescription description={ photo.description} />
        <ActiveRatings ratings={photo.ratings} />
      </div>
    </Provider>
  )
}

import React from 'react';

export default function PhotoDescription({ description }) {
  return(
    <div className="Description">
      <ul>
        {Object.keys(description).map(key => {
          return (<li key={key}>{key}: {description[key]}</li>)
        })}
      </ul>
    </div>
  )
}

import React from 'react';
import Photo from './Photo';

const PhotoList = (props) => {
  let photos;
  
  // If we have data, we map over it. If not, we show the "No Matches" message.
  if (props.data.length > 0) {
    photos = props.data.map(photo => (
      // Here we are passing the data down to the presentation component via prop
      <Photo 
        url={photo.webformatURL} 
        key={photo.id} 
        title={photo.tags}
      />
    ));
  } else {
    photos = (
      <li className="not-found">
        <h3>Tough crowd...</h3>
        <p>We searched the whole catalog but came up empty. Try again with a different search and let's see what happens!</p>
      </li>
    );
  }

  return (
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoList;

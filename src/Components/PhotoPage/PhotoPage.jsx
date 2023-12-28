import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoItems } from '../PhotosData';
import ScrollIntoView from '../ScrollToTop';

function PhotoPage() {
  // I used photo id to pull the items from js file. 
  const { photo_id } = useParams();
  const id = photo_id - 1; //
  const item = PhotoItems[id];
  const hashtags = item.hashtags;
  const hashtag = hashtags.split(','); // to separate hashtags

  return (
    <>
      <div className="photo-page">
        <div className="image">
          <img src={item.imgSrc} alt="" />
        </div>
        <div className="image-details">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <div className="categories">
            {hashtag.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className="photographer">
          <img src={item.photo} alt="" />
          <div className="photographer-detail">
            <h1>{item.photographer}</h1>
            <p>{item.photographer_info}</p>
          </div>
        </div>
      </div>
      <ScrollIntoView />
    </>
  );
}

export default PhotoPage;

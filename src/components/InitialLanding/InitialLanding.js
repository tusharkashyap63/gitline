import React from 'react';
import searchingGif from '../../images/animat-search.gif';
import './InitialLanding.scss';
export default function InitialLanding({ heading, subHeading, imgUrl }) {
  return (
    <div className='initialLanding'>
      <div className='initialLanding__imageContainer'>
        <img src={imgUrl} alt='landing' />
      </div>
      <div className='initialLanding__content'>
        <h2 className='initialLanding__content__heading'>{heading}</h2>
        <div className='initialLanding__content__subHeading'>
          <h4>{subHeading}</h4>
          <img
            src={searchingGif}
            alt='search gif'
            className='initialLanding__content__subHeading__gif'
          />
        </div>
      </div>
    </div>
  );
}

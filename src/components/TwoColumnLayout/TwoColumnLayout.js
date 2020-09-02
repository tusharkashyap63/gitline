import React from 'react';
import './TwoColumnLayout.scss';

export default function TwoColumnLayout({
  imgUrl,
  children,
  isImageBig = false,
}) {
  return (
    <div className='twoColumnLayout'>
      <div
        className={
          isImageBig
            ? 'twoColumnLayout__imageContainerSmall'
            : 'twoColumnLayout__imageContainerBig'
        }
      >
        <img src={imgUrl} alt='landing' />
      </div>

      <div className='twoColumnLayout__content'>{children}</div>
    </div>
  );
}

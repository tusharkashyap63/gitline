import React from 'react';

export default function TimelineItem({ repoName, date, description }) {
  const jsDate = new Date(date);

  return (
    <div className='timeline__item'>
      <div className='timeline__item__content'>
        <span className='timeline__item__content__time'>
          {jsDate.toLocaleDateString(navigator.language, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <h3 className='timeline__item__content__title'>{repoName}</h3>
        <p className='timeline__item__content__description'>{description ? description : 'No discription written'}</p>
      </div>
    </div>
  );
}

import React from 'react';

export default function TimelineItem({ repoName, date, description }) {
  const jsDate = new Date(date);

  return (
    <li className='timeline__item'>
      <div className='timeline__item__time'>
        <span>
          {jsDate.toLocaleDateString(navigator.language, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
      <div className='timeline__item__content'>
        <h3>{repoName}</h3>
        <p>{description ? description : 'No discription written'}</p>
      </div>
    </li>
  );
}

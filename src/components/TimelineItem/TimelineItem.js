import React from 'react';

export default function TimelineItem() {
  return (
    <li className='timeline__item'>
      <div className='timeline__item__time'>
        <span>June 2020</span>
      </div>
      <div className='timeline__item__content'>
        <h3>What Is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
    </li>
  );
}

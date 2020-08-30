import React from 'react';
import './Timeline.scss';
import TimelineItem from '../TimelineItem/TimelineItem';

export default function Timeline() {
  return (
    <div className='timeline'>
      <ul>
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </ul>
    </div>
  );
}

import React from 'react';
import './Timeline.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import Fetch from '../Fetch';

export default function Timeline({ login }) {
  return !login ? (
    <h1>Nothing</h1>
  ) : (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={RepoTimeline}
    />
  );

  function RepoTimeline({ data }) {
    return (
      <div className='timeline'>
        <ul>
          {Array.isArray(data) &&
            data.map((repo) => (
              <TimelineItem
                key={repo.id}
                repoName={repo.name}
                date={repo.created_at}
                description={repo.description}
              />
            ))}
        </ul>
      </div>
    );
  }
}

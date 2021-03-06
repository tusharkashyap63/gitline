import React from 'react';
import './Timeline.scss';
import TimelineItem from '../TimelineItem/TimelineItem';
import Fetch from '../Fetch';
import NotFound from '../NotFound/NotFound';

export default function Timeline({ login }) {
  return !login ? (
    <h3 className='timelineLanding'>
      Historians take events and place them on a timeline. This shows the
      chronology of a span of time. By doing this, the relationship between
      events can be seen. Patterns can emerge that might not be seen without the
      timeline.
    </h3>
  ) : (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos?sort=created`}
      renderSuccess={RepoTimeline}
      renderNotFound={<NotFound message='No timeline to show' />}
    />
  );

  function RepoTimeline({ data }) {
    return (
      <div className='timeline'>
        <h1 className='timeline__heading'>Repositories</h1>
        {Array.isArray(data) &&
          data.map((repo) => (
            <TimelineItem
              key={repo.id}
              repoName={repo.name}
              date={repo.created_at}
              description={repo.description}
              login={login}
            />
          ))}
      </div>
    );
  }
}

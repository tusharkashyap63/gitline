import React, { useState } from 'react';
import RepositoryReadme from '../RepositoryReadme/RepositoryReadme';

export default function TimelineItem({ repoName, date, description, login }) {
  const [showReadme, setShowReadme] = useState(false);
  const jsDate = new Date(date);

  const openReadme = () => {
    setShowReadme(true);
  };

  const closeReadme = () => {
    setShowReadme(false);
  };

  return (
    <div className='timeline__item'>
      <div className='timeline__item__content' onClick={openReadme}>
        <span className='timeline__item__content__time'>
          {jsDate.toLocaleDateString(navigator.language, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <h3 className='timeline__item__content__title'>{repoName}</h3>
        <p className='timeline__item__content__description'>
          {description ? description : 'No discription written'}
        </p>
      </div>
      {showReadme ? (
        <div className='repoModal'>
          <RepositoryReadme
            login={login}
            repo={repoName}
            closeReadme={closeReadme}
          />
        </div>
      ) : null}
    </div>
  );
}

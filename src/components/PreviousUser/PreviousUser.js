import React from 'react';
import './PreviousUser.scss';

export default function PreviousUser({ prevUser, setLogin }) {
  const setLoginWithPrevUser = () => {
    setLogin(prevUser);
  };

  return (
    <p className='prevUser'>
      Previously Searched User:{' '}
      <button className='prevUser__button' onClick={setLoginWithPrevUser}>
        {prevUser}{' '}
      </button>
    </p>
  );
}

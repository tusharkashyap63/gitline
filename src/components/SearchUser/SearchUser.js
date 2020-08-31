import React from 'react';
import './SearchUser.scss';
import { useInput } from '../../hooks/useInput';

export default function SearchUser({ login, setLogin }) {
  const [searchTermProps, clearSearchTerm] = useInput(login);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(searchTermProps.value);
    clearSearchTerm();
  };

  return (
    <form className='searchForm'>
      <input
        {...searchTermProps}
        className='searchForm__input'
        type='text'
        placeholder='Enter Github Username'
        required
      />
      <button
        className='searchForm__button'
        type='submit'
        onClick={handleSubmit}
      >
        Get Timeline
      </button>
    </form>
  );
}

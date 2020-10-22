import React from 'react';
import SearchUser from '../SearchUser/SearchUser';
import './Navbar.scss';

export default function Navbar({ login, setLogin, setPrevUser }) {
  return (
    <nav className='navbar'>
      <div className='navbar__brand'>GitLine</div>
      <SearchUser login={login} setLogin={setLogin} setPrevUser={setPrevUser} />
    </nav>
  );
}

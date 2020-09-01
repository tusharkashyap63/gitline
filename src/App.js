import React, { useState } from 'react';
import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import Timeline from './components/Timeline/Timeline';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [login, setLogin] = useState('');

  return (
    <div className='pink'>
      <SearchUser login={login} setLogin={setLogin} />
      <UserDetails login={login} />
      <Timeline login={login} />
    </div>
  );
}

export default App;

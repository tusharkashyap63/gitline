import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchUser from './components/SearchUser/SearchUser';
import Timeline from './components/Timeline/Timeline';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [login, setLogin] = useState('');

  return (
    <div>
      <SearchUser login={login} setLogin={setLogin} />
      <div style={{ display: 'flex' }}>
        <Header />
        <UserDetails login={login} />
      </div>
      <Timeline login={login} />
    </div>
  );
}

export default App;

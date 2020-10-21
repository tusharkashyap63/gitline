import React, { useState } from 'react';
import './App.css';
import Timeline from './components/Timeline/Timeline';
import UserDetails from './components/UserDetails/UserDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [login, setLogin] = useState('kentcdodds');

  return (
    <div className='pink'>
      <Navbar login={login} setLogin={setLogin} />
      <UserDetails login={login} />
      <Timeline login={login} />
    </div>
  );
}

export default App;

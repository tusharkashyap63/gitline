import React, { useState } from 'react';
import './App.css';
import Timeline from './components/Timeline/Timeline';
import UserDetails from './components/UserDetails/UserDetails';
import Navbar from './components/Navbar/Navbar';
import PreviousUser from './components/PreviousUser/PreviousUser';
import Footer from './components/Footer/Footer';

function App() {
  const [login, setLogin] = useState('');
  const [prevUser, setPrevUser] = useState('');

  return (
    <div className='pink'>
      <Navbar login={login} setLogin={setLogin} setPrevUser={setPrevUser} />
      <PreviousUser prevUser={prevUser} setLogin={setLogin} />
      <UserDetails login={login} />
      <Timeline login={login} />
      <Footer />
    </div>
  );
}

export default App;

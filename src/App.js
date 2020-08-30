import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchUser from './components/SearchUser/SearchUser';
import Timeline from './components/Timeline/Timeline';
import UserDetails from './components/UserDetails/UserDetails';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch(
    'https://api.github.com/users/tusharkashyap63'
  );

  return (
    <div>
      <SearchUser />
      <div style={{ display: 'flex' }}>
        <Header />
        <UserDetails userData={data} loading={loading} />
      </div>
      <Timeline />
    </div>
  );
}

export default App;

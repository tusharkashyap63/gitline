import React from 'react';
import './UserDetails.scss';
import Fetch from '../Fetch';

export default function UserDetails({ login }) {
  return !login ? (
    <h1>jksahdk</h1>
  ) : (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetailsCard}
    />
  );

  function UserDetailsCard({ data }) {
    console.log(data);

    return (
      <section className='userDetails'>
        <div className='userDetails__image'>
          <img src={data.avatar_url} alt={`${data.login} avatar`} />
        </div>
        <p className='userDetails__username'>Username: {data.login}</p>
        <p className='userDetails__followers'>Followers: {data.followers}</p>
        <p className='userDetails__publicRepos'>
          Public Repositories: {data.public_repos}
        </p>
      </section>
    );
  }
}

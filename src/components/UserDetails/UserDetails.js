import React from 'react';
import './UserDetails.scss';

export default function UserDetails({ userData, loading }) {
  console.log(userData);

  return !loading ? (
    <section className='userDetails'>
      <div className='userDetails__image'>
        <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
      </div>
      <p className='userDetails__username'>Username: {userData.login}</p>
      <p className='userDetails__followers'>Followers: {userData.followers}</p>
      <p className='userDetails__publicRepos'>
        Public Repositories: {userData.public_repos}
      </p>
    </section>
  ) : (
    <p>Nothing to show</p>
  );
}

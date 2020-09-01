import React from 'react';
import './UserDetails.scss';
import Fetch from '../Fetch';
import InitialLanding from '../InitialLanding/InitialLanding';
import imgSrc from '../../images/undraw_developer_activity_bv83 (2).svg';

export default function UserDetails({ login }) {
  return !login ? (
    <InitialLanding
      heading='Nothing to show'
      subHeading='Start searching for profiles'
      imgUrl={imgSrc}
    />
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
        <div className='userDetails__card'>
          <div className='userDetails__card__image'>
            <img src={data.avatar_url} alt={`${data.login} avatar`} />
          </div>
          <div className='userDetails__card__content'>
            <p className='userDetails__card__content__name'>{data.name}</p>
            {data.bio ? (
              <p className='userDetails__card__content__bio'>{data.bio}</p>
            ) : null}
            <p className='userDetails__card__content__username'>
              Username: {data.login}
            </p>
            <p className='userDetails__card__content__followers'>
              Followers: {data.followers}
            </p>
            <p className='userDetails__card__content__publicRepos'>
              Public Repositories: {data.public_repos}
            </p>
          </div>
        </div>
        <div className='userDetails__links'>
          <a href={data.html_url}>Visit on Github</a>
        </div>
      </section>
    );
  }
}

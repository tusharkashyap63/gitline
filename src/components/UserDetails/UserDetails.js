import React from 'react';
import './UserDetails.scss';
import Fetch from '../Fetch';
import searchingGif from '../../images/animat-search.gif';
import TwoColumnLayout from '../TwoColumnLayout/TwoColumnLayout';
import woman from '../../images/Asset 1.svg';
import ilCoding from '../../images/Asset 150.png';

export default function UserDetails({ login }) {
  return !login ? (
    <TwoColumnLayout imgUrl={woman}>
      <h2 className='twoColumnLayout__content__heading'>Nothing to show</h2>
      <div className='twoColumnLayout__content__subHeading'>
        <h4>Start searching for profiles</h4>
        <img
          src={searchingGif}
          alt='search gif'
          className='twoColumnLayout__content__subHeading__gif'
        />
      </div>
    </TwoColumnLayout>
  ) : (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetailsCard}
    />
  );

  function UserDetailsCard({ data }) {
    console.log(data);

    return (
      <TwoColumnLayout imgUrl={ilCoding} isImageBig={true}>
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
      </TwoColumnLayout>
    );
  }
}

import React from 'react';
import './UserDetails.scss';
import Fetch from '../Fetch';
import searchingGif from '../../images/animat-search.gif';
import TwoColumnLayout from '../TwoColumnLayout/TwoColumnLayout';
import woman from '../../images/Asset 1.svg';
import ilCoding from '../../images/Asset 150.png';
import avatarIllustration from '../../images/Asset 17.svg';
import { Sparkle, SparklesCanvas } from '@robertaron/react-sparkles';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Loading from '../Loading/Loading';

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
      laodingFallback={<Loading />}
      renderSuccess={UserDetailsCard}
    />
  );

  function UserDetailsCard({ data }) {
    return (
      <TwoColumnLayout imgUrl={ilCoding} isImageBig={true}>
        <section className='userDetails'>
          <div className='userDetails__card'>
            <div className='userDetails__card__heading'>
              <div style={{ position: 'relative' }} className='container'>
                <h3>User Profile</h3>
                <SparklesCanvas>
                  <Sparkle variant={1} right='0px' top='-50%' delayMS={1000} />
                  <Sparkle variant={0} right='0px' top='50%' delayMS={300} />
                  <Sparkle variant={2} left='40%' top='-50%' delayMS={500} />
                  <Sparkle variant={3} left='0' top='-50%' />
                  <Sparkle variant={2} left='0' top='50%' />
                </SparklesCanvas>
              </div>
              <img src={avatarIllustration} alt='avatar illustration' />
            </div>

            <div className='userDetails__card__imageContainer'>
              <div className='userDetails__card__imageContainer__image'>
                <img src={data.avatar_url} alt={`${data.login} avatar`} />
              </div>
            </div>
            <div className='userDetails__card__content'>
              <div style={{ marginBottom: '7px' }}>
                <p className='userDetails__card__content__name'>{data.name}</p>
                {data.bio ? (
                  <p className='userDetails__card__content__bio'>
                    {data.bio.length > 60
                      ? data.bio.substring(0, 60) + '...'
                      : data.bio}
                  </p>
                ) : null}
              </div>
              <p className='userDetails__card__content__username'>
                <span className='userDetails__card__content__key'>
                  Username:{' '}
                </span>
                {data.login}
              </p>
              <p className='userDetails__card__content__followers'>
                <span className='userDetails__card__content__key'>
                  Followers:{' '}
                </span>
                {data.followers}
              </p>
              <p className='userDetails__card__content__publicRepos'>
                <span className='userDetails__card__content__key'>
                  Public Repositories:{' '}
                </span>
                {data.public_repos}
              </p>
              <div className='userDetails__card__content__links'>
                <div className='userDetails__card__content__links__link'>
                  <a href={data.html_url}>
                    <AiFillGithub className='userDetails__card__content__links__link__icon' />
                    <span className='userDetails__card__content__links__link__tooltip'>
                      GitHub
                    </span>
                  </a>
                </div>
                {data.twitter_username && (
                  <div className='userDetails__card__content__links__link'>
                    <a href={`https://twitter.com/${data.twitter_username}`}>
                      <AiFillTwitterCircle className='userDetails__card__content__links__link__icon' />
                      <span className='userDetails__card__content__links__link__tooltip'>
                        Twitter
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </TwoColumnLayout>
    );
  }
}

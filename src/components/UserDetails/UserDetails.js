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
import Tooltip from '../Tooltip/Tooltip';
import NotFound from '../NotFound/NotFound';

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
      renderNotFound={<NotFound message='No such user' />}
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
                  data.bio.length > 60 ? (
                    <Tooltip
                      content={
                        <>
                          <h2>BIO</h2>
                          <p>{data.bio}</p>
                        </>
                      }
                      direction='right'
                      delay='300'
                    >
                      <p>{data.bio.substring(0, 60) + '...'}</p>
                    </Tooltip>
                  ) : (
                    <p>{data.bio}</p>
                  )
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
                    <Tooltip content='GitHub' direction='bottom'>
                      <AiFillGithub className='userDetails__card__content__links__link__icon' />
                    </Tooltip>
                  </a>
                </div>
                {data.twitter_username && (
                  <div className='userDetails__card__content__links__link'>
                    <a href={`https://twitter.com/${data.twitter_username}`}>
                      <Tooltip content='Twitter' direction='bottom'>
                        <AiFillTwitterCircle className='userDetails__card__content__links__link__icon' />
                      </Tooltip>
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

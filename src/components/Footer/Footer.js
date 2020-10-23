import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      Made with a ton of{' '}
      <span role='img' aria-label='heart emoji'>
        💜
      </span>{' '}
      by{' '}
      <a className='footer__link' href='https://twitter.com/tusharkashyap63'>
        tusharkashyap63
      </a>
      .
    </footer>
  );
}

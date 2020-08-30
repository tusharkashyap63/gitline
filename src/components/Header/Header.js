import React from 'react';
import './Header.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__heading'>
        <span className='header__heading__unfocusedText'>HISTORY OF</span>
        <div className='header__heading__focusedText'>
          <div className='header__heading__focusedText__flexContainer'>
            <p className='header__heading__focusedText__flexContainer__top'>
              OPEN
            </p>
            <MdKeyboardArrowRight className='header__heading__focusedText__flexContainer__arrow' />
          </div>
          <p className='header__heading__focusedText__bottom'>SOURCE</p>
        </div>
      </h1>
      <p className='header__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        facilisis faucibus ullamcorper. In rutrum sit amet tellus ac malesuada.
        Ut feugiat purus sed erat porta, et ornare urna convallis. Nam sed est
        ornare, venenatis erat at, hendrerit leo. Donec a sagittis nisi, ac
        tincidunt eros.
      </p>
    </header>
  );
}

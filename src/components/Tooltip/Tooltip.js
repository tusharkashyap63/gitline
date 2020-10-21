import React, { useState } from 'react';
import './Tooltip.scss';

export default function Tooltip(props) {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div className='tooltip' onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (
        <div className={`tooltip__tip ${props.direction || 'top'}`}>
          {props.content}
        </div>
      )}
    </div>
  );
}

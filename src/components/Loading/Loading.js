import React from 'react';
import './Loading.scss';

export default function Loading() {
  return (
    <div className="container">
      <div className="circle">
        <div className="bread crust">
          <div className="top-bread"></div>
          <div className="bottom-bread"></div>
          <div className="bread crumb">
            <div className="top-bread"></div>
            <div className="bottom-bread"></div>
            <div className="spread">
              <div className="pb">
              </div>
              <div className="jam">
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="wait">
        <h2>Just a sec...</h2></div>
    </div>
  )
}

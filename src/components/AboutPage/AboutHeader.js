import React from 'react'

import './AboutHeader.css'

export default () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__bgdots">
          <img alt="" src="/assets/inner_dots.png" />
        </div>
        <div className="hero__bg">
          <img src="/assets/FLY2.svg" alt="" />
        </div>
        <div className="container">
          <h1 className="hero__title">About us</h1>
          <div className="hero__text">
            <p className="hero__item"></p>
          </div>
        </div>
      </div>
    </section>
  )
}

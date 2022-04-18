import React from 'react'
import Clutch from './clutch'
import Slider from './slider'

import './index.css'

export default () => {
  return (
    <div
      className="testimonials-two call-to-action cta bg_dark_l"
      id="testimonials"
    >
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>What customer says</h2>
        </div>
        <div className="row customer-saying-row">
          <Slider />
          <Clutch />
        </div>
      </div>
    </div>
  )
}

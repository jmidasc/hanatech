import React from 'react'

export default () => {
  return (
    <section className="plans-section" id="pricing">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>
            Working with Flyoutsourcing is simple with our 4-step developer
            hiring process
          </h2>
        </div>

        <div className="row clearfix">
          <div className="plan-column col-md-3 col-sm-6 col-xs-12">
            <div className="inner-box mh-305">
              <div>
                <span className="new_step_l">1</span>
              </div>
              <h3 className="fs-18">
                {' '}
                Let us know what type of developers and how many you are looking
                for.
              </h3>
            </div>
          </div>
          <div className="plan-column col-md-3 col-sm-6 col-xs-12">
            <div className="inner-box mh-305">
              <div>
                <span className="new_step_l">2</span>
              </div>
              <h3 className="fs-18">
                We will send you the candidates’ profiles that fit your needs.{' '}
              </h3>
            </div>
          </div>
          <div className="plan-column col-md-3 col-sm-6 col-xs-12">
            <div className="inner-box mh-305">
              <div>
                <span className="new_step_l">3</span>
              </div>
              <h3 className="fs-18">
                Upon picking your preferred candidates, you will personally
                interview each candidate.
              </h3>
            </div>
          </div>
          <div className="plan-column col-md-3 col-sm-6 col-xs-12">
            <div className="inner-box mh-305">
              <div>
                <span className="new_step_l">4</span>
              </div>
              <h3 className="fs-18">
                When you choose the right remote developers they start working
                on your project right away.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

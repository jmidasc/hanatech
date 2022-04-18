import React from 'react'

export default () => {
  return (
    <section className="plans-section" id="pricing">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>
            Drive 70% savings and efficiency when you work with Flyoutsourcing
          </h2>
        </div>

        <div className="row clearfix">
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <i className="fas fa-coins icons_new_20" aria-hidden="true"></i>
              </div>
              <h3>Save as much as 70% on operational expenses</h3>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <i className="fas fa-clock icons_new_20" aria-hidden="true"></i>
              </div>
              <h3>
                Only 2-5 days
                <br /> hiring process
              </h3>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <i className="fas fa-users icons_new_20" aria-hidden="true"></i>
              </div>
              <h3>
                100% customer satisfaction
                <br />
                according customers review
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

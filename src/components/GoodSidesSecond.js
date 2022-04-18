import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFileAlt, faHeadset, faMoneyBillAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default () => {
  return (
    <section className="features-section-two section-bel" id="">
      <div className="auto-container">
        <div className="features-container clearfix">
          <div className="row clearfix">
            <div className="text-column col-lg-12">
              <h2 className="margin_title">
                We are fully responsible for the quality of work our developers
              </h2>
            </div>

            <div className="text-column col-md-6 col-sm-12 col-xs-12">
              <div className="inner">
                <div className="text" style={{ textAlign: 'justify'}}>
                  <img src="/assets/minsk2.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="inner">
                <div className="row clearfix">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box-bel">
                      <div className="icon-container bg_4">
                        <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>
                      </div>
                      <div className="text text_belarus">
                        Guaranteed fixed and best rates
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box-bel">
                      <div className="icon-container bg_6">
                        <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                      </div>
                      <div className="text text_belarus">
                        Secure NDA and contract
                        <br /> under US protection
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box-bel">
                      <div className="icon-container bg_5">
                        <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                      
                      </div>
                      <div className="text text_belarus">
                        24/7 service and support
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box-bel">
                      <div className="icon-container bg_3">
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                      
                      </div>
                      <div className="text text_belarus">
                        Hire developers as long as you need{' '}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box-bel">
                      <div className="icon-container bg_1">
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                      
                      </div>
                      <div className="text text_belarus">Free pilot period</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

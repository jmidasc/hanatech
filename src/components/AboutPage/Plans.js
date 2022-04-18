import { faCoins, faFileAlt, faHome, faMoneyBillAlt, faUserCheck, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {FaDev} from "react-icons/fa";

export default () => {
  return (
    <section className="plans-section" id="">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>Benefits work with us</h2>
        </div>

        <div className="row clearfix">
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_1">
                  <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>
                </div>
                <div className="text text_belarus">
                  Transparent low rates
                  <br /> at fixed terms
                </div>
              </div>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_2">
                  <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                </div>
                <div className="text text_belarus">
                  Secure NDA and service
                  <br /> contract under China protection
                </div>
              </div>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_3">
                  <FaDev />
                </div>
                <div className="text text_belarus">
                  Full-cycle
                  <br /> development capabilities
                </div>
              </div>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_4">
                  <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                </div>
                <div className="text text_belarus">
                  Free
                  <br /> pilot period
                </div>
              </div>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_5">
                  <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>
                </div>
                <div className="text text_belarus">
                  24/7 <br />
                  service and support
                </div>
              </div>
            </div>
          </div>
          <div className="plan-column col-md-4 col-sm-4 col-xs-12">
            <div className="inner-box">
              <div className="inner-box-bel">
                <div className="icon-container bg_6">
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </div>
                <div className="text text_belarus">
                  Physical offices <br />
                  in the China &amp; Belarus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faMoneyBillAlt, faUsers, faSearchPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default () => {
  return (
    <section className="clients-section bg_dark_l" id="features">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>Why choose HanaTech</h2>
        </div>

        <div className="row clearfix">
          <div className="service-style-three col-md-offset-1 col-md-2 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faSearchPlus} style={{fontSize: '40px', color: '#0792db'}}></FontAwesomeIcon>
              </div>
              <h3>Scalability</h3>
              <div className="text">
                Hire a team you can scale up and down depending on business need
              </div>
            </div>
          </div>

          <div className="service-style-three col-md-2 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faMoneyBillAlt} style={{fontSize: '40px', color: '#0792db'}}></FontAwesomeIcon>
              </div>
              <h3>Reduced operating costs</h3>
              <div className="text">
                Save up to 70% while getting better operational quality and
                efficiency
              </div>
            </div>
          </div>
          <div className="service-style-three col-md-2 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} style={{fontSize: '40px', color: '#0792db'}}></FontAwesomeIcon>
              </div>
              <h3>Reliable dedicated development team</h3>
              <div className="text">
                Our team is comprised of the top software developers in Belarus
              </div>
            </div>
          </div>
          <div className="service-style-three col-md-2 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faFileExport} style={{fontSize: '40px', color: '#0792db'}}></FontAwesomeIcon>
              </div>
              <h3>Easy to implement</h3>
              <div className="text">
                Get a team of experts working on your projects in a matter of
                days
              </div>
            </div>
          </div>
          <div className="service-style-three col-md-2 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faStopwatch} style={{fontSize: '40px', color: '#0792db'}}></FontAwesomeIcon>
              </div>
              <h3>Faster production time</h3>
              <div className="text">
                Extra developers means accelerated projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import './slider.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faUser } from '@fortawesome/free-solid-svg-icons';
export default () => {

  return (
    <div className="customer-saying-slider">
      <div className="slides">
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={2000}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
              >
          <div className="slider-inner">
            <div className="quote-icon"></div>
            <div className="text" style={{ marginBottom: '45px' }}>
              <b>
                Profile Builder for Large-Scale Stock Exchange Platform{' '}
                <a href="https://clutch.co/profile/flyoutsourcing#review-1181877">
                  <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                </a>
              </b>
              <br />
              <b>Project summary:</b> <br />
              HanaTech supplemented the internal team's development
              capabilities, creating a profile builder for a large technical stock
              exchange solution. The builder would develop financial reports in
              real-time.
              <br />
              <br />
              <b>Feedback summary:</b> <br />
              Despite the complexity of the project, HanaTech managed to
              integrate external services into the solution and enhance its
              overall performance. The team developed the platform quickly and
              even implemented new business features. They communicated openly
              with all parties, including the end client.
            </div>
            <div className="quote-info">
              <figure className="thumb img-circle">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </figure>
              <h4>Kevin Peterson</h4>
              <div className="designation">Feb. - Sept. 2019</div>
            </div>
          </div>
          <div className="slider-inner">
            <div className="quote-icon"></div>
            <div className="text">
              <b>
                Software Development for IT Tech Developer{' '}
                <a href="https://clutch.co/profile/flyoutsourcing#review-1109367">
                  <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                </a>
              </b>
              <br />
              <b>Project summary:</b> <br />
              HanaTech developed a complex client-owned extension to the
              Microsoft Office suite that allows a network of around 10,000
              corporate clients to manage their own schedules and interact with
              one another's.
              <br />
              <br />
              <b>Feedback summary:</b> <br />
              The product has made client operations more efficient across the
              board. HanaTech is flexible and professional, maintaining
              constant communication throughout the project and prioritizing
              incorporating client feedback into their work.
            </div>
            <div className="quote-info">
              <figure className="thumb img-circle">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </figure>
              <h4>Kevin Peterson</h4>
              <div className="designation">Feb. - Sept. 2019</div>
            </div>
          </div>
          <div className="slider-inner">
            <div className="quote-icon"></div>
            <div className="text">
              <b>
                Web application rewrite{' '}
                <a href="https://clutch.co/profile/flyoutsourcing#review-1181877">
                  <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                </a>
              </b>
              <br />
              <b>Project summary:</b> <br />
              We have hired a small team to rewrite our application that mostly
              based on SQL procedures. Unfortunately, it’s hard to support and new
              client on-boarding process is always time consuming... <br />
              <br />
              <b>Feedback summary:</b> <br />
              We have been working with the HanaTech within last 6 month.
              The have re-wrote core components and what is more important for us,
              have setup appropriate continuous integration and delivery
              processes. It’s probably too early feedback, but we are happy and
              will continue to grab your experience! Thanks!
            </div>
            <div className="quote-info">
              <figure className="thumb img-circle">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </figure>
              <h4>Robert Maison</h4>
              <div className="designation">Mar. - Sept. 2019</div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

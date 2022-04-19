import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default () => {
  return (
    <section className="features-section" id="">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <h2>Who We Are?</h2>
        </div>
        <div
          className="row clearfix"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div className='feature-carousel' style={{width:'700px', boxShadow: '3px 3px 15px 0px rgb(0 0 0 / 15%)'}}>
            <Carousel
              infiniteLoop
              autoPlay
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              swipeable={true}
              emulateTouch={true}
            >
              <div>
                <img src="/assets/01.jpeg" />
              </div>
              <div>
                <img src="/assets/02.jpeg" />
              </div>
              <div>
                <img src="/assets/03.jpeg" />
              </div>
            </Carousel>
          </div>
          <div className="features-column col-md-4 col-sm-12 col-xs-12">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="text">
                HanaTech is a custom offshore software development
                  company that provides nimble and results-driven technology and
                  staffing solutions to tech software companies, startups, and
                  SMEs. We handle your full software development life cycle
                  operations so that you can focus more on critical tasks.{' '}
                </div>
              </div>
            </div>
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="text">
                  Good talent is hard to come by. When you do business with us,
                  you get access to our team of of agile software and testing
                  engineers who have an average of 6 years of experience.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

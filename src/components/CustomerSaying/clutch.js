import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './clutch.css';
export default () => {

  return (
    <div className="clutch">
      <div className='clutch-header'>Clutch</div>
      <div className='clutch-content'>
        <div className='clutch-subheader'>HanaTech</div>
        <div className='clutch-formatter'>
          <div className='star-container'>
            <div className='star-one'>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <div className='star-one'>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <div className='star-one'>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <div className='star-one'>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <div className='star-one'>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
          </div>
          <div className='review-header'>3 REVIEWS</div>
        </div>
        <div className='clutch-subcontainer'>
          <Carousel
            infiniteLoop
            showStatus={false}
            >
            <div className='text-container'>
              <div className='text-content'>
                "HanaTech truly had some of the most professional people I’ve worked with."
              </div>
              <div className='text-author'>
                Project Manager, Publishing Company
              </div>
            </div>
            <div className='text-container'>
              <div className='text-content'>
                "HanaTech truly had some of the most professional people I’ve worked with."
              </div>
              <div className='text-author'>
                Project Manager, Publishing Company
              </div>
            </div>
            <div className='text-container'>
              <div className='text-content'>
                "HanaTech truly had some of the most professional people I’ve worked with."
              </div>
              <div className='text-author'>
                Project Manager, Publishing Company
              </div>
            </div>
          </Carousel>     
        </div>
      </div>
    </div>
  )
}

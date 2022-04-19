import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { FaHeading } from "react-icons/fa";
const logoStyle = {
  color:'#ffffff', 
  fontSize:'28px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
}

export default () => {
  return (
    <footer
      className="footer-style-three new_footer-style-three"
      id="contact"
      itemScope=""
      itemtype="https://schema.org/Organization"
    >
      <img
        src="/assets/FLYfooter.png"
        alt=""
        className="new_footer-style-three_img_position"
        data-mtbv9gash=""
      />
      <div className="footer-upper new_footer-upper">
        <div className="auto-container">
          <div className="new_footer-logo_wrapper">
            <div className="logo" style={logoStyle}>
              <FaHeading style={{fontSize:'42px', marginTop:''}}/>
              <div>ana Sci-Tech</div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="big-column col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                <div className="footer-column col-md-12 col-sm-6 col-xs-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-inner">
                      <div className="links">
                        <p className="new_footer_heading">China</p>
                        <div className="footer-upper_div new_footer-upper_div">
                          <p
                            itemprop="address"
                            itemScope=""
                            itemtype="http://schema.org/PostalAddress"
                          >
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            <sapn itemprop="addressLocality">
                            &nbsp;China{' '}
                              <sapn itemprop="streetAddress">
                                {' '}
                                214, 2th Floor, Building 315-316, Wangjing West Park, Chaoyang, Beijing, China 北京市朝阳区望京西园三区315-316号楼2层E号内214,
                              </sapn>
                            </sapn>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={ faPhoneFlip }></FontAwesomeIcon>
                            <a
                              className="contacts_color"
                              itemprop="telephone"
                              content="+8615712806775"
                              href="tel:+8615712806775"
                            >
                              &nbsp;+8615712806775
                            </a>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <a
                              className="contacts_color"
                              itemprop="email"
                              href="mailto:hi@HanaTech.com"
                            >
                              &nbsp;hi@HanaTech.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom new_footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="bottom-column col-md-12 col-sm-12 col-xs-12">
              <div className="copyright">
                Copyright © 2018-2019, HanaTech.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

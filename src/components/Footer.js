import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

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
            <img
              src="/assets/newfooterflyoutsourcing_logo.png"
              alt=""
              className="new_expertiseicon_margin"
            />
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

            <div className="big-column col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                <div className="footer-column col-md-7 col-sm-12 col-xs-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-inner">
                      <div className="links">
                        <p className="new_footer_heading">Belarus</p>
                        <div className="footer-upper_div new_footer-upper_div">
                          <p
                            itemprop="address"
                            itemScope=""
                            itemtype="http://schema.org/PostalAddress"
                          >
                          <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            <sapn itemprop="addressLocality">
                            &nbsp;Belarus{' '}
                              <sapn itemprop="streetAddress">
                                Grodno, Kirova 3 suit 4
                              </sapn>
                            </sapn>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={ faPhoneFlip }></FontAwesomeIcon>
                            <a
                              className="contacts_color"
                              itemprop="telephone"
                              content="+1720 296 0727"
                              href="tel:+1720 296 0727"
                            >
                              &nbsp;+1720 296 0727
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
                <div className="footer-column col-md-5 col-sm-12 col-xs-12">
                  <div className="footer-widget follow-widget">
                    <div className="widget-inner">
                      <p className="q2 new_footer_heading new_q2">Follow</p>

                      <div className="social-links">
                        <ul className="clearfix q1">
                          <li style={{display: 'none'}}>
                            <link
                              itemprop="url"
                              href="http://www.your-company-site.com"
                            />
                          </li>
                           <li>
                            <a
                              itemprop="sameAs"
                              href="https://fb.me/HanaTech"
                            >
                              <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              itemprop="sameAs"
                              href="https://twitter.com/HanaTech"
                            >
                              <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              itemprop="sameAs"
                              href="http://Www.instagram.com/HanaTech/"
                            >
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              itemprop="sameAs"
                              href="http://linkedin.com/company/flyoutsourcing1"
                            >
                              <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { MdOutlineContactPhone } from 'react-icons/md'
import React from 'react';

const logoStyle = {
  height: '75px',
  color:'#ffffff', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
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
              <div style={{fontSize:'40px', fontWeight:'800'}}>Beijing Hana Sci-Tech Trade LTD</div>
              <div style={{fontSize:'28px', fontWeight:'500'}}>北京哈纳科贸有限公司</div>
            
            </div>
          </div>
          <div className="row clearfix">
            <div className="big-column col-md-6 col-sm-12 col-xs-12" style={{width: '100%'}}>
              <div className="row clearfix">
                <div className="footer-column col-md-12 col-sm-6 col-xs-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-inner">
                      <div className="links">
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
                                214, 2th Floor, Building 315-316, Wangjing West Park, Chaoyang, Beijing, China
                                <br/>&nbsp;&nbsp;&nbsp;北京市朝阳区望京西园三区315-316号楼2层E号内214,
                              </sapn>
                            </sapn>
                          </p>
                          <p style={{display:'flex', alignItems:'center'}}>
                            <MdOutlineContactPhone/>
                            <a>&nbsp;Wang Xu Dong,</a>
                            <a
                              className="contacts_color"
                              itemprop="telephone"
                              content="+8615712806775"
                              href="tel:+8615712806775"
                            >
                              &nbsp;+8615712806775
                            </a>
                          </p>
                          <p style={{display:'flex', alignItems:'center'}}>
                            <MdOutlineContactPhone/>
                            <a>&nbsp;Yuan Zi You, Flat-203, W Sub Metor, Investment Park-1, Dubai, UAE, </a>
                            <a
                              className="contacts_color"
                              itemprop="telephone"
                              content="+971524215678"
                              href="tel:+971524215678"
                            >
                              &nbsp;+971524215678
                            </a>
                          </p>
                          <p>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <a
                              className="contacts_color"
                              itemprop="email"
                              href="mailto:hi@HanaTech.io"
                            >
                              &nbsp;hi@HanaTech.io
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
                Copyright © 2018-2022, HanaTech.io
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

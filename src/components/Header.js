import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHeading } from 'react-icons/fa'

const logoStyle = {
  color:'#008ed5', 
  fontSize:'28px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
}

export default ({ headerType }) => {
  const navigator = useNavigate()

  return (
    <header
      className="main-header header-style-two"
      style={{ position: 'fixed' }}
    >
      <div className="main-box">
        <div className="auto-container">
          <div className="outer-container clearfix">
            <div className="logo-box">
              <div className="logo" style={logoStyle}>
                <FaHeading style={{fontSize:'42px', marginTop:''}}/>
                <div>ana Sci-Tech</div>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <nav className="main-menu">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse scroll-nav clearfix">
                  <ul className="navigation clearfix">
                    {headerType === 'first-page' && (
                      <li>
                        <a
                          href=""
                          onClick={() => {
                            navigator('/about-page', { replace: false })
                          }}
                        >
                          About us
                        </a>
                      </li>
                    )}
                    {headerType === 'about-page' && (
                      <li>
                        <a
                          href=""
                          onClick={() => {
                            navigator('/', { replace: false })
                          }}
                        >
                          First Page
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>

              <div className="other-links hidden-xs">
                <a href="" className="header_links">
                  Hire developer
                </a>
                <a
                  href=""
                  className="header_links"
                  style={{ marginLeft: '5px' }}
                >
                  Outsource project
                </a>
              </div>
              <div className="other-links-mobile visible-xs">
                <a href="" className="header_links">
                  Hire developer
                </a>
                <a href="" className="header_links">
                  Outsource project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

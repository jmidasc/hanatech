import React from 'react'

export default () => {
  return (
    <section className="invoice-section" id="invoice">
      <div className="auto-container">
        <h2 className="margin_title">Start working with us today!</h2>

        <div className="links-box">
          <a href="hire-developer.html" className="theme-btn btn-style-six red_btn" style={{marginRight: '5px'}}>
            Hire a remote developer
          </a>
          <a
            href="outsource-your-project.html"
            className="theme-btn btn-style-six red_btn"
          >
            {' '}
            Outsource your project
          </a>
        </div>
      </div>
    </section>
  )
}

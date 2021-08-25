import React from 'react'

class Intro extends React.Component {
  render() {
    return (
      <section id="one" className="main style1 intro-container">
        <div className="grid-wrapper">
          <div className="col-2"></div>
          <div className="col-4">
            <div className="youtube-responsive-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RlNVyatwd5M"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="kickoff"
                style={{ padding: '10px' }}
              />
            </div>
          </div>

          <div className="col-4">
            <header className="major">
              <h2>FullStack.Cash</h2>
              <h3>BCH Blockchain As-A-Service</h3>
            </header>
            <h4>
              The open source 'Cash Stack' allows phone and web apps to interact
              with the Bitcoin Cash blockchain.
            </h4>
            <ul className="actions uniform  media-btn-container">
              <li>
                <a href="/" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/" className="button">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </section>
    )
  }
}

export default Intro

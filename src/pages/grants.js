import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic10 from '../assets/images/pic10.jpg'
import trout from '../assets/images/trout-photo.jpg'
import placeholder from '../assets/images/profile-image-placeholder.png'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Grants - PSF</title>
      <meta name="grants" content="grants" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Grants</h2>
          </header>
          <p>
            As desribed in the{' '}
            <Link to="/biz-plan/business-plan/#bootstrapping">
              Business Plan
            </Link>
            , there will be an air-drop of funding tokens on <b>July 15th</b> to
            PSF token holders. This is an important part of the governance
            mechism for the PSF community.
          </p>
          <p>
            PSF community members are expected to send their funding tokens to
            any of the SLP addresses below to indicate which people and projects
            they want to see funded. On <b>August 1st</b> the grant addresses
            will be funded 1:1 with newly minte PSF tokens. These tokens will be
            distributed over the following three months to fund development of
            projects and management of the organization, after which the
            grant-funding cycle will begin again.
          </p>
        </div>
      </section>

      <section id="eight">
        <div style={{padding: '25px'}}>
          <h2
            style={{
              borderTop: 'white 2px solid',
              borderBottom: 'white 2px solid',
            }}
          >
            <center>People</center>
          </h2>
        </div>
      </section>

      <section id="two" className="spotlights">
        <section>
          <Link to="/grants" className="image">
            <img src={trout} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Chris Troutner - Head Janitor</h3>
              </header>
              <p>
                As explained in the{' '}
                <Link to="/biz-plan/business-plan/#management">
                  management section
                </Link>{' '}
                of the Business Plan, the first managment role for the
                Foundation is that of 'Head Janitor'. This person's chief
                responsibilities are to choose the other first contributors, and
                to slowly and a carefully distribute responsibilities and
                cryptographic keys. Their primary role is to grow the
                organization, keep it focused on the Foundation's mission, and
                reduce any single points of failure that could lead to a
                catastrophic failure of the organization.
              </p>
              <p>
                As founder of the PSF and creator of its core software, Chris
                Troutner, aka 'trout', will take on this initial role. Over the
                next quarter, he will focus on finding community members who can
                be trusted with multisig keys for minting PSF tokens. This will
                be the first step towards decentralizing the organization and{' '}
                <Link to="/biz-plan/business-plan/#migitatingFailure">
                  mitigating catestrophic failure
                </Link>{' '}
                of the Foundation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <Link to="/grants" className="image">
            <img src={placeholder} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Grant Administrator</h3>
              </header>
              <p>
                The role of the grant adminstrator is to distribute grants on a
                monthly basis. One third of each quarterly grant is distribtued
                per month. The duty of the Grant Adminstrator is to manage the
                spreadsheet and distribute the funds in a timely manner.
              </p>
              <p>
                The person fulfilling this role will report to the Head Janitor.
                They will be allowed to use a pseudonym or divulge their
                identity publically, at their discretion.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section id="nine">
          <div style={{padding: '25px'}}>
            <h2
              style={{
                borderTop: 'white 2px solid',
                borderBottom: 'white 2px solid',
              }}
            >
              <center>Projects</center>
            </h2>
          </div>
        </section>

        <section className="spotlights">
          <section>
            <Link to="/grants" className="image">
              <img src={pic10} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing

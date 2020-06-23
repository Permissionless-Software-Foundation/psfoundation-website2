import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import trout from '../assets/images/trout-photo.jpg'
import placeholder from '../assets/images/profile-image-placeholder.png'
import jtfreeman from '../assets/images/jtfreeman.png'
import qrPlaceholder from '../assets/images/qr-placeholder.png'

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
            will be funded 1:1 with newly minted PSF tokens to match the funding
            tokens they've recieved. These tokens will be
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
                that could stop the Foundation from growing.
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

        <section>
          <Link to="/grants" className="image">
            <img src={jtfreeman} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>JT Freeman - SLP Infrastructure</h3>
              </header>
              <p>
                JT is a founder
                of <Link to="https://fountainhead.cash">Fountainhead.cash</Link>,{' '}
                <Link to="https://read.cash/@SLP-Foundation/announcing-the-slp-foundation-e8cededa">SLP Foundation</Link>,
                the <Link to="https://slp.dev">SLP.dev</Link> documentation site,
                and many others. He created and maintains critical pieces of SLP
                token infrastructure
                like <Link to="https://www.npmjs.com/package/slp-parser">slp-parser</Link>{' '}
                and <Link to="https://www.npmjs.com/package/slp-mdm">slp-mdm</Link>.
              </p>
              <p>
                JT is an advisor to PSF management and a pillar of the Bitcoin Cash
                community. This grant will fund his ongoing work in the space.
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
              <img src={qrPlaceholder} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>E2E Encrypte Message and File Sharing</h3>
                </header>
                <p>
                  This grant will be used to fund continued development of
                  this <a href="https://github.com/Permissionless-Software-Foundation/encrypt-msg/blob/master/docs/README.md" target="_blank" rel="noopener noreferrer">
                  Media Sharing Protocol</a> and its integration into
                  the <a href="https://wallet.fullstack.cash">FullStack.cash Wallet</a> as
                  an add-on. This will enable wallet users to send end-to-end (e2e)
                  encrypted messages, containing files of any size, to any other
                  Bitcoin Cash address.
                </p>
                <p>
                  The experience will be very similar to email. Combining payments,
                  communication, and file sharing into one app will help
                  facilitate economic activity and grow demand for Bitcoin Cash.
                </p>
              </div>
            </div>
          </section>

          <section>
            <Link to="/grants" className="image">
              <img src={qrPlaceholder} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Collaborative CoinJoin</h3>
                </header>
                <p>
                  Existing CoinJoin protocols such as
                  {' '}<a href="https://cashshuffle.com/" target="_blank" rel="noopener noreferrer">Cash Shuffle</a>{' '}
                  and <a href="https://github.com/cashshuffle/spec/blob/master/CASHFUSION.md" target="_blank" rel="noopener noreferrer">Cash Fusion</a>{' '}
                  have made great strides in bringing financial privacy to
                  Bitcoin Cash. However, these protocols are extremely complex and
                  as a result,
                  have not been implemented in any software other
                  than <a href="https://electroncash.org/" target="_blank" rel="noopener noreferrer">Electron Cash</a>.
                </p>
                <p>
                  A new on-chain protocol
                  called <a href="https://github.com/vinarmani/swap-protocol" target="_blank" rel="noopener noreferrer">SWaP</a> allows
                  for collaborative transaction building and encrypted messaging,
                  in order to create CoinJoin transactions. This includes the
                  ability to consolidate 'dust' UTXOs, which is a feature CashShuffle
                  does not have and the reason CashFusion was created.
                </p>
                <p>
                  Grant funds will go towards research and development of adapting
                  the SWaP protocol to faciliate CoinJoin transactions, as well
                  as implementing it as an add-on for the <a href="https://wallet.fullstack.cash">FullStack.cash Wallet</a>.
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing

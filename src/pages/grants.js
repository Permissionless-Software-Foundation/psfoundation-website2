import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import trout from '../assets/images/trout-photo.jpg'
import placeholder from '../assets/images/profile-image-placeholder.png'
import jtfreeman from '../assets/images/jtfreeman.png'
import daniel from '../assets/images/daniel.jpg'

// QR donation codes
// import qrPlaceholder from '../assets/images/qr-placeholder.png'
import qrTrout from '../assets/images/trout-07-2020-grant.png'
import qrCoinJoin from '../assets/images/grant-qrs/coinjoin-qr.png'
import qrElectrumx from '../assets/images/grant-qrs/electrumx.png'
import qrFullNode from '../assets/images/grant-qrs/full-node-qr.png'
import qrNinsight from '../assets/images/grant-qrs/ninsight-qr.png'
import qrPostOffice from '../assets/images/grant-qrs/post-office-qr.png'
import qrSlpE2e from '../assets/images/grant-qrs/slp-e2e-qr.png'
import qrSlpSecondLayer from '../assets/images/grant-qrs/slp-second-layer-qr.png'


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
            tokens they've recieved. These tokens will be distributed over the
            following three months to fund development of projects and
            management of the organization, after which the grant-funding cycle
            will begin again.
          </p>
        </div>
      </section>

      <section id="eight">
        <div style={{ padding: '25px' }}>
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
        <section style={{border: '5px solid black'}}>
          <Link to="/grants" className="image image-overlay-wrap">
            <img src={trout} alt="" />
            <img
              src={qrTrout}
              alt=""
              className="image-overlay"  
            />
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

        <section style={{border: '5px solid black'}}>
          <Link to="/grants" className="image">
            <img src={daniel} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Daniel Humberto</h3>
              </header>
              <p>
                Daniel is a full stack developer with an emphasis on front end
                apps using React and Gatsby, and IPFS. He's built many of the
                PSF apps like the{' '}
                <a
                  href="https://wallet.fullstack.cash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FullStack.cash Wallet
                </a>
                , the{' '}
                <a
                  href="https://uncensorablepublishing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uncensorable Publishing
                </a>{' '}
                template, and many of our IPFS-enabled apps. As a Venezuelan, he
                has witnessed first-hand the importance of secure communication
                and the need to increase the efficiency of the grey market.
              </p>
              <p>
                His grant will be used to fund continued development of this{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/encrypt-msg/blob/master/docs/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Media Sharing Protocol
                </a>{' '}
                and its integration into the{' '}
                <a href="https://wallet.fullstack.cash">
                  FullStack.cash Wallet
                </a>
                .
              </p>
              <p>
                This will enable wallet users to send end-to-end (e2e) encrypted
                messages, containing files of any size, to any other Bitcoin
                Cash address. The experience will be very similar to email.
                Combining uncensorable payments, communication, and file sharing
                into one app will help facilitate economic activity around the
                world and grow demand for Bitcoin Cash.
              </p>
            </div>
          </div>
        </section>

        <section style={{border: '5px solid black'}}>
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

        <section style={{border: '5px solid black'}}>
          <Link to="/grants" className="image">
            <img src={jtfreeman} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>JT Freeman - SLP Infrastructure</h3>
              </header>
              <p>
                JT is a founder of{' '}
                <Link to="https://fountainhead.cash">Fountainhead.cash</Link>,{' '}
                <Link to="https://read.cash/@SLP-Foundation/announcing-the-slp-foundation-e8cededa">
                  SLP Foundation
                </Link>
                , the <Link to="https://slp.dev">SLP.dev</Link> documentation
                site, and many others. He created and maintains critical pieces
                of SLP token infrastructure like{' '}
                <Link to="https://www.npmjs.com/package/slp-parser">
                  slp-parser
                </Link>{' '}
                and{' '}
                <Link to="https://www.npmjs.com/package/slp-mdm">slp-mdm</Link>.
              </p>
              <p>
                JT is an advisor to PSF management and a pillar of the Bitcoin
                Cash community. This grant will fund his ongoing work in the
                space.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section id="nine">
          <div style={{ padding: '25px' }}>
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
          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrPostOffice} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>SLP Post Office</h3>
                </header>
                <p>
                  <a
                    href="https://medium.com/@vinarmani/simple-ledger-postage-protocol-enabling-a-true-slp-token-ecosystem-on-bitcoin-cash-f960a58c16c4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This article
                  </a>{' '}
                  explains the purpose and impact of the post office concept:
                  allowing SLP tokens to be used even if buyers have no BCH. BCH
                  is still used 'under the hood' and miners are still paid
                  transaction fees. This scheme greatly improves the user
                  experience for both buyers and sellers when using SLP tokens.
                </p>
                <p>
                  Funds from this grant will be used to integrate client
                  functionality into the{' '}
                  <a href="https://wallet.fullstack.cash">
                    FullStack.cash Wallet
                  </a>
                  . The client functionality will also be abstracted into an npm
                  JavaScript library that can be used by any wallet application.
                  Funds will also be used to finish the{' '}
                  <a
                    href="https://github.com/TOKENLAND/simpleledger-post-office-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open source post office server
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrCoinJoin} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Collaborative CoinJoin</h3>
                </header>
                <p>
                  Existing{' '}
                  <a
                    href="https://en.bitcoin.it/wiki/CoinJoin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CoinJoin protocols
                  </a>{' '}
                  such as{' '}
                  <a
                    href="https://cashshuffle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cash Shuffle
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://github.com/cashshuffle/spec/blob/master/CASHFUSION.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cash Fusion
                  </a>{' '}
                  have made great strides in bringing financial privacy to
                  Bitcoin Cash. However, these protocols are extremely complex
                  and as a result, have not been implemented in any software
                  other than{' '}
                  <a
                    href="https://electroncash.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electron Cash
                  </a>
                  .
                </p>
                <p>
                  A new on-chain protocol called{' '}
                  <a
                    href="https://github.com/vinarmani/swap-protocol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SWaP
                  </a>{' '}
                  allows for collaborative transaction building and encrypted
                  messaging, in order to create CoinJoin transactions. This
                  includes the ability to consolidate 'dust' UTXOs, which is a
                  feature CashShuffle does not have and the reason CashFusion
                  was created.
                </p>
                <p>
                  Grant funds will go towards research and development of
                  adapting the SWaP protocol to faciliate CoinJoin transactions,
                  as well as implementing it as an add-on for the{' '}
                  <a href="https://wallet.fullstack.cash">
                    FullStack.cash Wallet
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrFullNode} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Free Full Node</h3>
                </header>
                <p>
                  Funds for this grant will be used to pay hosting costs for
                  running an ABC archival full node along with a copy of{' '}
                  <a
                    href="https://github.com/christroutner/bch-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-api
                  </a>
                  , the REST API run by FullStack.cash. Combined with the public
                  ElectrumX network for indexer functionality, it will give the
                  BCH developer community a free tier of access to use{' '}
                  <a
                    href="https://www.npmjs.com/package/@chris.troutner/bch-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-js
                  </a>
                  , and will put it on equal footing with services provided by
                  Bitcoin.com.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section id="nine">
          <div style={{ padding: '25px' }}>
            <h2
              style={{
                borderTop: 'white 2px solid',
                borderBottom: 'white 2px solid',
              }}
            >
              <center>Bounties</center>
            </h2>
          </div>
        </section>
        <section className="spotlights">
          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrNinsight} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Expand Ninsight Library in bch-js</h3>
                </header>
                <p>
                  The indexer used by{' '}
                  <a
                    href="https://rest.bitcoin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    rest.bitcoin.com
                  </a>{' '}
                  is called Ninsight, and it's what provides address balances
                  and UTXO information. This is a free service provided by
                  Bitcoin.com.
                </p>
                <p>
                  Funds from this grant will be used to expand the{' '}
                  <a
                    href="https://bchjs.fullstack.cash/#api-Ninsight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ninsight class library
                  </a>{' '}
                  in{' '}
                  <a
                    href="https://www.npmjs.com/package/@chris.troutner/bch-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-js
                  </a>
                  , allowing users of the bch-js library to make calls to the
                  Ninsight indexer at rest.bitcoin.com and use this free
                  resource.
                </p>
              </div>
            </div>
          </section>

          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrElectrumx} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Expand Electrumx Library in bch-js</h3>
                </header>
                <p>
                  The{' '}
                  <a href="https://bchjs.fullstack.cash/#api-ElectrumX">
                    Electrumx class library
                  </a>{' '}
                  in{' '}
                  <a
                    href="https://www.npmjs.com/package/@chris.troutner/bch-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-js
                  </a>{' '}
                  allows users to tap into the free, public Electrumx network.
                  This is the same network used by the{' '}
                  <a
                    href="https://electroncash.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Electron Cash
                  </a>{' '}
                  wallet. Funds for this grant will pay for expanding the
                  library, to add additional functionality.
                </p>
              </div>
            </div>
          </section>

          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrSlpE2e} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>SLP E2E Test</h3>
                </header>
                <p>
                  Funds for this grant will be used to develop an end-to-end
                  (e2e) test for sending SLP tokens. This test would verify
                  that the entire stack of infrastructure required to send and
                  recieve SLP tokens is functioning correctly.
                </p>
                <p>
                  This would be an automated program that sends an SLP token
                  from one wallet to
                  another. This program would be added to
                  the <a href="https://metrics.fullstack.cash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Build Verification Test System</a> managed by FullStack.cash,
                  and the test would be executed every 2 hours.
                </p>
              </div>
            </div>
          </section>

          <section style={{border: '5px solid black'}}>
            <Link to="/grants" className="image">
              <img src={qrSlpSecondLayer} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Research: SLP Second Layer</h3>
                </header>
                <p>
                  It should be possible to hack
                  the <a href="https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md"
                  >SLP specification</a> to include on-chain pointers to additional
                  data, when sending tokens. This would enable a wide range of additional
                  use cases, such as security tokens. Another use case would be
                  representing a changing video game character with an NFT token.
                </p>
                <p>
                  Funds from this grant will be used to research this idea
                  and create proof of concept code.
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

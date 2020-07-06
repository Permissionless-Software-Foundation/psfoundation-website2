import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import trout from '../assets/images/trout-photo.jpg'
import placeholder from '../assets/images/profile-image-placeholder.png'
import jtfreeman from '../assets/images/jtfreeman.png'
import daniel from '../assets/images/daniel.jpg'
import andre from '../assets/images/andre.jpeg'
import david from '../assets/images/david-allen.jpg'

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
import qrDaniel from '../assets/images/grant-qrs/daniel-qr.png'
import qrGrantAdmin from '../assets/images/grant-qrs/grant-admin-qr.png'
import qrJt from '../assets/images/grant-qrs/jt-qr.png'
import qrSlpCliWallet from '../assets/images/grant-qrs/qr-slp-cli-wallet.png'
import qrTorlist from '../assets/images/grant-qrs/torlist-qr.png'
import qrDavid from '../assets/images/grant-qrs/david-qr.png'

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
        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image image-overlay-wrap">
            <img src={trout} alt="" />
            <img src={qrTrout} alt="" className="image-overlay" />
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
              <p>
                <center>
                  simpleledger:qqjjhysfkn7h896t9auttv33k5mnstdeluhln3z94e
                </center>
              </p>
            </div>
          </div>
        </section>

        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image">
            <img src={david} alt="" />
            <img src={qrDavid} alt="" className="image-overlay" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>David Allen - Business Development</h3>
              </header>
              <p>
                David was introduced to the Bitcoin space in 2012.
                Over the years he has worked with many prominent individuals and
                organizations and his many contacts have helped new projects to
                find funding within and outside of the cryptocurrency community.
              </p>
              <p>
                David has agreed to assist and support the Permissionless
                Software Foundation and to be a primary contact as the community
                grows out of its infancy. His experience and contributions are
                a welcome addition to the foundation.
              </p>
              <p>
                <center>
                  simpleledger:qzcq4z08z89ypqmc6ac0jk47ud6hcquedqlmuuk7fx
                </center>
              </p>
            </div>
          </div>
        </section>

        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image image-overlay-wrap">
            <img src={daniel} alt="" />
            <img src={qrDaniel} alt="" className="image-overlay" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Daniel Humberto - Encrypted Messaging</h3>
              </header>
              <p>
                Daniel is a full stack developer with an emphasis on front end
                apps using React and Gatsby, as well as IPFS. He's built many of the
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
              <p>
                <center>
                  simpleledger:qz47n3avw908qz8sk8vaky9etmrasyqf6s3cnjf5hm
                </center>
              </p>
            </div>
          </div>
        </section>

        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image image-overlay-wrap">
            <img src={andre} alt="" />
            <img src={qrPostOffice} alt="" className="image-overlay" />
          </Link>

          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Andre Cabrera - SLP Post Office</h3>
              </header>
              <p>
                Andre is a well-known developer in the Bitcoin Cash space. He
                and his team created the web wallet,{' '}
                <a
                  href="https://github.com/piticocash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pitico
                </a>
                , for the 2019{' '}
                <a
                  href="https://simpleledger.info/slpvh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SLP Virtual Hackathon
                </a>
                . That wallet was later forked and he was hired by Bitcoin.com
                to build{' '}
                <a
                  href="https://mint.bitcoin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mint.bitcoin.com
                </a>
                . Andre has recently been sponsored by the SLP Foundation to
                complete his work on the{' '}
                <a
                  href="https://github.com/TOKENLAND/simpleledger-post-office-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SLP Post Office Server
                </a>
                .
              </p>
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
                Funds from this grant will be used to help him complete this
                work, as well as to integrate the Post Office protocol into the{' '}
                <a
                  href="https://wallet.fullstack.cash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FullStack.cash web wallet
                </a>
                . The client functionality will also be abstracted into an npm
                JavaScript library that can be used by any wallet application.
              </p>
              <p>
                <center>
                  simpleledger:qzp6dcg4anrwc84985fazlfzah0r7dx0054svmakmv
                </center>
              </p>
            </div>
          </div>
        </section>

        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image">
            <img src={placeholder} alt="" />
            <img src={qrGrantAdmin} alt="" className="image-overlay" />
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
              <p>
                <center>
                  simpleledger:qzen3z2rm48qt6uryg70k7x0hg7eu8g8yqthc4y6my
                </center>
              </p>
            </div>
          </div>
        </section>

        <section style={{ border: '5px solid black' }}>
          <Link to="/grants" className="image">
            <img src={jtfreeman} alt="" />
            <img src={qrJt} alt="" className="image-overlay" />
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
              <p>
                <center>
                  simpleledger:qz7cux4al0akn8t8nwwy8pc8edy7q4gnd5e0y23xza
                </center>
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
          <section style={{ border: '5px solid black' }}>
            <Link to="/grants" className="image">
              <img src={qrFullNode} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Free Infrastructure</h3>
                </header>
                <p>
                  Funds for this grant will be used to pay for ongoing hosting
                  costs for running an ABC archival full node, SLPDB, and a copy
                  of{' '}
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
                <p>
                  The free API server can be accessed at{' '}
                  <b>free-api.fullstack.cash</b>.
                </p>
                <p>
                  <center>
                    simpleledger:qq96aqj96z2y83hz28rlzzcwms5rm8rwnyxyvjmchv
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
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
                <p>
                  <center>
                    simpleledger:qz2w8l8endnn6z3vvql3wkg6k8fsy3m0ys88mgczmv
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
            <Link to="/grants" className="image">
              <img src={qrTorlist} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Tor List</h3>
                </header>
                <p>
                  The Deep Web is natoriously difficult to navigate. Websites
                  published with Tor '.onion' addresses or IPFS hashes are
                  ephemeral and change too quickly for users to track them. The
                  Tor List
                  project seeks to fix this problem by creating a peer-to-peer
                  database for tracking websites.
                </p>
                <p>
                  This will take the form of a curated list of clear net, Tor,
                  and IPFS web sites. PSF will host one copy of this list, but
                  the database and UI behind the list will use{' '}
                  <a
                    href="https://uncensorablepublishing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uncensorable Publishing
                  </a>{' '}
                  techniques to ensure access to the the list can not be
                  effectively censored.
                </p>
                <p>
                  Websites can advertise themselves on this list by staking PSF
                  tokens. The rankings within the different categories will be
                  determined by the quantity of staked PSF tokens multiplied by
                  the age of those tokens (how long since they moved). This
                  creates a number that allows entries to be ranked.
                </p>

                <p>
                  <center>
                    simpleledger:qpxkyjp77lrf4c7j7cts5rvpymr4shmtac274kfvyg
                  </center>
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
            <p>
              These bounties will be tracked via GitHub Issues and overseen by
              PSF management. They will allow independent developers around the
              world to claim and fulfill them, and thereby earn PSF tokens and
              BCH. This work will help onboard new developers into the PSF
              community and improve the software under the PSF umbrella.
            </p>
          </div>
        </section>
        <section className="spotlights">
          <section style={{ border: '5px solid black' }}>
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
                <p>
                  <center>
                    simpleledger:qquwtcfj67zpygk673deunp66npnfemcqu9gr9tnkp
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
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
                <p>
                  <center>
                    simpleledger:qqhsmcyce44q874l9egtl5skrnedzfttpsw0j76tf6
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
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
                  (e2e) test for sending SLP tokens. This test would verify that
                  the entire stack of infrastructure required to send and
                  recieve SLP tokens is functioning correctly.
                </p>
                <p>
                  This would be an automated program that sends an SLP token
                  from one wallet to another. This program would be added to the{' '}
                  <a
                    href="https://metrics.fullstack.cash/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Build Verification Test System
                  </a>{' '}
                  managed by FullStack.cash, and the test would be executed
                  every 2 hours.
                </p>
                <p>
                  <center>
                    simpleledger:qqms8fy8sn3qhmcq38zf48x3tu4dgp4vpcwg3nrrkq
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
            <Link to="/grants" className="image">
              <img src={qrSlpSecondLayer} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Research: SLP Second Layer</h3>
                </header>
                <p>
                  It should be possible to hack the{' '}
                  <a href="https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md">
                    SLP specification
                  </a>{' '}
                  to include on-chain pointers to additional data, when sending
                  tokens. This would enable a wide range of additional use
                  cases, such as security tokens, while maintaining backwards
                  compatibility. Another use case would be representing a
                  changing video game character with an NFT token.
                </p>
                <p>
                  Funds from this grant will be used to research this idea and
                  create proof of concept code.
                </p>
                <p>
                  <center>
                    simpleledger:qqynm8zt9hayn90rfev7yqzygpzgk6he5un9nagext
                  </center>
                </p>
              </div>
            </div>
          </section>

          <section style={{ border: '5px solid black' }}>
            <Link to="/grants" className="image">
              <img src={qrSlpCliWallet} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Refactor slp-cli-wallet</h3>
                </header>
                <p>
                  <a
                    href="https://github.com/christroutner/slp-cli-wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    slp-cli-wallet
                  </a>{' '}
                  is a a command-line application and HD wallet. It's an
                  important tool to help developers rapidly prototype new ideas,
                  based on bch-js and the{' '}
                  <a
                    href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cash Stack at FullStack.cash
                  </a>
                  .
                </p>
                <p>
                  The token handling of bch-js was recently overhauled.
                  slp-cli-wallet needs to be updated to use the latest version
                  of bch-js, and the way it handles tokens needs to be
                  refactored. This work will also add support for NFT tokens,
                  and this effort will include increasing the test code coverage
                  of this library.
                </p>
                <p>
                  <center>
                    simpleledger:qpa6nzfaj6npjqee79vekn56qucpqffxmganf9savt
                  </center>
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

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import fetch from 'isomorphic-fetch'

import trout from '../../assets/images/trout-photo.jpg'
import placeholder from '../../assets/images/profile-image-placeholder.png'
import daniel from '../../assets/images/daniel.jpg'
import david from '../../assets/images/david02.jpeg'

// QR donation codes
// import qrPlaceholder from '../assets/images/qr-placeholder.png'
import qrTrout from '../../assets/images/trout-07-2020-grant.png'
import qrCoinJoin from '../../assets/images/grant-qrs/coinjoin-qr.png'
import qrElectrumx from '../../assets/images/grant-qrs/electrumx.png'
import qrFullNode from '../../assets/images/grant-qrs/full-node-qr.png'
import qrNinsight from '../../assets/images/grant-qrs/ninsight-qr.png'
import qrSlpE2e from '../../assets/images/grant-qrs/slp-e2e-qr.png'
import qrSlpSecondLayer from '../../assets/images/grant-qrs/slp-second-layer-qr.png'
import qrDaniel from '../../assets/images/grant-qrs/daniel-qr.png'
import qrGrantAdmin from '../../assets/images/grant-qrs/grant-admin-qr.png'
import qrSlpCliWallet from '../../assets/images/grant-qrs/qr-slp-cli-wallet.png'
import qrTorlist from '../../assets/images/grant-qrs/torlist-qr.png'
import qrDavid from '../../assets/images/grant-qrs/david-qr.png'
import qrDiscretionary from '../../assets/images/grant-qrs/discretionary-qr.png'

const addresses = {
  slpTrout: 'simpleledger:qqjjhysfkn7h896t9auttv33k5mnstdeluhln3z94e',
  slpDaniel: 'simpleledger:qz47n3avw908qz8sk8vaky9etmrasyqf6s3cnjf5hm',
  slpDavid: 'simpleledger:qzcq4z08z89ypqmc6ac0jk47ud6hcquedqlmuuk7fx',
  slpAdmin: 'simpleledger:qzen3z2rm48qt6uryg70k7x0hg7eu8g8yqthc4y6my',
  slpFree: 'simpleledger:qq96aqj96z2y83hz28rlzzcwms5rm8rwnyxyvjmchv',
  slpCollaborative: 'simpleledger:qz2w8l8endnn6z3vvql3wkg6k8fsy3m0ys88mgczmv',
  slpTorList: 'simpleledger:qpxkyjp77lrf4c7j7cts5rvpymr4shmtac274kfvyg',
  slpNinsight: 'simpleledger:qquwtcfj67zpygk673deunp66npnfemcqu9gr9tnkp',
  slpElectrumx: 'simpleledger:qqhsmcyce44q874l9egtl5skrnedzfttpsw0j76tf6',
  slpE2E: 'simpleledger:qqms8fy8sn3qhmcq38zf48x3tu4dgp4vpcwg3nrrkq',
  slpSecondLayer: 'simpleledger:qqynm8zt9hayn90rfev7yqzygpzgk6he5un9nagext',
  slpCliWallet: 'simpleledger:qpa6nzfaj6npjqee79vekn56qucpqffxmganf9savt',
  slpDiscretionary: 'simpleledger:qqajwu8f2ce90de7ftf6lfwa8lvl29fg4v37hvwm2y',
}

let _this
class Landing extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      tokensBalance: {},
    }
  }
  render() {
    const { tokensBalance } = _this.state
    return (
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
                Our first quarter of grant funding{' '}
                <Link to="/blog/q3-progress-report">
                  was an overwhelming succes
                </Link>{' '}
                due to over 90% participation by PSF community members.
                Community developers worked hard to claim bounties and improve
                the infrastructure and services. The core management team
                learned many lessons in this last quarter. Most things worked,
                some things didn't. Most importantly, we've focused efforts on
                giving PSF token holders more tools for finding their voice
                within the community.
              </p>

              <p>
                The next funding token air drop will take place at 7PM UTC on
                October 15th, 2020. Community members that have held their
                tokens without moving them since August 15th (block 648,518)
                will be elgible for the air drop. They can then use those tokens
                to fund the below grants, by sending the funding tokens to the
                address assigned to each grant. On November 1st, each grant will
                recieve a 1-to-1 match of newly minted PSF tokens for each
                funding token recieved.
              </p>

              <p>
                Here are a few of the successes the Permissionless Software
                Foundation community has achieved over the last quarter:
              </p>

              <ul>
                <li>
                  Huge improvements were made to the{' '}
                  <a
                    href="https://www.npmjs.com/package/@psf/bch-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-js
                  </a>{' '}
                  JavaScript library and{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bch-api
                  </a>{' '}
                  REST API, which is the core infrastructure supporting all
                  other PSF projects.
                </li>
                <br></br>

                <li>
                  We proudly supported the{' '}
                  <a
                    href="https://devcon.cash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Third Bitcoin 'Dev Con' hackathon
                  </a>
                  . This onboarded several new developers into the Bitcoin Cash
                  space as well as FullStack.cash tools. As a result, the number
                  of paid subscriptions and daily API requests are both up 50%
                  from the start of the quarter.
                </li>
                <br></br>

                <li>
                  <a
                    href="https://wallet.fullstack.cash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    wallet.fullstack.cash
                  </a>{' '}
                  has a functional{' '}
                  <a
                    href="https://youtu.be/vtv9bAQx5LE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLP Post Office
                  </a>{' '}
                  and is the only web wallet in existance that is capable of
                  sweeping SLP tokens from a paper wallet. Sweeping tokens will
                  be a valuable tool for onboarding new users into the Bitcoin
                  Cash space, and it will help existing users preserve and split
                  their coins after the{' '}
                  <Link to="/blog/november-fork">looming chain split</Link>.
                </li>
                <br></br>

                <li>
                  <a
                    href="https://memo.cash/profile/15XmDNSNVvENzRKfSSvyUXqh8egf9mSrZH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daniel Humberto
                  </a>{' '}
                  has been working hard on{' '}
                  <a
                    href="https://message.fullstack.cash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    message.fullstack.cash
                  </a>{' '}
                  to enable uncensorable, e2e encrypted messaging. He's also
                  adding a Community Feed to give PSF community members a
                  greater voice.
                </li>
              </ul>

              <p>
                Additional details are available in our{' '}
                <Link to="/blog/q3-progress-report">
                  Mid-Q3 progress report
                </Link>
              </p>

              <p>
                Since the start of the quarter, the PSF token price increased
                from $0.04 to a peak of $0.50. Community members with BCH have
                provided the incentive for developers to achieve the
                accomplishments above. With a successful first quarter behind
                us, the community will focus its resources to continue riding
                the wave of success by reducing the scope of grants this next
                quarter.
              </p>
              <p>
                The world has never had a greater need for private, end-to-end
                encrypted, uncensorable messaging. The PSF has the same needs
                internal to its community. The grant process and{' '}
                <a
                  href="https://t.me/permissionless_software"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram channel
                </a>{' '}
                are execellent initial communication tools, but the Community
                Feed will enable improved, decentralized, uncensorable
                communication between significant economic actors within the PSF
                community.{' '}
                <a
                  href="https://torlist.cash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  torlist.cash
                </a>{' '}
                will unleash the deep web as pragmatic e-commerce alternative to
                the highly-censored clear web. Consolidating CoinJoin will
                provide another tool for achieving financial privacy using
                Bitcoin Cash. Increased usage of any of these tools will
                increase demand for the PSF token.
              </p>
              <p>
                Now is the time for PSF community members to show their support
                for these freedom enhancing tools. Now is the time for community
                developers to roll up their sleeves and continue building with
                fervor. Now is the time for you to participate in{' '}
                <a
                  href="https://t.me/permissionless_software"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  commmunity discussion
                </a>
                , and to use your funding tokens to signal your support for the
                projects and people below.
              </p>

              <p>Thank you for being a part of the PSF community!</p>
            </div>
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
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrFullNode} alt="" />
                  {tokensBalance.slpFree &&
                    _this.balanceElement(tokensBalance.slpFree, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Free Infrastructure</h3>
                    </header>
                    <p>
                      Funds for this grant will be used to pay for ongoing
                      hosting costs for running archival full nodes, SLPDB, and
                      a copy of{' '}
                      <a
                        href="https://github.com/christroutner/bch-api"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bch-api
                      </a>
                      , the REST API run by FullStack.cash. Combined with the
                      public ElectrumX network for indexer functionality, it
                      will give the BCH developer community a free tier of
                      access to use{' '}
                      <a
                        href="https://www.npmjs.com/package/@chris.troutner/bch-js"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bch-js
                      </a>
                      , and will put it on equal footing with services provided
                      by Bitcoin.com.
                    </p>
                    <p>
                      This quarter, we will operate two independent stacks of
                      infrastructure. One on the ABC chain and one on the BCHN
                      chain. Switching between chains will require only a single
                      line of code change. Examples will be captured in the{' '}
                      <a
                        href="https://github.com/Permissionless-Software-Foundation/bch-js-examples"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bch-js-examples code example repository
                      </a>
                      .
                    </p>
                    <p>
                      <center>{addresses.slpFree}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrCoinJoin} alt="" />
                  {tokensBalance.slpCollaborative &&
                    _this.balanceElement(tokensBalance.slpCollaborative, true)}
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
                      Bitcoin Cash. However, these protocols are extremely
                      complex and as a result, have not been implemented in any
                      software other than{' '}
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
                      Last quarter, this project made excellent progress by
                      creating{' '}
                      <a
                        href="https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/collaborate"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        two collaborative transaction examples
                      </a>{' '}
                      and a{' '}
                      <a
                        href="https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps004-collaborative-coinjoin.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        formal specification
                      </a>{' '}
                      for the Collaborative CoinJoin protocol. Grant funds will
                      go towards creating a fork of{' '}
                      <a
                        href="https://github.com/christroutner/slp-cli-wallet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        slp-cli-wallet
                      </a>{' '}
                      to build a command-line HD wallet that can execute the
                      Collaborative CoinJoin protocol.
                    </p>

                    <p>
                      The primary advantage of this protocol over other CoinJoin
                      protocols is that there is no need for a coordination
                      server. Wallets will be able to find and collaborate with
                      each other, peer-to-peer. The end result will be large,
                      anonymous coins, with no 'dust' issues.
                    </p>
                    <p>
                      Eventually, this command-line wallet will be packaged as
                      an add-on for{' '}
                      <a
                        href="https://wallet.fullstack.cash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        wallet.fullstack.cash
                      </a>{' '}
                    </p>
                    <p>
                      <center>{addresses.slpCollaborative}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrTorlist} alt="" />
                  {tokensBalance.slpTorList &&
                    _this.balanceElement(tokensBalance.slpTorList, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Tor List</h3>
                    </header>
                    <p>
                      The Deep Web is natoriously difficult to navigate.
                      Websites published with Tor '.onion' addresses or IPFS
                      hashes are ephemeral and change too quickly for users to
                      track them. The{' '}
                      <a
                        href="https://torlist.cash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tor List project
                      </a>{' '}
                      seeks to fix this problem by creating a peer-to-peer
                      database for tracking websites.
                    </p>
                    <p>
                      This will take the form of a curated list of clear net,
                      Tor, and IPFS web sites. PSF will host one copy of this
                      list, but the database and UI behind the list will use{' '}
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
                      Websites can advertise themselves on this list by staking
                      PSF tokens. The rankings within the different categories
                      will be determined by the quantity of staked PSF tokens
                      multiplied by the age of those tokens (how long since they
                      moved). This creates a number that allows entries to be
                      ranked, and increases demand for PSF tokens.
                    </p>

                    <p>
                      <center>{addresses.slpTorList}</center>
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
                  These bounties will be tracked via GitHub Issues and overseen
                  by PSF management. They will allow independent developers
                  around the world to claim and fulfill them, and thereby earn
                  PSF tokens and BCH. This work will help onboard new developers
                  into the PSF community and improve the software under the PSF
                  umbrella.
                </p>
              </div>
            </section>
            <section className="spotlights">
              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrNinsight} alt="" />
                  {tokensBalance.slpNinsight &&
                    _this.balanceElement(tokensBalance.slpNinsight, true)}
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
                      is called Ninsight, and it's what provides address
                      balances and UTXO information. This is a free service
                      provided by Bitcoin.com.
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
                      , allowing users of the bch-js library to make calls to
                      the Ninsight indexer at rest.bitcoin.com and use this free
                      resource.
                    </p>
                    <p>
                      <center>{addresses.slpNinsight}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrElectrumx} alt="" />
                  {tokensBalance.slpElectrumx &&
                    _this.balanceElement(tokensBalance.slpElectrumx, true)}
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
                      allows users to tap into the free, public Electrumx
                      network. This is the same network used by the{' '}
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
                      <center>{addresses.slpElectrumx}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrSlpE2e} alt="" />
                  {tokensBalance.slpE2E &&
                    _this.balanceElement(tokensBalance.slpE2E, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>SLP E2E Test</h3>
                    </header>
                    <p>
                      Funds for this grant will be used to develop an end-to-end
                      (e2e) test for sending SLP tokens. This test would verify
                      that the entire stack of infrastructure required to send
                      and recieve SLP tokens is functioning correctly.
                    </p>
                    <p>
                      This would be an automated program that sends an SLP token
                      from one wallet to another. This program would be added to
                      the{' '}
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
                      <center>{addresses.slpE2E}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrSlpSecondLayer} alt="" />
                  {tokensBalance.slpSecondLayer &&
                    _this.balanceElement(tokensBalance.slpSecondLayer, true)}
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
                      to include on-chain pointers to additional data, when
                      sending tokens. This would enable a wide range of
                      additional use cases, such as security tokens, while
                      maintaining backwards compatibility. Another use case
                      would be representing a changing video game character with
                      an NFT token.
                    </p>
                    <p>
                      Funds from this grant will be used to research this idea
                      and create proof of concept code.
                    </p>
                    <p>
                      <center>{addresses.slpSecondLayer}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrSlpCliWallet} alt="" />
                  {tokensBalance.slpCliWallet &&
                    _this.balanceElement(tokensBalance.slpCliWallet, true)}
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
                      important tool to help developers rapidly prototype new
                      ideas, based on bch-js and the{' '}
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
                      slp-cli-wallet needs to be updated to use the latest
                      version of bch-js, and the way it handles tokens needs to
                      be refactored. This work will also add support for NFT
                      tokens, and this effort will include increasing the test
                      code coverage of this library.
                    </p>
                    <p>
                      <center>{addresses.slpCliWallet}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrDiscretionary} alt="" />
                  {tokensBalance.slpDiscretionary &&
                    _this.balanceElement(tokensBalance.slpDiscretionary, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Community Building</h3>
                    </header>
                    <p>
                      Funds sent to this address will be used by PSF management
                      for building community. This includes sponsoring
                      hackathons, tipping contributors, and incentivizing new
                      developers to join the PSF. These are discretionary funds
                      that can be used for expenses that do not fall into one of
                      the above grants.
                    </p>
                    <p>
                      <center>{addresses.slpDiscretionary}</center>
                    </p>
                  </div>
                </div>
              </section>
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
                  <img src={daniel} alt="" />
                  <img src={qrDaniel} alt="" className="image-overlay" />
                  {tokensBalance.slpDaniel &&
                    _this.balanceElement(tokensBalance.slpDaniel)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Daniel Humberto - Encrypted Messaging</h3>
                    </header>
                    <p>
                      Daniel is a full stack developer with an emphasis on front
                      end apps using React and Gatsby, as well as IPFS. He's
                      built many of the PSF apps like the{' '}
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
                      template, and many of our IPFS-enabled apps. As a
                      Venezuelan, he has witnessed first-hand the importance of
                      secure communication and the need to increase the
                      efficiency of the grey market.
                    </p>
                    <p>
                      His grant will be used to fund continued development of
                      this{' '}
                      <a
                        href="https://github.com/Permissionless-Software-Foundation/encrypt-msg/blob/master/docs/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Media Sharing Protocol
                      </a>{' '}
                      and its integration into{' '}
                      <a
                        href="https://message.fullstack.cash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        message.fullstack.cash
                      </a>
                      .
                    </p>
                    <p>
                      This will enable wallet users to send end-to-end (e2e)
                      encrypted messages, containing files of any size, to any
                      other Bitcoin Cash address. The experience will be very
                      similar to email. Combining uncensorable payments,
                      communication, and file sharing into one app will help
                      facilitate economic activity around the world and grow
                      demand for Bitcoin Cash.
                    </p>
                    <p>
                      <center>{addresses.slpDaniel}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={trout} alt="" />
                  <img src={qrTrout} alt="" className="image-overlay" />
                  {tokensBalance.slpTrout &&
                    _this.balanceElement(tokensBalance.slpTrout)}
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
                      responsibilities are to choose the other first
                      contributors, and to slowly and a carefully distribute
                      responsibilities and cryptographic keys. Their primary
                      role is to grow the organization, keep it focused on the
                      Foundation's mission, and reduce any single points of
                      failure that could lead to a catastrophic failure of the
                      organization.
                    </p>
                    <p>
                      As founder of the PSF and creator of its core software,
                      Chris Troutner, aka 'trout', has taken on this initial
                      role. His focus is on manageing the different PSF projects
                      and bounties, keeping the developers on-task, and
                      communicating with PSF community members that hold
                      significant quantities of tokens.
                    </p>
                    <p>
                      <center>{addresses.slpTrout}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={david} alt="" />
                  <img src={qrDavid} alt="" className="image-overlay" />
                  {tokensBalance.slpDavid &&
                    _this.balanceElement(tokensBalance.slpDavid)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>David Allen - Business Development</h3>
                    </header>
                    <p>
                      David was introduced to the Bitcoin space in 2012. Over
                      the years he has worked with many prominent individuals
                      and organizations and his many contacts have helped new
                      projects to find funding within and outside of the
                      cryptocurrency community.
                    </p>
                    <p>
                      David has agreed to assist and support the Permissionless
                      Software Foundation and to be a primary contact as the
                      community grows out of its infancy. His experience and
                      contributions are a welcome addition to the foundation.
                    </p>
                    <p>
                      <center>{addresses.slpDavid}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={placeholder} alt="" />
                  <img src={qrGrantAdmin} alt="" className="image-overlay" />
                  {tokensBalance.slpAdmin &&
                    _this.balanceElement(tokensBalance.slpAdmin)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Grant Administrator</h3>
                    </header>
                    <p>
                      The role of the grant adminstrator is to distribute grants
                      on a monthly basis. One third of each quarterly grant is
                      distribtued per month. The duty of the Grant Adminstrator
                      is to manage the spreadsheet and distribute the funds in a
                      timely manner.
                    </p>
                    <p>
                      The person fulfilling this role will report to the Head
                      Janitor. They will be allowed to use a pseudonym or
                      divulge their identity publically, at their discretion.
                    </p>
                    <p>
                      <center>{addresses.slpAdmin}</center>
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
                  <center>Previous Grants</center>
                </h2>
                <p>
                  Previous grant rounds have been saved and can be viewed by
                  visiting the pages below:
                </p>
                <ul>
                  <li>
                    <a href="2020-Q3">2020-Q3</a>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    )
  }

  componentDidMount() {
    _this.getBalancesForToken()
  }

  // Get token fi
  async getBalancesForToken() {
    try {
      const SERVER = 'https://api.fullstack.cash/v3/slp/balancesForToken'
      const tokenId =
        '832cc2d25d4c91487cc8caad8faa86f8b179bf190e86bf4bc83b30e7bcb8fe1c'
      const resp = await fetch(`${SERVER}/${tokenId}`)
      const body = await resp.json()

      const tokensBalance = {}

      // filter by addresess
      body.map(val => {
        Object.keys(addresses).forEach(key => {
          if (val.slpAddress === addresses[key])
            tokensBalance[key] = val.tokenBalanceString
        })
        return true
      })

      _this.setState(prevState => ({
        tokensBalance,
      }))

      //console.log('tokensBalance : ', tokensBalance)
    } catch (err) {
      console.log(`Error in grants/getTokensInfo()`)
    }
  }

  // create html element to show balance
  balanceElement(balance, useStyle2) {
    const style = useStyle2 ? 'grants-balance2' : 'grants-balance'
    return (
      <center className={style}>
        <b>Balance : {balance}</b>
      </center>
    )
  }
}

export default Landing

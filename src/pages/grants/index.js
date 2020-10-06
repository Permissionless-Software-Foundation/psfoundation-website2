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
import qrWallet from '../../assets/images/grant-qrs/2020-q4/qr-wallet.png'
import qrTrout from '../../assets/images/grant-qrs/2020-q4/qr-trout.png'
import qrCoinJoin from '../../assets/images/grant-qrs/2020-q4/qr-coinjoin.png'
import qrFreeInfa from '../../assets/images/grant-qrs/2020-q4/qr-free-infra.png'
import qrBchjs from '../../assets/images/grant-qrs/2020-q4/qrBchjs.png'
import qrDaniel from '../../assets/images/grant-qrs/2020-q4/qr-daniel.png'
import qrGrantAdmin from '../../assets/images/grant-qrs/2020-q4/qr-grant-admin.png'
import qrSlpCliWallet from '../../assets/images/grant-qrs/2020-q4/qr-slp-cli-wallet.png'
import qrTorlist from '../../assets/images/grant-qrs/2020-q4/qr-torlist.png'
import qrDavid from '../../assets/images/grant-qrs/2020-q4/qr-david.png'
import qrDiscretionary from '../../assets/images/grant-qrs/2020-q4/qr-community.png'
import qrMetrics from '../../assets/images/grant-qrs/2020-q4/qr-metrics.png'

const addresses = {
  slpTrout: 'simpleledger:qrqr7w2cmxk9gxe0uzdsdzh295kmp65tgskj8kxslr',
  slpDaniel: 'simpleledger:qqfewsn7sx383caj9l8e964l7v7kcrm9xqyrnttahh',
  slpDavid: 'simpleledger:qq623cx5uc28y7p7fg3px979tlhghzrm256avfh3kj',
  slpAdmin: 'simpleledger:qqnv30enl0dqtfs25xh9nkqdrzpqflz22gdhx5ttr0',
  slpFree: 'simpleledger:qpyu35q0ylvjjaex889phzl94taka68dsu0a0p2nez',
  slpCollaborative: 'simpleledger:qrxd64rg7wel2rkk0257gs56anh0exlz25hvjx9h78',
  slpTorList: 'simpleledger:qpnetzpuldvrvg4qxu8t2jdz7nwn6s5pmy4knghexv',
  slpCliWallet: 'simpleledger:qzu63uur8q6wse022cgvheth8ec6l6w5cy6qm8l862',
  slpDiscretionary: 'simpleledger:qpalprjtnq35sf0akv2t6jt3qz9pn66vscmdqj8cdq',
  slpWallet: 'simpleledger:qz3zydy6w8g35296xucwuys92l33f0q7kqerdv7mj4',
  slpBchjs: 'simpleledger:qpnd4umjualvpnk46xrzk2ay9csz88q0nqej2l9jw9',
  slpMetrics: 'simpleledger:qq380wxdut8r44ummd3r9x25h7mhkm9x8v4cd00lwd',
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
                will be eligible for the air drop. They can then use those
                tokens to fund the below grants, by sending the funding tokens
                to the address assigned to each grant. On November 1st, each
                grant will receive a 1-to-1 match of newly minted PSF tokens for
                each funding token received.
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
                  . This on-boarded several new developers into the Bitcoin Cash
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
                  and is the only web wallet in existence that is capable of
                  sweeping SLP tokens from a paper wallet. Sweeping tokens will
                  be a valuable tool for on-boarding new users into the Bitcoin
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
                are excellent initial communication tools, but the Community
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
                  <img src={qrWallet} alt="" />
                  {tokensBalance.slpWallet ?
                    _this.balanceElement(tokensBalance.slpWallet, true) :
                    _this.balanceElement(0, true)
                  }
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>wallet.fullstack.cash</h3>
                    </header>
                    <p>
                      Last quarter the PSF launched{' '}
                      <a
                        href="https://wallet.fullstack.cash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        wallet.fullstack.cash
                      </a>
                      , a BCH and SLP enabled web wallet. It has been a huge
                      success! Unlike a native phone app, the wallet can not be
                      banned from an app store. Any device capable of opening a
                      web page can access it. The app is even accessible over
                      Tor and IPFS, allowing users from countries with
                      restrictive internet policies to circumvent government
                      rules and easily engage in economic activity using Bitcoin
                      Cash. The app is also an awesome demonstration of what can
                      be built with tools available at FullStack.cash.
                    </p>

                    <p>
                      However, the app is still in early 'Alpha' release. Funds
                      from this grant will go towards getting this app over the
                      'finish line'. They will fund the completion of paper
                      wallet sweeping of SLP tokens, and increase test coverage
                      and reliability testing of the app.
                    </p>

                    <p>
                      <center>{addresses.slpWallet}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrFreeInfa} alt="" />
                  {tokensBalance.slpFree ?
                    _this.balanceElement(tokensBalance.slpFree, true) :
                    _this.balanceElement(0, true)}
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
                  {tokensBalance.slpCollaborative ?
                    _this.balanceElement(tokensBalance.slpCollaborative, true) :
                    _this.balanceElement(0, true)}
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
                      server. Wallets will be able to securely find and
                      collaborate with each other, peer-to-peer. The end result
                      will be large, anonymous coins, with no 'dust' issues.
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
                  {tokensBalance.slpTorList ?
                    _this.balanceElement(tokensBalance.slpTorList, true) :
                    _this.balanceElement(0, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Tor List</h3>
                    </header>
                    <p>
                      The Deep Web is notoriously difficult to navigate.
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

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrMetrics} alt="" />
                  {tokensBalance.slpMetrics ?
                    _this.balanceElement(tokensBalance.slpMetrics, true) :
                    _this.balanceElement(0, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Blockchain Metrics</h3>
                    </header>
                    <p>
                      <i>"What gets measured, gets managed"</i>
                    </p>

                    <p>
                      Last quarter, the PSF core management has had deep
                      discussions about what metrics we could look at, to tell
                      us if we are successful in managing the PSF software and
                      community. We've come up with a handful of metrics that
                      we'd like to regularly share with the PSF community.
                    </p>

                    <p>
                      The Bitcoin Cash blockchain provides a perfect opportunity
                      for the management to transparently share that
                      information. Funds from this grant will fund development
                      of a simple application that will write a very small JSON
                      object of metrics data to the blockchain, once per day,
                      using the{' '}
                      <a
                        href="https://github.com/simpleledger/slp-specifications/blob/master/bitcoinfiles.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bitcoin Files Protocol
                      </a>
                      . These are the initial metrics that will be recorded:
                    </p>

                    <ul>
                      <li>
                        <a
                          href="https://simpleledger.info/token/38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PSF token stats
                        </a>
                      </li>
                      <li>The price of the PSF token and BCH in USD</li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/@psf/bch-js"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          npm bch-js library weekly downloads
                        </a>
                      </li>
                    </ul>

                    <p>
                      We will add more metrics at a later date. We invite the
                      PSF community to suggest additional metrics.
                    </p>

                    <p>
                      <center>{addresses.slpMetrics}</center>
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
                  These bounties will be tracked via GitHub Issues, the{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bounties"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bounties Repository
                  </a>
                  , and their execution is overseen by PSF management. They will
                  allow independent developers around the world to claim and
                  fulfill them, and thereby earn PSF tokens and BCH. This work
                  will help on-board new developers into the PSF community and
                  improve the software under the PSF umbrella.
                </p>
              </div>
            </section>
            <section className="spotlights">
              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrBchjs} alt="" />
                  {tokensBalance.slpBchjs ?
                    _this.balanceElement(tokensBalance.slpBchjs, true) :
                    _this.balanceElement(0, true)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Expand bch-js and bch-api Functionality</h3>
                    </header>
                    <p>
                      The{' '}
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
                      REST API are the core infrastructure that empowers
                      developers to build Bitcoin-Cash-based applications. This
                      grant will pay for a series of bounties for continued
                      improvement of this critical resource.
                    </p>
                    <p>
                      Last quarter, most of the bounties were fulfilled, but
                      there are still a few that need to be completed. The
                      budget from this grant will pay for additional
                      improvements fix any bugs that are discovered.
                    </p>

                    <p>
                      <center>{addresses.slpBchjs}</center>
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ border: '5px solid black' }}>
                <Link to="/grants" className="image image-overlay-wrap">
                  <img src={qrSlpCliWallet} alt="" />
                  {tokensBalance.slpCliWallet ?
                    _this.balanceElement(tokensBalance.slpCliWallet, true) :
                    _this.balanceElement(0, true)}
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
                      is a command-line application and HD wallet. It's an
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
                      This grant was funded last quarter, but developers with
                      the prerequisite skills could not be found to work on it.
                      However, developers who worked on other projects last
                      quarter have been identified to work on these bounties
                      this quarter.
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
                  {tokensBalance.slpDiscretionary ?
                    _this.balanceElement(tokensBalance.slpDiscretionary, true) :
                    _this.balanceElement(0, true)}
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
                  {tokensBalance.slpDaniel ?
                    _this.balanceElement(tokensBalance.slpDaniel) :
                    _this.balanceElement(0)}
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
                        href="https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps001-media-sharing.md"
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
                      . He is also developing the Community Feed to help PSF
                      token holders to communicate effectively with the wider
                      PSF community.
                    </p>
                    <p>
                      The app will enable wallet users to send end-to-end (e2e)
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
                  {tokensBalance.slpTrout ?
                    _this.balanceElement(tokensBalance.slpTrout) :
                    _this.balanceElement(0)}
                </Link>

                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Chris Troutner - Head Janitor</h3>
                    </header>
                    <p>
                      As explained in the{' '}
                      <Link to="/biz-plan/business-plan/#management">
                        managment section
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
                      role. His focus is on managing the different PSF projects
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
                  {tokensBalance.slpDavid ?
                    _this.balanceElement(tokensBalance.slpDavid) :
                    _this.balanceElement(0)}
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
                  {tokensBalance.slpAdmin ?
                    _this.balanceElement(tokensBalance.slpAdmin) :
                    _this.balanceElement(0)}
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Grant Administrator</h3>
                    </header>
                    <p>
                      The role of the grant administrator is to distribute
                      grants on a weekly basis. The duty of the Grant
                      Administrator is to manage the spreadsheet and distribute
                      the funds in a timely manner.
                    </p>
                    <p>
                      The person fulfilling this role will report to the Head
                      Janitor. They will be allowed to use a pseudonym or
                      divulge their identity publicly, at their discretion.
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
                    <Link to="/grants/2020-Q3">2020-Q3</Link>
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

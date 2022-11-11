/* eslint-disable */

import React from 'react'
//import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
//import Banner from '../components/Banner'
import styled from 'styled-components'
import BuyBadgerButton from '../components/buy-badger-button'
import SellBadgerButton from '../components/sell-badger-button'
import WarningDiv from '../components/warning'
import PriceSection from '../components/price-section'

import Util from '../components/lib/util'
const util = new Util()

import qrcodeBCH from '../assets/images/bitcoincash:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69utna2wmnh.png'
import qrcodeSLP from '../assets/images/simpleledger:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69u8gk3mmdf.png'
import qrBurn from '../assets/images/qrBurn.png'
import qrBurnSlp from '../assets/images/qrBurn-slp.png'
import animatedGears from '../assets/images/PSF-animated-gears.gif'
import vendingMachine from '../assets/images/vending-machine.png'
import consulting from '../assets/images/consulting.png'
import community from '../assets/images/community.png'

// Import media components
import InfoModal from '../components/media/modals.js/info'
import WatchModal from '../components/media/modals.js/watch'

import Category from '../components/media/category'

const categoryA = {
  title: 'Latest Media from PSF Community',
  about:
    'This section is frequently updated with the latest videos from the PSF community. It includes meetings, how-to videos, and more.',
  videos: [
    {
      url: 'ajmBwM-ntp4',
      info: 'PSF TSC Meeting 06.08.22',
    },
    {
      url: 'RicVSFlcNwg',
      info: 'PSF TSC Meeting 05.25.22',
    },
    {
      url: 'SvSAiM4xQkQ',
      info: 'PSF TSC Meeting 05.04.22',
    },
    {
      url: 'nNRpa3WPxdU',
      info: 'PSF TSC Meeting 04.13.22',
    },
    {
      url: 'Vb_fwPQ7dN4',
      info: 'PSF TSC Meeting 03.30.22',
    },
    {
      url: 'nqGefRSfT_k',
      info: 'PSF TSC Meeting 03.16.22',
    },
    {
      url: 'ptZSFF0WQ4Q',
      info: 'PSF TSC Meeting 03.02.22',
    },
    {
      url: 'b_CgOWf-eV0',
      info: 'PSF TSC Meeting 02.02.22',
    },
    {
      url: 'IVA_7T8nsJ0',
      info: 'PSF TSC Meeting 01.19.22',
    },
    {
      url: 'dhgZlxpDnz4',
      info: 'PSF TSC Meeting 01.05.22',
    },
    {
      url: 'joyN1Q-5tnI',
      info: 'PSF TSC Meeting 12.22.21',
    },
  ],
}

const BchAddress = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const BizPlanButton = styled.a`
  margin-bottom: 25px;
`

let _this
class HomeIndex extends React.Component {
  constructor() {
    super()

    this.usdPerBCH = 300.0

    this.state = {
      showInfo: false,
      info: '',
      watchVideo: false,
      urlToWatch: '',
    }
    _this = this
  }

  render() {
    const siteTitle = 'Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <PriceSection />
        <WarningDiv />
        {/** Media */}
        {Category && (
          <>
            <Category
              key={categoryA.title}
              id={categoryA.title}
              title={categoryA.title}
              about={categoryA.about}
              onShowInfo={_this.toggleInfo}
              onWatchVideo={_this.toggleVideo}
              media={categoryA.videos}
            />
          </>
        )}
        {_this.state.showInfo && (
          <InfoModal
            info={_this.state.info}
            show={_this.state.showInfo}
            onHide={_this.toggleInfo}
          />
        )}
        {_this.state.watchVideo && (
          <WatchModal
            url={_this.state.urlToWatch}
            show={_this.state.watchVideo}
            onHide={_this.toggleVideo}
          />
        )}
        {/**  */}
        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="">
                <h2> What is the Permissionless Software Foundation?</h2>
              </header>
              <p>
                The mission of the Permissionless Software Foundation is to
                develop, promote, and maintain software that makes it easy for{' '}
                <b>individuals</b> to <u>protect their privacy</u>,{' '}
                <u>circumvent censorship</u>, and{' '}
                <u>engage in economic activity</u>. The Foundation will focus on
                the growth of open source software and the adoption of Bitcoin
                Cash across the globe, as the primary means of achieving its
                goals.
              </p>

              <p>
                The business plan for the Permissionless Software Foundation and
                PSF token discusses the token economics and mathematics used to
                create a psudo-stable utility token, allowing open source
                software communities to self-fund without the need for venture
                capital, corporate sponshorship, or other fiduciary
                responsibility.
              </p>
              <center>
                <BizPlanButton
                  href="/biz-plan/business-plan"
                  rel="noopener noreferrer"
                  className="button special"
                >
                  Read the Business Plan
                </BizPlanButton>
              </center>
            </div>
            <div className="col-6">
              <div className="youtube-responsive-container">
                <iframe
                  title="Bitcoin Cash Full Stack Introduction"
                  src="https://www.youtube.com/embed/WhJE6kqpS3s"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section id="five" className="main style5">
          <div className="grid-wrapper">
            <div className="col-6">
              <center>
                <span className="image fit">
                  <img src={animatedGears} alt="animaed gear" />
                </span>
              </center>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Three Major Facets</h3>
              <p>
                There are three major facets to the Permissionless Software
                Foundation (PSF): <b>Vending Machines</b>, <b>Consulting</b>,
                and <b>Community</b>. They are symbolized in the animated
                graphic.
              </p>
              <p>
                Code drives everything. That is symbolized by the large gear
                driving the three smaller gears. The three smaller gears
                represent the three major facets.
              </p>

              <div className="grid-wrapper">
                <div className="col-3">
                  <center>
                    <span className="image fit">
                      <img src={vendingMachine} alt="community" />
                    </span>
                  </center>
                </div>
                <div className="col-9">
                  <p style={{ paddingRight: '20px' }}>
                    The <b>Vending Machine</b> represents SaaS applications. For
                    example, the subscription service of{' '}
                    <a href="https://fullstack.cash" target="_blank">
                      FullStack.cash
                    </a>
                    , or the{' '}
                    <a href="https://ipfs.fullstack.cash" target="blank">
                      IPFS file hosting
                    </a>{' '}
                    service. These are 'coin operated'. A user pays BCH and
                    immediately gets something of value for it. Each payment
                    burns PSF tokens. This is the raw fuel that drives the peg
                    between PSF tokens and BCH.
                  </p>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="col-3">
                  <center>
                    <span className="image fit">
                      <img src={consulting} alt="community" />
                    </span>
                  </center>
                </div>
                <div className="col-9">
                  <p style={{ paddingRight: '20px' }}>
                    The PSF is also a <b>consulting</b> company. We match
                    talented developers with entrepreurs looking to fund
                    development of their business ideas. Work is structured in
                    3-6 month contracts. Payments go to burn tokens, and
                    developers are paid in PSF tokens.{' '}
                    <a
                      href="https://fullstack.cash/consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find out more
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="col-3">
                  <center>
                    <span className="image fit">
                      <img src={community} alt="community" />
                    </span>
                  </center>
                </div>
                <div className="col-9">
                  <p style={{ paddingRight: '20px' }}>
                    The PSF is governed by a <b>community</b> of token holders.
                    Patrons can invest in Bitcoin Cash infrastructure by buying
                    and holding PSF tokens. They are then eligible for air-drops
                    that can be directed to fund{' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Common_good"
                      target="_blank"
                    >
                      common goods
                    </a>
                    , like full nodes, indexers, privacy enhancements, and
                    research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper" style={{ visibility: 'hidden' }}>
            <div className="col-12">
              <h2>
                Token Liquidity App is currently shut down for maintenance.
              </h2>
              <h2>It will be back up soon.</h2>
            </div>
          </div>

          <div className="grid-wrapper" style={{ visibility: 'show' }}>
            <div className="col-6">
              <center>
                <span className="image">
                  <img
                    src={qrcodeBCH}
                    alt="bitcoincash:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69utna2wmnh"
                  />
                </span>
                <br />
                <p style={{ textAlign: 'center' }}>
                  bitcoincash:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69utna2wmnh
                </p>
                <br />

                <span className="image">
                  <img
                    src={qrcodeSLP}
                    alt="simpleledger:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69u8gk3mmdf"
                  />
                </span>
                <br />
                <p style={{ textAlign: 'center' }}>
                  simpleledger:qr9xtwn9u22wqh7j00fy6k4jg9ktmdn69u8gk3mmdf
                </p>
              </center>
            </div>
            <div className="col-6">
              <header className="">
                <h2>Buy or Sell PSF Tokens</h2>
              </header>
              <p>
                You can buy or sell tokens by sending BCH or tokens to the
                liquidity app. Scan the QR code with a Bitcoin Cash wallet that
                is SLP-token-aware, like{' '}
                or{' '}
                <a
                  href="https://wallet.fullstack.cash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  wallet.FullStack.cash
                </a> or{' '}
                <a
                  href="https://github.com/simpleledger/Electron-Cash-SLP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electron Cash SLP
                </a>
                .
              </p>
              <p>
                The liquidity app will send tokens if it recieves BCH. It will
                send BCH if it recieves tokens.{' '}
                <b>
                  It will take two (2) block confirmations before tokens will
                  appear in your wallet
                </b>
                . Refresh the window to get the most up-to-date exchange rate.
              </p>
              <p>
                <b>
                  <u>Warning:</u>{' '}
                </b>
                Do not send BCH to the app address unless you are using a SLP
                token-aware wallet. Non-aware wallets can destroy the tokens.
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ visibility: 'hidden' }}>
            <div className="col-12">
              <h2>Token Liquidity App is Under Construction</h2>
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                <center>
                  PSF SLP Token ID:
                  38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0
                </center>
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="">
                <h2>Software Projects</h2>
              </header>
              <p className="projectText">
                The PSF token is used to fund the following open source
                projects:
              </p>
            </div>

            <div className="col-6">
              <h3>FullStack.cash</h3>
              <p>
                <a href="https://fullstack.cash" target="_blank">
                  FullStack.cash
                </a>{' '}
                is a suite of software that allows modern webpages and phone
                apps to interact with the Bitcoin Cash blockchain. It's a
                cloud-based service for scaling crypto apps, and it unlocks the next
                generation of blockchain-based applications. Fees paid for the
                service burn PSF tokens.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://fullstack.cash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    More Info
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Pay-to-Write Database (P2WDB)</h3>
              <p>
                The Pay-to-Write Database (P2WDB) is an censorship-resistant database. 
                It's similar to a blockchain, but better optimized for data.
                The database has many redundant copies spread across the globe. 
                They sync with one another using consensus rules. Burning PSF
                tokens is required to write to the database.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://p2wdb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    More Info
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <h3>White Label Wallet</h3>
              <p>
                The{' '}
                <a href="https://wallet.fullstack.cash" target="_blank">
                  wallet app at FullStack.cash
                </a>{' '}
                is built using modular architecture and 100% MIT licensed open
                source software. It's intended purpose is to be easy to
                customize, in order to solve the widest possible range of
                business problems. It leverages the infrastructure provided by
                both FullStack.cash and Uncensorable Publishing. Every transaction
                sent with the wallet burns 2,000 sats worth of PSF tokens.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://wallet.fullstack.cash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    More Info
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h3>PSF DEX</h3>
              <p>
                The PSF has built decentralized exchanges (DEXs) on the BCH,
                XEC, and AVAX blockchains. These exchanges are peer-to-peer,
                trustless, and atomic, leveraging inherent features of the
                Bitcoin protocol. Trade data is stored on the P2WDB, which
                means each interaction burns PSF tokens.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://dex.fullstack.cash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    More Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <center>
                <h1 className="red-color">Danger</h1>
              </center>
              <center>
                <span className="image burn-qr">
                  <img
                    src={qrBurn}
                    alt="bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr"
                  />
                </span>
                <br />
                <p style={{ textAlign: 'center' }}>
                  bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr
                </p>

                <span className="image burn-qr">
                  <img
                    src={qrBurnSlp}
                    alt="simpleledger:qqsrke9lh257tqen99dkyy2emh4uty0vkyflye6lwa"
                  />
                </span>

                <p style={{ textAlign: 'center' }}>
                  simpleledger:qqsrke9lh257tqen99dkyy2emh4uty0vkyflye6lwa
                </p>
                <br />
              </center>
            </div>
            <div className="col-6">
              <header className="">
                <h2>Burn Tokens</h2>
              </header>
              <p>
                Sending any BCH to this Bitcoin Cash address will cause tokens
                to be 'burned' and removed from circulation. The exchange
                happens just as it does above, but instead of sending the
                exchanged tokens to the originating address, those tokens are
                burned.
              </p>
              <p>
                This address will be used by the applications above. For
                example, when somone pays their subscription fee at{' '}
                <a href="https://fullstack.cash" target="_blank">
                  FullStack.cash
                </a>
                , the BCH is used to burn tokens. This causes the price of the
                tokens to increase, because the BCH balance of the
                token-liquidity app goes up and it's token balance goes down.
              </p>
              <p>
                This burning function is faciliated by a second app, similar to
                the token liquidity app. It forwards any BCH recieved to the
                token liquidity app, and it appends a special OP_RETURN code
                instructing the tokens to be burned instead of exchanged. The
                burn is transparent, public, and verifiable{' '}
                <a
                  href="https://explorer.bitcoin.com/bch/address/bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr"
                  target="_blank"
                >
                  on the blockchain
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  async componentDidMount() {
    try {
      // Update the component state with token price from the server.
      // await this.getPrice()
    } catch (err) {
      console.log(`Error in index.js/componentDidMounts(): `, err)
    }
  }
  toggleInfo(info) {
    _this.setState({
      showInfo: !_this.state.showInfo,
      info,
    })
  }

  toggleVideo(urlToWatch) {
    _this.setState({
      watchVideo: !_this.state.watchVideo,
      urlToWatch,
    })
  }
}

export default HomeIndex

/*
<div className="grid-wrapper">
  <div className="col-12">
    <h2>Token Liquidity App is Under Construction</h2>
  </div>
</div>
*/

/*
<div className="grid-wrapper" style={{ visibility: 'show' }}>
  <div className="col-6">
    <center>
      <span className="image">
        <img
          src={qrcodeBCH}
          alt="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
        />
      </span>
      <br />
      <p style={{ textAlign: 'center' }}>
        bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al
      </p>
      <br />

      <span className="image">
        <img
          src={qrcodeSLP}
          alt="simpleledger:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfqtaqr70rp"
        />
      </span>
      <br />
      <p style={{ textAlign: 'center' }}>
        simpleledger:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfqtaqr70rp
      </p>
    </center>
  </div>
  <div className="col-6">
    <header className="">
      <h2>Buy or Sell PSF Tokens</h2>
    </header>
    <p>
      You can buy or sell tokens by sending BCH or tokens to the
      liquidity app. Scan the QR code with a SLP token-aware BCH
      wallet, like{' '}
      <a
        href="https://badger.bitcoin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Badger Mobile
      </a>{' '}
      or the{' '}
      <a
        href="https://wallet.bitcoin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bitcoin.com Wallet
      </a>
      , or click the Buy or Sell buttons to trade $0.10 USD worth of
      tokens if you have the{' '}
      <a
        href="https://badger.bitcoin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Badger Wallet browser extension
      </a>{' '}
      installed.
    </p>
    <p>
      The liquidity app will send tokens if it recieves BCH. It will
      send BCH if it recieves tokens.{' '}
      <b>
        It will take two (2) block confirmations before tokens will
        appear in your wallet
      </b>
      . Refresh the window to get the most up-to-date exchange rate.
    </p>
    <p>
      <b>
        <u>Warning:</u>{' '}
      </b>
      Do not send BCH to the app address unless you are using a SLP
      token-aware wallet. Non-aware wallets can destroy the tokens.
    </p>
    <br />
    <center>
      <BuyBadgerButton usdPerBch="4" />
      <br />
      <br />
      <SellBadgerButton usdPerBch="4" />
    </center>
  </div>
</div>
*/

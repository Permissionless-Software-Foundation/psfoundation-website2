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

import qrcodeBCH from '../assets/images/qrcodeBCH.png'
import qrcodeSLP from '../assets/images/qrcodeSLP.png'

const BchAddress = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const BizPlanButton = styled.a`
  margin-bottom: 25px;
`

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.usdPerBCH = 300.0
  }

  render() {
    const siteTitle = 'Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <PriceSection />
        <WarningDiv />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="">
                <h2>Permissionless</h2>

                <h2>Software</h2>

                <h2>Foundation</h2>
              </header>
              <p>
                The mission of the Permissionless Software Foundation is to
                promote{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Self-ownership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  individual sovereignty
                </a>{' '}
                through the use of software. The Foundation will focus on the
                development and promotion of software that makes it easy for
                individuals to protect their privacy, circumvent censorship, and
                engage in{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Agorism"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agorism
                </a>
                .
              </p>
            </div>
            <div className="col-6">
              <center>
                <p>
                  The business plan for the Permissionless Softare Foundation
                  and PSF token is still being drafted. You can read the current
                  draft by clicking on the button below. It discusses the unique
                  token economics and mathematics used to create a psudo-stable
                  utility token allowing open source software communities to
                  self-fund without the need for venture capital, corporate
                  sponshorship, or other fiduciary responsibility.
                </p>
                <BizPlanButton
                  href="/biz-plan/business-plan"
                  rel="noopener noreferrer"
                  className="button special"
                >
                  Read the Business Plan
                </BizPlanButton>
              </center>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-12">
              <h2>Token Liquidity App is Under Construction</h2>
            </div>
          </div>

          <div className="grid-wrapper" style={{ visibility: 'hidden' }}>
            <div className="col-6">
              <center>
                <span className="image">
                  <img src={qrcodeBCH} alt="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al" />
                </span>
                <br />
                <p style={{ textAlign: 'center' }}>
                  bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al
                </p>
                <br />

                <span className="image">
                  <img src={qrcodeSLP} alt="simpleledger:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfqtaqr70rp" />
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
                  href="https://badgerwallet.cash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Badger Wallet
                </a>{' '}
                browser extension, or click the Buy or Sell buttons to trade $1
                USD worth of tokens.
              </p>
              <p>
                The liquidity app will send tokens if it recieves BCH. It will
                send BCH if it recieves tokens. It will take two (2) block
                confirmations before tokens will appear in your wallet. Refresh
                the window to get the most up-to-date exchange rate.
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
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="">
                <h2>Software Projects</h2>
              </header>
              <p className="projectText">
                The PSF token will be used to fund the following open source
                projects, with more on the way.
              </p>
            </div>

            <div className="col-6">
              <h3>Anonymous Bitcoin: Consolidating CoinJoin</h3>
              <p>
                Consolidating CoinJoin is a peer-to-peer mixing service that
                brings privacy and fungability to the Bitcoin Cash network.
                Users will use the PSF token to pay for the mixing service.
                Servers will use the PSF token to pay Mirrors to advertise their
                tor .onion address on the IPFS peer-to-peer network, and also to
                transfer data between the <i>clearnet</i> and the <i>darkweb</i>
                .
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://gist.github.com/christroutner/8d54597da652fe2affa5a7230664bc45"
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
              <h3>P2P VPS: Peer-to-Peer Cloud Infrastructure</h3>
              <p>
                P2P VPS allows people to rent out unused computing power for
                hosting common internet services like blogs, email, VPN, and
                other cloud services. Any device capable of running Docker can
                be rented on the network, in exchange for the PSF token.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://p2pvps.org/about"
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
}

export default HomeIndex

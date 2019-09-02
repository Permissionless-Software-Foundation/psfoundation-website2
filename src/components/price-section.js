import React from 'react'
//import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import PriceChart from './price-chart'

//const SERVER = 'http://localhost:5000'
const SERVER = 'https://psfoundation.co'


const PriceP = styled.p`
  text-align: left;
  font-size: 24px;
`

const Span1 = styled.span`
  color: #000000;
`

class PriceSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 0,
      usdPerBCH: 0,
      bchBalance: 0,
      tokenBalance: 0,
    }
  }

  render() {
    // Update the global window object with the USD per Token price.
    if (typeof window !== 'undefined') {
      window.usdPerToken = this.state.usdPerToken
    }

    return (
      <section id="price-section" className="main style3">
        <div className="grid-wrapper">
          <div className="col-7">
            <div>
              <h2>App Exchange Rate & Balances</h2>
              <PriceChart server="https://psfoundation.co" />
            </div>
          </div>

          <div className="col-5">
            <PriceP>
              <u>*Current PSF Token Price:</u>
            </PriceP>
            <PriceP>
              ${this.round3(this.state.usdPerToken)}{' '}
              <Span1>USD per Token</Span1>
            </PriceP>
            <PriceP>
              {this.round8(this.state.usdPerToken / this.state.usdPerBCH)}{' '}
              <Span1>BCH per token</Span1>
            </PriceP>
            <PriceP>
              {this.round8(this.state.usdPerBCH / this.state.usdPerToken)}{' '}
              <Span1>tokens per BCH</Span1>
            </PriceP>
            <br />
            <p><small>
              *Based on 1 BCH. Non-linear price slippage will result in slightly
              different exchange rate.
            </small></p>
          </div>
        </div>
      </section>
    )
  }

  // React Lifecycle - component has mounted.
  async componentDidMount() {
    try {
      // Update the component state with token price from the server.
      await this.getPrice()
    } catch (err) {
      console.log(`Error in Header.js/componentDidMounts(): `, err)
    }
  }

  async getPrice() {
    try {
      const resp = await fetch(`${SERVER}/price`)
      const body = await resp.json()

      this.setState(prevState => ({
        usdPerToken: body.usdPerToken,
        usdPerBCH: body.usdPerBCH,
        bchBalance: body.bchBalance,
        tokenBalance: body.tokenBalance,
      }))

      console.log(`usdPerToken: ${this.state.usdPerToken}`)
      console.log(`usdPerBCH: ${this.state.usdPerBCH}`)
      console.log(`bchBalance: ${this.state.bchBalance}`)
      console.log(`tokenBalance: ${this.state.tokenBalance}`)
    } catch (err) {
      console.log(`Error in Header.js/getPrice()`)
      throw err
    }
  }

  // Round a number to 8 decimal places, the standard used for Bitcoin.
  round8(numIn) {
    return Math.floor(numIn * 100000000) / 100000000
  }

  round3(numIn) {
    return Math.floor(numIn * 1000) / 1000
  }
}

export default PriceSection

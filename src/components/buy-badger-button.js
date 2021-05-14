/*
  Badger button to buy $0.1 USD of PSF tokens.
*/

/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

import Util from '../components/lib/util'
const util = new Util()

const StyledButton = styled.a`
  margin-bottom: 25px;
`

class BuyBadgerButton extends React.Component {
  constructor(props) {
    super()
    console.log(`button usdPerBCH price: ${props.usdPerBch}`)
    this.usdPerBch = props.usdPerBch
  }

  render() {
    return (
      <StyledButton
        href="#"
        className="button special badger-button-buy"
        onClick={this.invokeBadger}
        data-to="bitcoincash:qrnn49rx0p4xh78tts79utf0zv26vyru6vqtl9trd3"
      >
        Buy $0.10 of PSF Tokens
      </StyledButton>
    )
  }

  // Invoke the Badger Wallet when the button is clicked.
  async invokeBadger(event) {
    event.preventDefault()

    const prices = await util.getPrice()
    //console.log(`prices: ${JSON.stringify(prices,null,2)}`)

    // Convert $0.10 into satoshis.
    let bch = 0.1 / prices.usdPerBCH
    bch = util.eightDecimals(bch)
    bch = util.bch2sats(bch)
    console.log(`Sending ${bch} satoshis in BCH`)

    // Only execute if Badger Wallet is installed.
    if (typeof Web4Bch !== 'undefined' && typeof web4bch !== 'undefined') {
      // Get a handle on the 'Buy' button.
      const badgerButtons = document.body.getElementsByClassName(
        'badger-button-buy'
      )
      const badgerButton = badgerButtons[0]

      // Instantiate web4bch
      const badgerWallet = new Web4Bch(web4bch.currentProvider)

      // Prevent value=null bug
      if (bch === null || isNaN(bch)) bch = 10000

      // Config settings for the transaction.
      var txParams = {
        to: badgerButton.getAttribute('data-to'),
        from: badgerWallet.bch.defaultAccount,
        value: bch,
      }

      badgerWallet.bch.sendTransaction(txParams, (err, res) => {
        if (err) {
          console.error(`Error sending transaction: `, err)
          return
        }

        console.log(`Transaction sent! TXID: ${res}`)

        // Run the callback if one is defined on the button.
        // var successCallback = badgerButton.getAttribute('data-success-callback')
        // if (successCallback) {
        //   window[successCallback](window.usdPerBC)
        // }
      })
    } else {
      // Send them to the badger wallet page if they don't have Badger Extension
      // installed.
      window.open('https://badger.bitcoin.com')
    }
  }
}

export default BuyBadgerButton

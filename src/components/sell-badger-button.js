/*
  Badger button to sell $0.1 USD worth of PSF tokens.
*/

/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

import Util from '../components/lib/util'
const util = new Util()

const StyledButton = styled.a`
  margin-bottom: 25px;
`

class SellBadgerButton extends React.Component {
  constructor(props) {
    super()
    console.log(`button usdPerBCH price: ${props.usdPerBch}`)
    this.usdPerBch = props.usdPerBch
  }

  render() {
    return (
      <StyledButton
        href="#"
        className="button special badger-button-sell"
        onClick={this.invokeBadger}
        data-to="bitcoincash:qrnn49rx0p4xh78tts79utf0zv26vyru6vqtl9trd3"
      >
        Sell $0.10 of PSF Tokens
      </StyledButton>
    )
  }

  // Invoke the Badger Wallet when the button is clicked.
  async invokeBadger(event) {
    event.preventDefault()

    // Get the token price from the server.
    const prices = await util.getPrice()
    //console.log(`prices: ${JSON.stringify(prices, null, 2)}`)

    // Calculate the amount of tokens to send to equate to $0.10 USD.
    let tokens = 0.1 / prices.usdPerToken
    tokens = util.eightDecimals(tokens)
    console.log(`Sending ${tokens} tokens equal to $0.10 USD`)

    // Only execute if Badger Wallet is installed.
    if (typeof Web4Bch !== 'undefined' && typeof web4bch !== 'undefined') {
      // Get a handle on the 'Sell' button.
      const badgerButtons = document.body.getElementsByClassName(
        'badger-button-sell'
      )
      const badgerButton = badgerButtons[0]

      // Instantiate web4bch
      const badgerWallet = new Web4Bch(web4bch.currentProvider)

      // Prevent value=null bug
      if (tokens === null || isNaN(tokens)) tokens = 1

      // Config settings for the transaction.
      var txParams = {
        to: badgerButton.getAttribute('data-to'),
        from: web4bch.bch.defaultAccount,
        value: tokens,
        sendTokenData: {
          tokenId:
            '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
          tokenProtocol: 'slp',
        },
      }

      // Send the tokens.
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

export default SellBadgerButton

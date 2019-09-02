/*
  Badger button to sell $1 USD worth of PSF tokens.
*/

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  margin-bottom: 25px;
`

class SellBadgerButton extends React.Component {
  render() {
    return <StyledButton href="#" className="button special badger-button-sell"
      onClick={this.invokeBadger}
      data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al">
        Sell $0.10 of PSF Tokens
      </StyledButton>
  }

  // Invoke the Badger Wallet when the button is clicked.
  invokeBadger (event) {
    event.preventDefault();

    // Calculate the number of tokens to send.
    let tokens = 1.0
    if(window && window.usdPerToken) {
      // Calculate number of tokens in a dollar, up to 3 decimal places
      tokens = 1000 / window.usdPerToken
      tokens = Math.floor(tokens)
      tokens = tokens / 1000
      tokens = tokens / 10 // From $1 to $0.10
    }

    console.log(`Selling ${tokens} tokens.`)

    //let bch = Math.floor(100000000/window.usdPerBCH)
    //console.log(`Sending ${bch} BCH`)

    var badgerButtons = document.body.getElementsByClassName("badger-button-sell")
    for (var i = 0; i < badgerButtons.length; i++) {
    //  var badgerButton = badgerButtons[i]
      //badgerButton.addEventListener('click', function(event) {
 /*       if (typeof web4bch !== 'undefined') {
          // Instantiate web4bch
          web4bch = new Web4Bch(web4bch.currentProvider)

          // Prevent value=null bug
          if(tokens === null || isNaN(tokens)) tokens = 10000

          var txParams = {
            to: badgerButton.getAttribute("data-to"),
            from: web4bch.bch.defaultAccount,
            value: tokens,
            sendTokenData: {
              tokenId: '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0',
              tokenProtocol: 'slp'
            }
          }

          web4bch.bch.sendTransaction(txParams, (err, res) => {
            if (err) return

            console.log(`Transaction sent!`)

            
            // Run the callback if one is defined on the button.
          //  var successCallback = badgerButton.getAttribute("data-success-callback")
          //  if (successCallback) {
          //    window[successCallback](window.usdPerBC)
          //  }
            
          })
        } else {
          window.open('https://badger.bitcoin.com')
        }*/
      //})
    }
  }
}

export default SellBadgerButton

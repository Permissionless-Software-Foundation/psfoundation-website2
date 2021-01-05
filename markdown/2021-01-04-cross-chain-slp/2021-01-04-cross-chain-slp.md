---
date: "2021-01-04"
title: "Cross Chain SLP"
root: "/blog"
path: "/blog/cross-chain-slp"
---

This document is a summary description of a new project managed and funded by the Permissionless Software Foundation. It contains the information for developers who are interested in this contract. Interested developers should reach out via the [PSF Telegram channel](https://t.me/permissionless_software). They will be required to complete a screening task (at the bottom) before being considered for this contract.

## Scope of Work
The purpose of this project is to transfer tokens between the BCH and AVAX blockchains. The deliverable should be a protocol specification and software implementation that can burn received SLP tokens on the BCH chain and mint new tokens on the AVAX chain, and also burn received tokens on the AVAX chain while having them be minted on the BCH chain.

## Payment
The developer selected to do this work will be rewarded a weekly stipend, equivalent to $200 USD per week, paid in PSF tokens. The work may be terminated after three months, but may be continued if additional funding can be found. The developer is expected to put in at least 20 hours per week of effort towards the project.

## Workflow
A workgroup will be formed under the [PSF TSC](https://github.com/Permissionless-Software-Foundation/TSC). The developer selected to do the work is expected to meet with the workgroup once per week over Zoom and present a status update to the members of the workgroup. The workgroup will help mentor the developer and guide them around technical issues. The following tools will be used to manage work and communicate information:
- [This Trello Board](https://trello.com/b/MBXfHrX7/fullstackcash) will be used to manage individual tasks and communicate on-going project status.
- [GitHub Issues](https://github.com/Permissionless-Software-Foundation/slp-avax-bridge/issues) will be used to flag bugs and record potential improvements.
- [A Telegram chat room](https://t.me/permissionless_software) will be used for the workgroup to coordinate on a daily basis.
- [message.FullStack.cash](https://message.fullstack.cash) will be used for private communication, using encrypted messages.

## Prerequisite Knowledge
The selected developer should meet all these requirements:
- Fluent in the English language
- Experienced with node.js JavaScript and publishing npm packages.
- Experienced in writing unit and integration tests for JavaScript libraries using mocha and chai.
- Experienced mocking unit tests using sinon.
- They should have read Mastering Bitcoin or [Mastering Bitcoin Cash](http://zh.thedev.id/mastering-bitcoin-cash/) and have a firm grasp of blockchain concepts like UTXOs, the Bitcoin transaction format, and using block explorers.

## Roadmap of Milestones
The following list are the milestones that should be achieved as development progresses, to complete the scope of work. The completion of each milestone should be accompanied with unit and integration tests, and unit tests should maintain near-100% test coverage.

- BCH fundamentals
  - Fork [npm-lib-boilerplate](https://github.com/christroutner/npm-lib-boilerplate) and create an npm library called slp-avax-bridge that includes [bch-js](https://www.npmjs.com/package/@psf/bch-js) and [bch-util](https://www.npmjs.com/package/bch-util) as dependencies.
      - Done: [slp-avax-bridge](https://github.com/Permissionless-Software-Foundation/slp-avax-bridge)
  - Create a mintable SLP token on the BCH blockchain.
  - Add a method to slp-avax-bridge that can mint new SLP tokens.
  - Add a method to slp-avax-bridge that can burn SLP tokens.
- AVAX fundamentals
  - Create a new class library in slp-avax-bridge for AVAX. Add [avalanch.js](https://github.com/ava-labs/avalanchejs) as a dependency.
  - Create a mintable token on AVAX.
  - Add a method to slp-avax-bridge that can mint a new AVAX token on the X-chain.
  - Add a method to slp-avax-bridge that can burn the AVAX token.
- Asset Transfer    
  - Fork the [token-liquidity app](https://github.com/Permissionless-Software-Foundation/token-liquidity) to a ‘token-transfer app’, and add slp-avax-bridge as a dependency.
  - Modify the token-liquidity app so that it mints a new AVAX token when receiving the SLP token. This is opposed to the current functionality which sends BCH in response to receiving an SLP token.
  - Replace the BCH receiving library with one that mints a new SLP token when an AVAX token is received.
- Wrapup
  - Add a [PSF specification document](https://github.com/Permissionless-Software-Foundation/specifications) describing the protocol for transferring tokens between the blockchains.
  - Add installation installation and usage instructions to the README of the token-transfer app.
- Production
  - Stand up a simple web page, and customize the token-transfer app, to enable users to transfer PSF tokens between the AVAX and BCH blockchains.

## Reference Information
- [Mastering Bitcoin Cash](http://zh.thedev.id/mastering-bitcoin-cash/)
- [Getting started with bch-js](https://youtu.be/GD2i1ZUiyrk)
- [FullStack.cash](https://fullstack.cash)
- [Introduction to AVAX](https://youtu.be/rD-IOd1nvFo)
- [AVAX developer documentation](https://docs.avax.network/)

## Screening Task
The following screening task must be completed by all applicants before being considered for this contract, in order to demonstrate their ability to work with JavaScript and the BCH blockchain.

Use the bch-js-examples repository to create a new SLP token:
https://github.com/Permissionless-Software-Foundation/bch-js-examples

You can watch the video on the examples page to see how it's done:
https://fullstack.cash/examples

Send at least one of your newly created tokens to this SLP address:
*simpleledger:qzjgc7cz99hyh98yp4y6z5j40uwnd78fw5napqqkm4*

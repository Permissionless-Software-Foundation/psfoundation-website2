---
date: "2020-08-16"
title: "Staking Complete for Q3"
root: "/blog"
path: "/blog/staking-complete"
---

As described [in the business plan](http://localhost:8000/biz-plan/business-plan/#funding), the cut-off for staking PSF tokens, in order to participate in the next round of governance, was reached on August 15th. **Block 648,518** is the cut-off block height that will be used to calculate the FUND002 token air drop on October 15th.

_Be sure not to move your tokens between now and then_, in order to be eligible to receive the air-drop on October 15th.

## How Staking Works
SLP tokens are a form of 'colored coin'. There are two parts to a colored coin:

- The token is represented as a 'dust' [UTXO](https://developer.bitcoin.com/mastering-bitcoin-cash/4-transactions/).
- The UTXO is 'colored' by metadata in the OP_RETURN of the transaction.

UTXOs are a data structure. One of the properties in that data structure is the block height when they were confirmed on the blockchain. By looking at the block height, anyone can determine how 'old' the UTXO is.

When a UTXO is spent, it is destroyed, and new UTXOs are generated. These new UTXOs have a new block height. This is why it's so important not to spend or move your 'staked' PSF tokens. The simple act of moving or spending a portion of them will destroy the coin age.

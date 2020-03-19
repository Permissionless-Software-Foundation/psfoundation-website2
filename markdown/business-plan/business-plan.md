---
date: "2019-09-01"
title: "PSF Token - Business Plan"
root: "/biz-plan"
path: "/biz-plan/business-plan"
---

## Table of Contents
- Overview
  - [Executive Summary](#executiveSummary)
  - [The Problem: Underfunded Open Source Projects](#problem)
  - [The Solution: A Community-Based Utility Token](#solution)

- [The Permissionless Software Foundation](#thePSF)
  - [Mission](#mission)
      - [Tools to fight surveillance](#antiSurveillance)
      - [Tools to fight censorship](#antiCensorship)
  - [Governance](#governance)
      - [Short-term, General Discussion](#generalDiscussion)
      - [Long-term, Technical Discussion](#technicalDiscussion)
      - [Discussion of Governance](#governanceDiscussion)
      - [Board of Directors](#boardOfDirectors)
      - [Board of Advisors](#boardOfAdvisors)

- [Token Economics](#tokenEconomics)
  - [Token Creation, Issuance, and Wallet](#tokenCreation)
      - [Value Creation](#valueCreation)
      - [Scope of Value: SaaS](#scopeOfValue)
      - [A Pseudo-Stable Token](#pseudoStableToken)
          - [Bancor & Liquidity](#bancor)
          - [High Demand: Capturing Value](#highDemand)
          - [Low Demand: Unprofitable Liquidity](#lowDemand)
          - [Price Gravity & Transparency](#priceGravity)
      - [Mitigating Catastrophic Failure](#migitatingFailure)
- [Labor](#labor)
  - [Salaried Contributors](#salaries)
  - [Bounties](#bounties)
  - [Freelance Developers](#freelance)
- [Projects](#projects)
  - [Time Tracking](#timeTracking)
  - [End-to-End Encrypted Web Chat](#chat)
  - [Uncensorable Publishing](#publishing)
  - [Tor Search Engine](#searchEngine)
  - [IPFS File Hosting](#fileHosting)
  - [Permissionless, Anonymous Email](#permissionlessEmail)
  - [Anonymous Bitcoin: Consolidating CoinJoin](#coinjoin)
  - [P2P Cloud Infrastructure: P2P VPS](#p2pvps)





## Executive Summary<a name="executiveSummary"></a>
This document lays out the business model and formation plans for the *Permissionless Software Foundation* (**PSF**). The Foundation is a community-oriented and legally-nonexistent organization whos purpose is to foster the <u>growth of open source software</u> and the <u>adoption of Bitcoin Cash</u> across the globe. The PSF will offer a Simple Ledger Protocol (**SLP**) token on the Bitcoin Cash (**BCH**) network to self-fund the development of open source software, and recognize contributors that help the organization grow.

The focus of efforts will be on software that fits the software as a service (SaaS) business model, as that model lends itself best to the use of a native utility token. Many ideas are borrowed from [the Bancor whitepaper](https://github.com/Permissionless-Software-Foundation/token-liquidity/blob/master/docs/bancor-protocol-whitepaper.pdf), such as the concepts of token liquidity and forming a community that can self-fund through a native token. See [this video](https://youtu.be/LcbHTF3zCdI) for additional background. The *primary purpose of the token* is to <u>recognize</u> and <u>quantify</u> contributions by community members.

The Foundation will fund development of SaaS open source software projects. The value of this software will be monetized through the burning of PSF utility tokens. The Foundation will manage projects with the goal of creating a positive-reinforcement cycle between developers, software, and the pseudo-stable utility token. **The primary business problem that the token-economic model solves is rewarding developers later in the business cycle.**

When the token is used to pay for software services, the tokens are burned, and BCH is captured in a special **token-liquidity** application, inspired by the Bancor whitepaper. This application allows community members to exchange their tokens for BCH, providing perfect liquidity. The price of the token is loosely pegged to BCH through an adjustable exchange rate. The loose peg allows supply and demand dynamics to work naturally, but retards wild market swings.

## The Problem: Underfunded Open Source Projects<a name="problem"></a>
Funding for open source software projects is a well studied and unsolved social problem, primarily due to the concept of [code rot](https://en.wikipedia.org/wiki/Software_rot) in modern software development. Rather than rehash or summarize the issue, interested readers should refer to this seminal work by Nadia Eghbal:

- [Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure](https://www.fordfoundation.org/about/library/reports-and-studies/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure)

## The Solution<a name="solution"></a>
While [many business models for open source software exist](https://github.com/nayafia/lemonade-stand), all are incomplete, requiring either venture capital, corporate sponsorship, or some other small number of parties to take on a great deal of risk in order to get the project to profitability. Tokens on the other hand, hold the promise of allowing communities to self-fund, by easily tracking the labor put forth by community members and then rewarding them if the software grows in usage.

Here is a list of articles discussing this idea further:
- https://opensource.com/article/18/8/open-source-tokenomics
- https://www.gluu.org/blog/foss-utility-tokens/
- https://medium.com/s/story/why-decentralization-matters-5e3f79f7638e

## The Permissionless Software Foundation<a name="thePSF"></a>

### Mission<a name="mission"></a>
The mission of the Permissionless Software Foundation is to foster the <u>growth of open source software</u> and the <u>adoption of Bitcoin Cash</u> across the globe. We belive this is the best way to promote individual sovereignty and increase prosperity. The Foundation will focus on the development, management, and promotion of software that makes it easy for individuals to protect their privacy, circumvent censorship, and engage in economic action.

#### Tools to fight surveillance<a name="antiSurveillance"></a>
The primary tool used to protect privacy is [the Tor network](https://www.torproject.org/). The Tor network and tor-accessible browsers like [Brave browser](https://brave.com/browser-option-a-hpa811/) work within the current [server-client paradigm](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), but they provide a layer of anonymity by hiding the server IP address inside the Tor network.

For financial privacy, cryptocurrency will be used, combined with obfuscation technologies such as [Consolidating CoinJoin](https://gist.github.com/christroutner/457b99b8033fdea5ae565687e6360323), [CashShuffle](https://cashshuffle.com/), or [Cash Fusion](https://news.bitcoin.com/bitcoin-cash-gets-significant-privacy-boost-with-cashfusion-alpha-launch/)

#### Tools to fight censorship<a name="antiCensorship"></a>
The primary tool used to prevent censorship will be [IPFS](https://ipfs.io/) and the Bitcoin Cash blockchain. These two peer-to-peer (p2p) networks have individually [proven](http://la3.org/~kilburn/blog/catalan-government-bypass-ipfs/) robust censorship resistance throughout their short lives. The Foundation offers software that [combine these two technologies](https://troutsblog.com/about).

### Governance<a name="governance"></a>

#### Short-term, General Discussion<a name="generalDiscussion"></a>
Day-to-day, short-term communication will take place on [this Telegram channel](https://t.me/permissionless_software). For private, end-to-end encrypted communication, we have created [this Tor-friendly chat web app]((https://chat.psfoundation.cash/))

#### Long-term, Technical Discussion<a name="technicalDiscussion"></a>
For long-term, technical discussions, GitHub Issues will be used. GitHub Issues have a proven and effective track record for technical collaboration. Issues will also be an important element in coordinating labor using the token economics presented in this document.

[Trello](https://trello.com) or similar web applications will be used to coordinate and organize effort around sub-projects, using Agile software development best practices. Again, these tools have well-established track record within the software industry.

#### Discussion of Governance<a name="governanceDiscussion"></a>
[Loomio](https://www.loomio.org/) is a proven platform for democratic discussion and decision making. Non-technical, long-term discussions, like those around governance, will take place on the [PSF Loomio group](https://www.loomio.org/join/group/46sYVVAhsMo5aWzr4jF71ZJS/).

#### Board of Directors<a name="boardOfDirectors"></a>
A board of directors will slowly be created to help govern the Foundation. The goal is to decentralize power within the organization so that no one entity represents a single point of failure. Pseudonyms for board members, to protect their identity from the wider world, will be allowed and encouraged.

The primary duties of the board of directors are short and simple:
- The board has the sole power to create new tokens. The tokens are primarily used to recognize contributors that help the organization grow.<br /><br />

- They can also approve the transfer of tokens or BCH into the token-liquidity app, in order to help the token stay close to the psudo-stable peg.

To prevent abuse, seek consensus, and reduce central points of failure, new token issuance will require a 3-of-5 signature. New tokens can only be created if 3 of the 5 directors sign the transaction with their private key. Likewise, BCH held by the organization can only be spent if three of the five keys sign for the transaction.

The ‘creation address’ for new tokens will be changed annually. In addition to good security, this process will ensure all board members are familiar with the process of adding and removing private keys, so that keys can be replaced easily if a security compromise occurs.

Members of the board of directors will posses deep knowledge in one or more of these area:
- Cryptography
- Tor and obfuscation technologies
- Business experience in the cryptocurrency space
- JavaScript
- Networking and Dev Ops
- International law on cryptocurrencies

#### Board of Advisors<a name="boardOfAdvisors"></a>
A board of advisors will also be assembled to provide guidance on matters of technical, legal, and governance matters.

## Token Economics<a name="tokenEconomics"></a>
Before delving into the specifics of the token economics, it's important to keep the big picture in mind: The purpose of the mathematics behind the token is to allow free market supply-and-demand to control the price, but to institute 'guard rails' in the event of market panics or irrational exuberance, and thereby encourage the price of the token to gravitate towards a pseudo-stable price point.

The value created by the Permissionless Software Foundation comes from both managing the software projects and managing this **pseudo-stable peg** between BCH and the token. The Foundation is as much an institution for creating software, as it is a central bank of their own community-based economy.

### Token Creation, Issuance, and Wallet<a name="tokenCreation"></a>
The proposed PSF token will be issued on the Bitcoin Cash (BCH) blockchain using the [Simple Ledger Token Protocol (SLP)](https://simpleledger.cash/) and [SLP-SDK](https://developer.bitcoin.com/slp). The token is currently exchanged using the [Badger Wallet](https://badger.bitcoin.com/), the [Bitcoin.com wallet](https://wallet.bitcoin.com), and several up-and-coming SLP token-aware wallets, by sending either BCH or PSF tokens to this BCH address:

bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al

The PSF token is identified by its unique SLP property token ID of:

[38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0](https://rest.bitcoin.com/v2/slp/tokenStats/38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0)

The minting baton for creating new tokens is active and controlled by the Permissionless Software Foundation. That means there is no cap on the token issuance. The Board of Directors of the Foundation will have the sole power to create tokens at-will, to reimburse or recognize the effort of community members.

#### Value Creation<a name="valueCreation"></a>
At the center of the token economics is the [liquidity app](https://github.com/Permissionless-Software-Foundation/token-liquidity), allowing community members to permissionlessly exchange tokens for Bitcoin Cash (or Bitcoin Cash for tokens) at any time. Because the Foundation has the sole power to create new tokens, it has the obligation to regulate the price of the token and work with the mathematics of the app to achieve a pseudo-stable price.

Price management is intended to follow a reinforcing ‘virtuous circle’ of value as follows:

1. Developers who contribute time and effort are rewarded in newly issued tokens.<br /><br />

2. Continuous efforts by developers and contributors make the software more valuable and should increase usage of the software.<br /><br />

3. Users inject value into the token economy in one of two ways. Both activities increase the market price of the token.
    - They acquire tokens to use the software by sending BCH to the liquidity app.
    - They pay BCH to the apps they interact with and that app sends a portion of the BCH to the token-liquidity app with instructions to burn that amount of tokens.

4. Contributors can trade their tokens for BCH via the liquidity app. They can then spend the BCH directly or convert it into their local fiat currency via a local exchange.

To be clear, the token does not become more valuable because of the labor of the developers ([Labor Theory of Value](https://en.wikipedia.org/wiki/Labor_theory_of_value)). The token will become more valuable for two reasons:

1. Modern software suffers from entropy or ‘[code rot](https://en.wikipedia.org/wiki/Software_rot)’. Continuous contributions are required to keep modern software functional and secure. It is this *continued* effort that is valuable, and the reason why other organizations can’t simply copy the software to capture the value. This economic phenomenon is sometimes referred to as the [Red Queen's game](https://www.entrepreneur.com/article/218359).<br /><br />

2. Studies have shown no correlation between the number of users and the number of developers in an open source project, which is why unfunded open source projects are such a big social problem (example: [the Heartbleed bug](https://mashable.com/2014/04/14/heartbleed-open-source/#IxuitorltiqZ)). This also means that targeted effort by a few developers can provide a great deal of value to a large population of users.

**It is <u>demand for</u> and <u>usage of</u> software and services which monetize the token, that captures value and increases the price of the token.** This allows open source developers to capture value later in the software life cycle. Rewarding developers later in the business cycle **is the problem this business model solves**.

#### Scope of Value: SaaS<a name="scopeOfValue"></a>
Price appreciation of the token is directly tied to usage of the token and management of supply. For this reason, the Foundation must be very selective of the class of software it supports. The ‘Software as a Service’ business model is the most conducive, where usage of the software is directly tied to usage of the token. This business model will be a prerequisite for any project sponsored by the Foundation.

#### A Pseudo-Stable Token<a name="pseudoStableToken"></a>
##### Bancor & Liquidity<a name="bancor"></a>
[The Bancor whitepaper](https://github.com/Permissionless-Software-Foundation/token-liquidity/blob/master/docs/bancor-protocol-whitepaper.pdf) was the original inspiration for the token liquidity app and token economics discussed below. They were the first to introduce the thesis that liquidity is what differentiates ‘real money’ from ‘pretend money’, and to facilitate perfect liquidity in cryptocurrencies through the use of an autonomous application. See [this video](https://youtu.be/LcbHTF3zCdI) for additional background.

Using the [Metamask](https://metamask.io/) browser extension, funded with a small amount of Ethereum, you can play with their token liquidity apps by visiting https://bancor.network. This same user experience is possible on the Bitcoin Cash blockchain using [Badger Wallet](https://badger.bitcoin.com/) and the [token liquidity app](https://github.com/Permissionless-Software-Foundation/token-liquidity) introduced here.

While Bancors token liquidity concept was implemented as a smart contract on the Ethereum blockchain, the token liquidity app for the Permissionless Software Foundation is implemented as a web app on the BCH blockchain using the [SLP JavaScript SDK](https://developer.bitcoin.com/slp). While the mathematics governing the Foundation’s app is similar in nature, the original mathematics in the Bancor whitepaper was ultimately rejected in favor of the mathematics presented here. The curve below illustrates the effective 'exchange rate' between tokens and BCHs as a function of the apps balance of each.

![Exchange Rate Curve](./images/app-curve.jpg 'The Exchange Rate curve for the token liquidity app as a function of the apps token and BCH balance.')

![./images/app-equations.jpg](./images/app-equations.jpg 'The equations governing the curve above.')

- I subscript denotes initial value.
- Delta (Δ) denotes change in value.
- Negative token balance: tokens in, BCH out
- Positive token balance: tokens out, BCH in

The liquidity app serves as an automated market maker, continuously adjusting the exchange rate according to the logarithmic equation above. The curve above was generated by assuming the app starts out with an initial balance of 25 BCH and 5000 tokens. This sets the <u>pseudo-stable price point</u> at 200 tokens-per-BCH (5000 / 25 = 200). These simple equations provide the following characteristics:


- **The application can never run out of BCH.** As more BCH is extracted from the app, the exchange rate decreases in such a way that the entire amount of BCH can never be completely extracted.

- **The price of the token increases exponentially with demand.** Because of the rapid price appreciation, developers are incentivized to hold their tokens to maximize the profit from their efforts. But due to the liquidity provided by the app, they are free to ‘cash out’ at any time.

- **Pseudo-stable price point.** The equation encourages a pseudo-stable price of 200 tokens per BCH. Buyers or sellers are increasingly disincentivized as the price is driven further from this point.

- **Fair price dynamics.** Because the pricing algorithm is transparent, all participants are fairly incentivized.

The reasoning behind these core ideas are expanded below.

##### High Demand: Capturing Value<a name="highDemand"></a>
The figure below shows two alternative pricing algorithms. The blue line is the logarithmic curve presented above. The red line is a linear price curve, intersecting the same price point at 200 tokens-per-BCH. At a market value of $200 USD-per-BCH, the linear curve (red line) is equivalent to $1 per-token, and does not change as the token balance of the liquidity app changes.

![./images/linear-exchange-rate.jpg](./images/linear-exchange-rate.jpg 'Comparing the exchange rate curve with a linear exchange rate.')

If the exchange rate of the token is fixed at $1 per token, then early contributors have no financial incentive to help with the initial development or hold the tokens they are paid with. To provide incentive for early adopters, the price curve must be above the red line as market demand for the token increases.

Not only does the increasing price allow contributors to profit from their efforts, it also allows the Foundation to capture value, in order to pay for operations and expand support for additional open source initiatives. As the price climbs 2x to 10x above the pseudo-stable point, new tokens will be issued by the Foundation and sent to the liquidity app in order to capture some of the BCH accumulating in the app. This will have the effect of driving the exchange rate back towards the pseudo-stable price.

##### Low Demand: Unprofitable Liquidity<a name="lowDemand"></a>
If token issuance is mismanaged or investment of time is misallocated to unprofitable projects, there will be an over-supply of tokens in the market. This will drive the price of the token down. Token holders will always be able to ‘cash out’, but at an increasingly degraded exchange rate.

![./images/price-curve-tail.jpg](./images/price-curve-tail.jpg 'As tokens are extracted from the app, the exchange rate changes, preventing the app from running out of BCH.')

If the price of the token is pushed so far away from the pseudo-stable price point as to become nonfunctional for use in SaaS applications (-10x to -100x), the Foundation will need to add BCH to the liquidity app to help prop up the price. The mathematics favor this.

It takes an exponentially increasing amount of tokens to extract a linear amount of BCH from the liquidity app as the price curve moves to the left of the pseudo-stable price point. To state that another way: As the BCH balance decreases, adding BCH to the app has increasing effectiveness at stabilizing the price. These mathematics retard the ability of panics in the marketplace to negatively affect the community, by making it easy for the Foundation to maintain a functional token.

It will be important for the Foundation to maintain a reserve of BCH in order to support the liquidity app, in the event of such market panics.

##### Price Gravity & Transparency<a name="priceGravity"></a>
Hopefully the explanations above have revealed to the reader why the liquidity app is said to have a ‘pseudo-stable’ price point. As the price curve moves to the right of this point, human greed kicks in to bring the price back down. As the curve moves to the left of this point, sellers of the token are increasingly disincentivize and buyers incentivized. As such, the price tends to ‘gravitate’ towards the pseudo-stable price point and stabilize around it.


#### Mitigating Catastrophic Failure<a name="migitatingFailure"></a>
Many threats exist to the Permissionless Software Foundation and the community that will form around the token. Regulatory clarity and jurisdictional safety is unclear. Enforcement by state actors is unpredictable. Cryptocurrency communities have shown that contention happens. Communities around open source software naturally split and fork the software when compromise can not be reached. This degrades the valuable network effects of any coin or token in the short-term, but ultimately improves diversity and innovation in the long-term. Malicious hackers could potentially obtain the private keys for the PSF token and destroy its value by manipulating the creation of tokens.

These threats are anticipated and mitigated by the use of the SLP protocol for tokens. All token exchanges take place on the Bitcoin Cash blockchain in a public, transparent, uncensorable manner. Because of this, it’s possible to easily fork the token and air-drop a new one to existing token holders, at any point in time.

In the event of a state actor threatening the existence of the Foundation, or simply an irreconcilable disagreement within the organization, any minority group of actors can create a new token and send it to existing token holders, similar to how BCH air-dropped their coin to existing holders of BTC. They can also fork the SaaS projects overseen by the Foundation and modify them to use the new token, as all software will utilize [the MIT license](https://opensource.org/licenses/MIT).

The same activity can mitigate a catastrophic hack of the Foundations private keys. A new token can simply be created and sent to all token holders prior to the hack.

In this way, the Foundation embraces the concept of forks. Every effort will be made to listen and respect the views of community members and reach a compromise. But in the event of contentious disagreements in governance, minority members are encouraged to fork a new token off the existing one, and grow their own community.

## Labor<a name="labor"></a>
Just as financial investors risk capital in a venture, early contributors in the community risk their labor. The primary difference is that community developers are in direct control of the outcome, and can continuously adapt to a changing business environment.

Because of the ‘price gravity’ of the token, early contributors have a barometer upon which to gauge market value for their labor. Assuming the liquidity app starts with initial balances of 25 BCH and 5000 tokens, the pseudo-stable price point is 200 tokens-per-BCH (5000 / 25 = 200). At a market value of $200 USD-per-BCH, the market value of the pseudo-stable price point is $1 USD per token. While the market value of BCH in USD or other fiat currency is free to fluctuate, the 200 tokens-per-BCH pseudo-stable price point will remain constant.

Community members know in advance that the long-term price of the token should gravitate toward 200 tokens-per-BCH. Increasing demand for tokens in the market or increasing prices of BCH will both serve to increase the fiat-price of the token. Developers have both a value with which to gauge fair-market value for their labor, and direct control over the economic repercussions of their actions.

Community members willing to be compensated in tokens, and then hold those tokens until the price increases above the pseudo-stable price point, will make the best economic actors, and will be the most welcome early contributors. If the Foundation has other means of financing (such as BCH), they can use tokens to tip or supplement developers and thereby gain access to a wider pool of labor.

### Salaried Contributors<a name="salaries"></a>
Core community members willing to risk their labor can be directly compensated by the Foundation in tokens. Labor can be tracked in a transparent, open manner using accounting software at [ovn.psfoundation.cash](https://ovn.psfoundation.cash). This [Open Value Network](https://wiki.p2pfoundation.net/Open_Value_Network) (OVN) software is similar to that used by [Sensorica NRP](http://nrp.sensorica.co/), who pioneered the concept.

A market-value for labor, paid in tokens and based on the pseudo-stable price point, can be negotiated and distributed the same way as it would be for any fiat-paid salaried employee.

### Bounties<a name="bounties"></a>
[GitCoin](https://gitcoin.co/) and [GitCash](https://gitcash.io/) are two permissionless bounty programs that have been used to pay developers in cryptocurrencies and tokens. While interfacing the PSF token to these platforms will be advantageous, it is not critical, as the workflow of both platforms is not difficult to replicate.

Conventional Agile software practices can be used to break larger projects into small tasks. GitHub Issues can be created for each task and tagged with a PSF token bounty. Developers are free to claim and fulfil Issues (permissionlessly) by submitting Pull Requests (PR) that meet the specifications in the Issue. Once a PR is accepted into the code base, the bounty can be released to the developers Bitcoin Cash address. This can be done manually or in an automated fashion.

### Freelance Developers<a name="freelance"></a>
More platforms are available for specialized needs that can not be directly serviced by the community. Cryptocurrency-based freelance platforms like [FreelanceForCoins.com](https://freelanceforcoins.com/) or [LazyFox.io](https://lazyfox.io/), channels on cryptocurrency developer chat rooms like the [Bitcoin Cash Association](https://discord.gg/gNhPRw7), and fiat-based freelance platforms like [Upwork.com](https://www.upwork.com/) can all be used to find the appropriate expertise. Tokens can be used to tip or subsidize bids for labor on these platforms.


## Projects<a name="projects"></a>
Each software project presented here helps to reinforce the others, creating an infrastructure and toolset for people to engage in economic activity while protecting their privacy and anonymity. Each project listed will be built in the order presented here.

### Time Tracking<a name="timeTracking"></a>
The time tracking app at [ovn.psfoundation.cash](https://ovn.psfoundation.cash) is used by contributors to track time spent on Foundation projects. This logged time can then be rewarded with PSF tokens. This time-tracking app allows the Permissionless Software Foundation to be an [Open Value Network](https://wiki.p2pfoundation.net/Open_Value_Network). The source code for the app has two parts:
- [The front end user interface](https://github.com/Permissionless-Software-Foundation/time-tracking-front-end)
- [The back end REST API](https://github.com/Permissionless-Software-Foundation/time-tracking-api)

### End-to-End Encrypted Web Chat<a name="chat"></a>
Our [web-based chat app](https://chat.psfoundation.cash) is distributed over IPFS making it very difficult to censor or block. It is end-to-end encrypted, allowing members of the Foundation to communicate securely without any danger of snooping. The code is open source, allowing anyone to audit it. While [our Telegram channel](https://t.me/permissionless_software) allows communication with a more mainstream audience, the web-based chat app is useful for anyone who needs to communicate privately in real-time. And because it is delivered through a web browser, any type of device or operating system can access it.

- [The web-app source code](https://github.com/Permissionless-Software-Foundation/chat-web-app)

### Uncensorable Publishing<a name="publishing"></a>
Several tools have been packaged together to allow users to create websites and web applications that are nearly uncensorable. The technologies used are a combination of IPFS, Bitoin Cash, and Tor. A demo and walk-through of the earliest version is [available here](https://troutsblog.com/about).

In order to publish uncensorable updates to this type of publishing platform, the Bitcoin Cash blockchain is used. These updates will also send a small amount of BCH to our token liquidity app, instructing it to burn a small amount of tokens. This publishing application is the first income-producing product distributed by the PSF, and is also a foundational piece of technology upon which more advanced and uncensorable applications will be developed.

Videos:
- [Non-technical video overview of how governments censor content](https://www.youtube.com/watch?v=RlNVyatwd5M)
- [Technical walkthrough video of how this software circumvents government censorship](https://www.youtube.com/watch?v=Ez9YXpu_Chs&t=971s)

Software:
- [Web server](https://github.com/Permissionless-Software-Foundation/ipfs-web-server)
- [Website template](https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-template)
- [Memo push](https://github.com/Permissionless-Software-Foundation/memo-push) tool
for publishing updates via the Bitcoin Cash blockchain.

### Tor Search Engine<a name="searchEngine"></a>
More akin to a curated list than a search engine, the web app [described here](https://github.com/Permissionless-Software-Foundation/psf-docs/blob/master/pips/PIP004.md) will be developed to allow Tor-based websites, with their ephemeral `.onion` addresses, to be easily found and browsed. Ecommerce sites can promote themselves, allowing an advertising market to emerge. This web app will build upon the uncensorable publishing application described above.

This app will mostly be run by [Mirror nodes in a hybrid peer-to-peer network](https://honest.cash/christroutner/hybrid-p2p-networks-1051). The PSF token will align incentives and reduce spam. This will allow cryptocurrency-based services to conduct business and be ‘found’ easily, while still using the Tor network for robust censorship resistance.

### Filecoin Bridge<a name="fileHosting"></a>
Members of the Foundation are monitoring the development of the [Filecoin network](https://filecoin.io/). PSF plans to be at the cutting edge of the technology as it developers. The primary goal of this work is to build a 'bridge' that will allow BCH or PSF tokens to be used to pay for file storage on the Filecoin network.

Building this bridge will greatly complement the other PSF projects, by making the applications even harder to censor, easier to use, and thus more valuable.

### Permissionless, Anonymous Email<a name="permissionlessEmail"></a>
Email is the most fundamental piece of identity on the internet. And yet, privacy-respecting email providers are rare to non-existent because of abuse by spammers. Cryptocurrency provides the answer to that problem. Studies have shown the a cost of $0.01 to $0.05 per email is prohibitive to spammers.

An easy-to-setup, open-source email server like [iRedMail](https://iredmail.com/download.html) can be combined with a light weight [koa web server](https://github.com/christroutner/babel-free-koa2-api-boilerplate) for account management and the [SLP JavaScript SDK](https://github.com/Bitcoin-com/slp-sdk) to allow payment in PSF tokens.

For example, a new account could be funded with $3 USD worth of PSF tokens, allowing up to 300 emails to be sent or received. Once depleted of funds, more tokens can be sent to increase the quota.

### Anonymous Bitcoin: Consolidating CoinJoin<a name="coinjoin"></a>
[Consolidating CoinJoin](https://gist.github.com/christroutner/8d54597da652fe2affa5a7230664bc45) is a peer-to-peer mixing service that brings privacy and fungibility to the Bitcoin Cash network. Users will use the PSF token to pay for the mixing service. Servers will use the PSF token to pay Mirrors to advertise their tor .onion address.

### P2P Cloud Infrastructure: P2P VPS<a name="p2pvps"></a>
[P2P VPS](https://p2pvps.org/about) allows people to rent out unused computing power for hosting common internet services like blogs, email, VPN, and other cloud services. Any device capable of running Docker can be rented on the network, in exchange for BCH or the PSF token.

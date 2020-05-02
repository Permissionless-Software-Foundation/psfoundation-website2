---
date: "2029-04-30"
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
      - [Less is More](#lessIsMore)
  - [Funding](#funding)
  - [Management](#management)
      - [Management of Grants](#managementOfGrants)

- [Token Economics](#tokenEconomics)
  - [Token Creation, Issuance, and Wallet](#tokenCreation)
      - [Value Creation](#valueCreation)
      - [Scope of Value: SaaS](#scopeOfValue)
      - [A Pseudo-Stable Peg](#pseudoStableToken)
          - [Bancor & Liquidity](#bancor)
          - [High Demand: Strong Peg, Good Governance](#highDemand)
          - [Low Demand: Unprofitable Liquidity](#lowDemand)
- [Mitigating Catastrophic Failure](#migitatingFailure)
- [Labor](#labor)
  - [Salaried Contributors](#salaries)
  - [Bounties](#bounties)
  - [Freelance Developers](#freelance)
- [Projects](#projects)
  - [Time Tracking](#timeTracking)
  - [FullStack.cash](#fullstack.cash)
  - [Contract Work](#contractWork)
  - [End-to-End Encrypted Web Chat](#chat)
  - [Uncensorable Publishing](#publishing)
  - [Tor Search Engine](#searchEngine)
  - [Filecoin Bridge](#fileHosting)
  - [Permissionless, Anonymous Email](#permissionlessEmail)
  - [Anonymous Bitcoin: Consolidating CoinJoin](#coinjoin)
  - [P2P Cloud Infrastructure: P2P VPS](#p2pvps)





## Executive Summary<a name="executiveSummary"></a>
This document lays out the business model and formation plans for the *Permissionless Software Foundation* (**PSF**). The Foundation is a community-oriented, highly automated, and legally-nonexistent organization who's purpose is to foster the <u>growth of open source software</u> and the <u>adoption of Bitcoin Cash</u> across the globe. The PSF will offer a Simple Ledger Protocol (**SLP**) token on the Bitcoin Cash (**BCH**) network to self-fund the development of open source software, and reward contributors that help the organization grow.

The focus of efforts will be on the software as a service (SaaS) business model, as that model lends itself best to the use of a native utility token. The use of SaaS software by end-users imbues the token with financial value. Many ideas are borrowed from [the Bancor whitepaper](https://github.com/Permissionless-Software-Foundation/token-liquidity/blob/master/docs/bancor-formulas/bancor-protocol-whitepaper.pdf), such as the concepts of token liquidity and forming a community that can self-fund through a native token. See [this video](https://youtu.be/LcbHTF3zCdI) for additional background. The *primary purpose of the token* is to fund developers and other contributors, in order to maintain and improve the SaaS software produced by the Foundation.

When end-users pay for software services, the BCH they pay goes to burn tokens, and BCH is captured in a special [token-liquidity application](https://github.com/Permissionless-Software-Foundation/token-liquidity) (inspired by the Bancor whitepaper). The price of the token is pegged to BCH through the use of the token-liquidity app, which also maintains perfect liquidity between BCH and the token. Contributors are funded via token-grants, by existing token holders. The token-liquidity application allows contributors to exchange their tokens for BCH.

As long as efforts by developers result in stable, valuable software services, the token will maintain its peg to BCH. New tokens are minted to fund developers, and old tokens are taken out of circulation through the burning mechanism of users consuming services. New tokens are directed by existing token holders to fund developer grants every three months.


## The Problem: Underfunded Open Source Projects<a name="problem"></a>
Funding for open source software projects is a well studied and unsolved social problem, primarily due to the concept of [code rot](https://en.wikipedia.org/wiki/Software_rot) in modern software development. This problem includes the cryptocurrency space, but is much larger, encompassing the majority of the open source industry. Rather than rehash or summarize the issue, interested readers should refer to this seminal work by Nadia Eghbal:

- [Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure](https://www.fordfoundation.org/about/library/reports-and-studies/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure)

## The Solution<a name="solution"></a>
While [many business models for open source software exist](https://github.com/nayafia/lemonade-stand), all are incomplete, requiring either venture capital, corporate sponsorship, or some other small number of parties to take on a great deal of risk in order to get the project to profitability. Tokens on the other hand, hold the promise of allowing communities to self-fund, by easily tracking the labor put forth by community members and then rewarding them if the software grows in usage.

Here is a list of articles discussing this idea further:
- https://opensource.com/article/18/8/open-source-tokenomics
- https://www.gluu.org/blog/foss-utility-tokens/
- https://medium.com/s/story/why-decentralization-matters-5e3f79f7638e

## The Permissionless Software Foundation<a name="thePSF"></a>

### Mission<a name="mission"></a>
The mission of the Permissionless Software Foundation is to foster the <u>growth of open source software</u> and the <u>adoption of Bitcoin Cash</u> across the globe. We believe this is the best way to promote individual sovereignty and increase prosperity. The Foundation will focus on the development, maintenance, and promotion of software that makes it easy for individuals to protect their privacy, circumvent censorship, and engage in economic action.

#### Tools to fight surveillance<a name="antiSurveillance"></a>
The primary tool used to protect privacy is [the Tor network](https://www.torproject.org/). The Tor network and tor-accessible browsers like [Brave browser](https://brave.com/browser-option-a-hpa811/) work within the current [server-client paradigm](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), but they provide a layer of anonymity by hiding the server IP address inside the Tor network.

For financial privacy, cryptocurrency will be used, combined with obfuscation technologies such as [CashShuffle](https://cashshuffle.com/), [Cash Fusion](https://news.bitcoin.com/bitcoin-cash-gets-significant-privacy-boost-with-cashfusion-alpha-launch/), or [Consolidating CoinJoin](https://gist.github.com/christroutner/457b99b8033fdea5ae565687e6360323).

#### Tools to fight censorship<a name="antiCensorship"></a>
The primary tool used to prevent censorship will be [IPFS](https://ipfs.io/) and the Bitcoin Cash blockchain. These two peer-to-peer (p2p) networks have individually [proven](http://la3.org/~kilburn/blog/catalan-government-bypass-ipfs/) robust censorship resistance throughout their short lives. The Foundation offers software that [combine these two technologies](https://troutsblog.com/about).

### Governance<a name="governance"></a>

#### Short-term, General Discussion<a name="generalDiscussion"></a>
Day-to-day, short-term communication will take place on [this Telegram channel](https://t.me/permissionless_software). For private communication, we have a range of end-to-end encrypted applications.

#### Long-term, Technical Discussion<a name="technicalDiscussion"></a>
For long-term, technical discussions, GitHub Issues will be used. GitHub Issues have a proven and effective track record for technical collaboration. Issues will also be an important element in coordinating labor using the token economics presented in this document.

[Trello](https://trello.com) or similar web applications will be used to coordinate and organize effort around sub-projects, using Agile software development best practices. Again, these tools have well-established track record within the software industry.

#### Discussion of Governance<a name="governanceDiscussion"></a>
[Loomio](https://www.loomio.org/) is a proven platform for democratic discussion and decision making. Non-technical, long-term discussions, like those around governance, will take place on the [PSF Loomio group](https://www.loomio.org/join/group/46sYVVAhsMo5aWzr4jF71ZJS/).

While none of the proposals on Loomio are binding, they will inform token holders who help fund new grants.

#### Less is More<a name="lessIsMore"></a>
The level of governance is intentionally minimized. Governance of the organization is largely isolated to the funding mechanism. Funding from new tokens is directed by existing token holders, because they have the most to lose if those funds are misallocated. In this way, governance is left up to a free market of stakeholders with 'skin in the game'.

### Funding<a name="funding"></a>

Every 13,000 blocks (approximately three months), existing PSF token holders will be air-dropped a new 'funding' token. The funding token will only be air-dropped to holders who's tokens have not moved in three months. Five percent of the amount of PSF tokens held will be air dropped as funding tokens.

**For example**, if an address holds 100 PSF tokens that have not moved in three months, it will be air dropped 5 funding tokens.

Prior to the air-drop, developers and other contributors are free to submit grant proposals to the Foundation, along with an SLP address to receive funding. Receivers of the funding token are expected to send their funding tokens to the SLP addresses as they see fit, in order to fund the grants.

Every 13,100 blocks (approximately 1 week later), the funding tokens held by the grant SLP addresses will receive an air-drop of an equal amount of newly minted PSF tokens.

### Management<a name="management"></a>

The management team for the Foundation will be funded via grants, the same as all other contributors to the Foundation. By funding members of the management team (or not funding them), token holders within the community have the ability to 'hire and fire' these members of the management team.

The first member of the management team will have the title 'Head Janitor'. This persons chief responsibilities are to choose the other first contributors, and to slowly and a carefully distribute responsibilities and cryptographic keys. Their primary role is to grow the organization, keep it focused on the Foundations mission, and reduce any single points of failure that could lead to a catastrophic failure of the organization.

#### Management of Grants<a name="managementOfGrants"></a>

The management team of the Permissionless Software Foundation will be responsible for curating applicants and posting approved grants to the Foundation's websites for community members to fund.

## Token Economics<a name="tokenEconomics"></a>
Before delving into the specifics of the token economics, it's important to keep the big picture in mind: The purpose of the mathematics behind the token is to enable steady funding of development, and fair incentives for collaboration, in order to further the Foundation's mission.

### Token Creation, Issuance, and Wallet<a name="tokenCreation"></a>
The proposed PSF token will be issued on the Bitcoin Cash (BCH) blockchain using the [Simple Ledger Token Protocol (SLP)](https://simpleledger.cash/). The token is currently exchanged using the [Badger Wallet](https://badger.bitcoin.com/), the [Bitcoin.com wallet](https://wallet.bitcoin.com), and several up-and-coming SLP token-aware wallets, by sending either BCH or PSF tokens to this BCH address:

bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al

The PSF token is identified by its unique SLP property token ID of:

[38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0](https://rest.bitcoin.com/v2/slp/tokenStats/38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0)

The minting baton for creating new tokens is active and controlled by the Permissionless Software Foundation's management team. That means there is no cap on the token issuance. See the *Funding* section for more details on how new tokens will be minted and used.

To prevent abuse or theft, minting of new PSF tokens requires m-of-n signatures (typically 3 of 5). This requires a simple majority of key holders to approve the creation of new tokens.

#### Value Creation<a name="valueCreation"></a>
At the center of the token economics is the [liquidity app](https://github.com/Permissionless-Software-Foundation/token-liquidity), allowing community members to permissionlessly exchange tokens for Bitcoin Cash (or Bitcoin Cash for tokens) at any time, while maintaining a peg to the Bitcoin Cash (BCH) coin.

Price management is intended to follow a reinforcing ‘virtuous circle’ of value as follows:

1. Developers who contribute time and effort are rewarded in newly issued tokens.<br /><br />

2. Continuous efforts by developers and contributors make the software more valuable and should increase usage of the software.<br /><br />

3. Users inject value into the token economy in one of two ways. Both activities strengthen the peg between the token and BCH.
    - They acquire tokens to use software by sending BCH to the liquidity app.
    - They pay BCH to the apps they interact with and that app sends a portion of the BCH to the token-liquidity app with instructions to burn that amount of tokens.

4. Contributors can trade their tokens for BCH via the liquidity app. They can then spend the BCH directly or convert it into their local fiat currency via a local exchange.

To be clear, the token does not become more valuable because of the labor of the developers ([Labor Theory of Value](https://en.wikipedia.org/wiki/Labor_theory_of_value)). The token will become more valuable for two reasons:

1. Modern software suffers from entropy or ‘[code rot](https://en.wikipedia.org/wiki/Software_rot)’. Continuous contributions are required to keep modern software functional and secure. It is this *continued* effort that is valuable, and the reason why other organizations can’t simply copy the software to capture the value. This economic phenomenon is sometimes referred to as the [Red Queen's game](https://www.entrepreneur.com/article/218359).<br /><br />

2. Studies have shown no correlation between the number of users and the number of developers in an open source project, which is why unfunded open source projects are such a big social problem (example: [the Heartbleed bug](https://mashable.com/2014/04/14/heartbleed-open-source/#IxuitorltiqZ)). This also means that targeted effort by a few developers can provide a great deal of value to a large population of users.

**It is <u>demand for</u> and <u>usage of</u> software and services which monetizes the token, captures value, and strengthens the peg to BCH.** This allows open source developers to capture value later in the software life cycle. Rewarding developers later in the software life cycle **is the main problem this business model solves**.

#### Scope of Value: SaaS<a name="scopeOfValue"></a>
The stability of the peg between BCH and the token is directly tied to <u>usage</u> of the token and management of <u>supply</u>. For this reason, token holders must be very selective of the class of software they support. The ‘Software as a Service’ business model is the most conducive, where usage of the software is directly tied to usage of the token. This business model will be a prerequisite for any project sponsored by the community governing the Permissionless Software Foundation.

#### A Pseudo-Stable Peg<a name="pseudoStableToken"></a>
##### Bancor & Liquidity<a name="bancor"></a>
[The Bancor whitepaper](https://github.com/Permissionless-Software-Foundation/token-liquidity/blob/master/docs/bancor-protocol-whitepaper.pdf) was the original inspiration for the token liquidity app and token economics discussed below. They were the first to introduce the thesis that liquidity is what differentiates ‘real money’ from ‘pretend money’, and to facilitate perfect liquidity in cryptocurrencies through the use of an autonomous application. See [this video](https://youtu.be/LcbHTF3zCdI) for additional background.

Using the [Metamask](https://metamask.io/) browser extension, funded with a small amount of Ethereum, you can play with their token liquidity apps by visiting [bancor.network](https://bancor.network). This same user experience is possible on the Bitcoin Cash blockchain using [Badger Wallet](https://badger.bitcoin.com/) and the [token liquidity app](https://github.com/Permissionless-Software-Foundation/token-liquidity) on the [PSF website](https://psfoundation.cash).

While Bancors token liquidity concept was implemented as a smart contract on the Ethereum blockchain, the token liquidity app for the Permissionless Software Foundation is implemented as a web app on the BCH blockchain using [FullStack.cash](https://fullstack.cash) software. While the mathematics governing the Foundation’s app is similar in nature, the original mathematics in the Bancor whitepaper was ultimately rejected in favor of the mathematics presented here. The curve below illustrates the effective 'exchange rate' between tokens and BCHs as a function of the apps balance of each.

![Exchange Rate Curve](./images/hybrid-exchange-rate1.jpg 'The Exchange Rate curve for the token liquidity app as a function of the apps token and BCH balance.')

![./images/app-equations.jpg](./images/app-equations.jpg 'The equations governing the curve with a balance less than 250 BCH.')

![./images/app-equations-linear.jpg](./images/app-equations-linear.jpg 'The equations governing the curve with a balance greater than 250 BCH.')

- I subscript denotes initial value.
- Delta (Δ) denotes change in value.
- Negative token balance: tokens in, BCH out
- Positive token balance: tokens out, BCH in

The liquidity app serves as an automated market maker, continuously adjusting the exchange rate according to the equations above. The curve above was generated by assuming the app starts out with an initial balance of 250 BCH and 50,000 tokens. This sets the <b>inflection point</b> at 200 tokens-per-BCH (50000 / 250 = 200). These simple equations provide the following characteristics:


- **The application can never run out of BCH.** As more BCH is extracted from the app, the exchange rate decreases according to the natural logarithm, so that the entire amount of BCH can never be completely extracted.<br /><br />

- **The peg between the token and BCH remains constant as demand increases.** After the inflection point is reached (at a balance of 250 BCH), the exchange rate is fixed at 200 tokens-per-bch. This allows for a predictable, steady exchange rate. Token holders are incentivized to only hold the token in order to actively participate in governance and **not** for price appreciation (speculation).<br /><br />

- **Pseudo-stable peg.** The equation encourages a pseudo-stable peg of 200 tokens per BCH. Speculative buyers lose incentive and are replaced by stakeholders who are incentivized to encourage long-term growth through user-adoption of software. Below the inflection point, sellers are increasingly disincentivized as the peg changes to encourage buyers.<br /><br />

- **Fair price dynamics.** Because the pricing algorithm is transparent and market making is fully automated, all participants are fairly incentivized.<br /><br />

The reasoning behind these core ideas are expanded below.

##### High Demand: Strong Peg, Good Governance<a name="highDemand"></a>

The figure below shows the logarithmic and linear pricing algorithm that the actual 'hybrid' algorithm is based on. The 'inflection point' in the graph below occurs at a balance of 250 BCH. This is where the exchange rate switches from logarithmic to linear.

The blue line is the logarithmic curve used to the left of the inflection point and the red line is used to the right of the inflection point. The yellow curve is the actual curve used to compute the exchange rate by the token-liquidity app.

![./images/hybrid-comparison.jpg](./images/hybrid-comparison.jpg 'Comparing the exchange rate curve with a linear and logarithmic exchange rate.')

To the right of the inflection point, the exchange rate is strongly pegged at 200 tokens-per-BCH. This reduces volatility and makes it easier to budget costs for grants, making governance by the community easier.

Since the peg is locked, it also eliminates incentive for speculative investment. It means <u>the only incentive to hold the token is for the purpose of governance</u>, to direct newly minted funds into projects that will grow the Foundation and further its mission.

##### Low Demand: Unprofitable Liquidity<a name="lowDemand"></a>
If token issuance is mismanaged or investment of time is misallocated to unprofitable projects, there will be an over-supply of tokens in the market. This will drive the price of the token down. Token holders will always be able to ‘cash out’, but at an increasingly degraded exchange rate.

![./images/price-curve-tail.jpg](./images/price-curve-tail.jpg 'As tokens are extracted from the app, the exchange rate changes, preventing the app from running out of BCH.')

This will cause the exchange rate to increase above 200 tokens-per-bch, incentivizing speculative buyers to purchase the token. It will also incentivize sellers to hold onto the token until the peg is restored.

It takes an exponentially increasing amount of tokens to extract a linear amount of BCH from the liquidity app as the price curve moves to the left of the inflection point. To state that another way: As the BCH balance of the app decreases, adding BCH to the app has increasing effectiveness at stabilizing the peg. These mathematics retard the ability of panics in the marketplace to negatively affect the community, by making it easy for the community to maintain a functional token.


## Mitigating Catastrophic Failure<a name="migitatingFailure"></a>
Many threats exist to the Permissionless Software Foundation and the community that will form around the token. Regulatory clarity and jurisdictional safety is unclear. Enforcement by state actors is unpredictable. Cryptocurrency communities have shown that contention happens frequently. Communities around open source software naturally split and fork the software when compromise can not be reached. This degrades the valuable network effects of any coin or token in the short-term, but ultimately improves diversity and innovation in the long-term. Malicious hackers could potentially obtain the private keys for the PSF token and destroy its value by manipulating the creation of tokens.

These threats are anticipated and mitigated by the use of the SLP protocol for tokens. All token exchanges take place on the Bitcoin Cash blockchain in a public, transparent, uncensorable manner. Because of this, it’s possible to easily fork the token and air-drop a new one to existing token holders, at any point in time.

In the event of a state actor threatening the existence of the Foundation, or simply an irreconcilable disagreement within the organization, any minority group of actors can create a new token and send it to existing token holders, similar to how BCH air-dropped their coin to existing holders of BTC. They can also fork the SaaS projects overseen by the Foundation and modify them to use the new token, as all software will utilize [the MIT license](https://opensource.org/licenses/MIT).

The same activity can mitigate a catastrophic hack of the Foundations private keys. A new token can simply be created and sent to all token holders prior to the hack.

In this way, the Foundation embraces the concept of forks. Every effort will be made to listen and respect the views of community members and reach a compromise. But in the event of contentious disagreements in governance, minority members are encouraged to fork a new token off the existing one, and grow their own community.

## Labor<a name="labor"></a>
Just as financial investors risk capital in a venture, early contributors in the community risk their labor. The primary difference is that community developers are in direct control of the outcome, and can continuously adapt to a changing business environment.

Because of the 200 tokens-per-BCH peg, early contributors have a barometer upon which to gauge market value for their labor. Assuming the liquidity app starts with initial balances of 250 BCH and 50,000 tokens, the pseudo-stable price point is 200 tokens-per-BCH (50,000 / 250 = 200). At a market value of $200 USD-per-BCH, the market value of the token is $1 USD per token. While the market value of BCH in USD or other fiat currency is free to fluctuate, the 200 tokens-per-BCH pseudo-stable peg will remain constant. Contributors have both a value with which to gauge fair-market value for their labor, and direct control over the economic repercussions of their actions.

Community members willing to be compensated in tokens, and then hold those tokens until the peg stabilizes, will make the best economic actors, and will be the most welcome early contributors. If the Foundation has other means of financing (such as BCH), they can use tokens to tip or supplement developers and thereby gain access to a wider pool of labor.

### Salaried Contributors<a name="salaries"></a>
Salaried contributors funded through three-month grants are the primary source of labor to grow the Foundation. Salaried community members are expected to track their work with the accounting software at [ovn.psfoundation.cash](https://ovn.psfoundation.cash). This [Open Value Network](https://wiki.p2pfoundation.net/Open_Value_Network) (OVN) software is similar to that used by [Sensorica NRP](http://nrp.sensorica.co/), who pioneered the concept.

The work logs entered into this system can be downloaded and viewed by anyone, allowing transparent auditing by anyone in the community. These also provide a body of evidence to show what grant funds are being spent on, in order to justify funding for future grants.

### Bounties<a name="bounties"></a>
[GitCoin](https://gitcoin.co/) and [GitCash](https://gitcash.io/) are two permissionless bounty programs that have been used to pay developers in cryptocurrencies and tokens. While interfacing the PSF token to these platforms will be advantageous, it is not critical, as the workflow of both platforms is not difficult to replicate.

Conventional Agile software practices can be used to break larger projects into small tasks. GitHub Issues can be created for each task and tagged with a PSF token bounty. Developers are free to claim and fulfill Issues (permissionlessly) by submitting Pull Requests (PR) that meet the specifications in the Issue. Once a PR is accepted into the code base, the bounty can be released to the developers Bitcoin Cash address. This can be done manually or in an automated fashion.

### Freelance Developers<a name="freelance"></a>
More platforms are available for specialized needs that can not be directly serviced by the community. Cryptocurrency-based freelance platforms like [FreelanceForCoins.com](https://freelanceforcoins.com/) or [LazyFox.io](https://lazyfox.io/), channels on cryptocurrency developer chat rooms like the [Bitcoin Cash Association](https://discord.gg/gNhPRw7), and fiat-based freelance platforms like [Upwork.com](https://www.upwork.com/) can all be used to find the appropriate expertise. Tokens can be used to tip or subsidize bids for labor on these platforms.


## Projects<a name="projects"></a>
Each software project presented here helps to reinforce the others, creating an infrastructure and toolset for people to engage in economic activity while protecting their privacy and anonymity. Each project listed will be built in the order presented here.

### Time Tracking<a name="timeTracking"></a>
The time tracking app at [ovn.psfoundation.cash](https://ovn.psfoundation.cash) is used by contributors to track time spent on Foundation projects. This transparent reporting tool can be used to prove to the community the amount of work each contributor has put forth, for consideration when renewing their grant. This time-tracking app allows the Permissionless Software Foundation to be an [Open Value Network](https://wiki.p2pfoundation.net/Open_Value_Network). The source code for the app has two parts:
- [The front end user interface](https://github.com/Permissionless-Software-Foundation/time-tracking-front-end)
- [The back end REST API](https://github.com/Permissionless-Software-Foundation/time-tracking-api)

### FullStack.cash <a name="fullstack.cash"></a>
[FullStack.cash](https://fullstack.cash) is the flagship product managed by the Permissionless Software Foundation. The REST API and JavaScript library provided by this platform enables all the other projects to interact with the BCH blockchain. The subscription fees paid to access this platform is the primary mechanism for burning tokens and main source of revenue for the Foundation.

FullStack.cash was forked from the open source BITBOX JavaScript SDK and [rest.bitcoin.com](https://rest.bitcoin.com) REST API created by Gabriel Cardona, and developed by Bitcoin.com for two years. The site builds upon that asset by adding new features and providing reliable cloud services to enterprise customers.

### Contract Work <a name="contractWork"></a>
While not a project in and of itself, the Permissionless Software Foundation will actively seek out paid contract work with business partners. Payment will consist of agreements to burn PSF tokens. This work will utilize the FullStack.cash platform, and be managed and executed by PSF salaried community members.

### End-to-End Encrypted Web Chat<a name="chat"></a>
Our [web-based chat app](https://chat.psfoundation.cash) is distributed over IPFS making it very difficult to censor or block. It is end-to-end encrypted, allowing members of the Foundation to communicate securely without any danger of snooping. The code is open source, allowing anyone to audit it. While [our Telegram channel](https://t.me/permissionless_software) allows communication with a more mainstream audience, the web-based chat app is useful for anyone who needs to communicate privately in real-time. And because it is delivered through a web browser, any type of device or operating system can access it.

- [The web-app source code](https://github.com/Permissionless-Software-Foundation/chat-web-app)

### Uncensorable Publishing<a name="publishing"></a>
Several tools have been packaged together to allow users to create websites and web applications that are nearly uncensorable. The technologies used are a combination of IPFS, Bitoin Cash, and Tor. A demo and walk-through of the earliest version is [available here](https://troutsblog.com/about).

In order to publish uncensorable updates to this type of publishing platform, the Bitcoin Cash blockchain is used. These updates will also send a small amount of BCH to our token liquidity app, instructing it to burn a small amount of tokens.

While this platform is not expected to be a great contributor to revenue in the short term, it has the potential to grow virally and has unlimited upside in potential long-term revenue. It represents a foundational piece of technology upon which more advanced and uncensorable applications will be developed.

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

This app will mostly be run by [Mirror nodes in a hybrid peer-to-peer network](https://honest.cash/christroutner/hybrid-p2p-networks-1051). The PSF token will align incentives and reduce spam. This will allow cryptocurrency-based services to conduct business and be ‘found’ easily, while still using the Tor network for robust protection from censorship by state actors.

### Filecoin Bridge<a name="fileHosting"></a>
Members of the Foundation are monitoring the development of the [Filecoin network](https://filecoin.io/). PSF plans to be at the cutting edge of the technology as it develops. The primary goal of this work is to build a 'bridge' that will allow BCH or PSF tokens to be used to pay for file storage on the Filecoin network.

Building this bridge will greatly complement the other PSF projects, by making the applications even harder to censor, easier to use, and thus more valuable.

### Permissionless, Anonymous Email<a name="permissionlessEmail"></a>
Email is the most fundamental piece of identity on the internet. And yet, privacy-respecting email providers are rare to non-existent because of abuse by spammers. Cryptocurrency provides the answer to that problem. Studies have shown the a cost of $0.01 to $0.05 per email is prohibitive to spammers.

An easy-to-setup, open-source email server like [iRedMail](https://iredmail.com/download.html) can be combined with a light weight [koa web server](https://github.com/christroutner/babel-free-koa2-api-boilerplate) for account management and the [SLP JavaScript SDK](https://github.com/Bitcoin-com/slp-sdk) to allow payment in PSF tokens.

For example, a new account could be funded with $3 USD worth of PSF tokens, allowing up to 300 emails to be sent or received. Once depleted of funds, more tokens can be sent to increase the quota.

### Anonymous Bitcoin: Consolidating CoinJoin<a name="coinjoin"></a>
[Consolidating CoinJoin](https://gist.github.com/christroutner/8d54597da652fe2affa5a7230664bc45) is a peer-to-peer mixing service that brings privacy and fungibility to the Bitcoin Cash network. Users will use the PSF token to pay for the mixing service. Servers will use the PSF token to pay Mirrors to advertise their tor .onion address.

### P2P Cloud Infrastructure: P2P VPS<a name="p2pvps"></a>
[P2P VPS](https://p2pvps.org/about) allows people to rent out unused computing power for hosting common internet services like blogs, email, VPN, and other cloud services. Any device capable of running Docker can be rented on the network, in exchange for BCH or the PSF token.

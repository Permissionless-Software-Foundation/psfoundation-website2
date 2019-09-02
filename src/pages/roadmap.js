import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const ListItem = styled.li`
  margin: 40px;
  font-size: 24px;
`
const MainContainer = styled.div`
  margin: 40px;
  
`

class Roadmap extends React.Component {
  render() {
    const siteTitle = 'Roadmap | Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <MainContainer>
        <h1>Roadmap</h1>
        <p>
          The price of the PSF token is directly tied to usage. Developers
          contributing to the road map below will be compensated in the PSF
          token, and the the token will be used to pay for the services below.
        </p>
        </MainContainer>

        <br />
        <ul>
          <ListItem>
            <p>
              <b>
                <u>Email</u>
              </b>{' '}
              - Email is the most fundamental piece of identity on the internet.
              And yet, privacy-respecting email providers are rare to
              non-existent because of abuse by spammers. Cryptocurrency provides
              the answer to that problem. Studies have shown the a cost of $0.01
              to $0.05 per email is prohibitive to spammers.
            </p>
            <p>
              An easy-to-setup, open-source email server like{' '}
              <a href="https://iredmail.com/download.html" target="_blank" rel="noopener noreferrer">
                iRedMail
              </a>{' '}
              can be combined with a light-weight{' '}
              <a
                href="https://github.com/christroutner/koa-api-boilerplate"
                target="_blank" rel="noopener noreferrer"
              >
                koa web server
              </a>{' '}
              for account management and the{' '}
              <a href="https://github.com/Bitcoin-com/slp-sdk" target="_blank" rel="noopener noreferrer">
                SLP JavaScript SDK
              </a>{' '}
              to allow payment in PSF tokens.
            </p>
            <p>
              For example, a new account could be funded with $3 USD worth of
              PSF tokens, allowing up to 300 emails to be sent or received. Once
              depleted of funds, more tokens can be sent to increase the quota.
            </p>
          </ListItem>

          <ListItem>
            <p>
              <b>
                <u>Tor Server Tools</u>
              </b>{' '}
              - Tor, the onion router protocol, is the exit for citizens who
              want to escape the increasingly surveilled <i>clearnet</i> web. It
              breaks the informational link between servers and clients,
              allowing both to remain anonymous and difficult to trace.
              Anonymous servers provide a <i>.onion</i> domain name, allowing a
              tor-enabled web browser to interact with them the same way it’s
              done in the clearnet. These websites are often referred to as the{' '}
              <i>darkweb</i>.
            </p>

            <p>
              As countries around the world continue to degrade into a dystopian
              surveillance state, the darkweb is expected to grow.
            </p>

            <p>
              The Foundation already offers a{' '}
              <a
                href="https://github.com/christroutner/gatsby-login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby front end
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/Permissionless-Software-Foundation/tor-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                tor-ready REST API back end
              </a>{' '}
              boilerplates (project templates) to make it easy for developers to
              deliver web apps over the tor network. But tor has no reliable
              search engine, and no way to easily syndicate information on new
              services.
            </p>

            <p>
              The Foundation is activly{' '}
              <a
                href="https://github.com/BCH-Consolidating-CoinJoin/ccoinjoin-mirror/issues/9"
                target="_blank"
                rel="noopener noreferrer"
              >
                developing syndication servers
              </a>{' '}
              (<i>Mirrors</i>) which currate and syndicate a list of web
              services and sites available over tor. Web admins will be able to
              profit from helping users find new and useful services on the tor
              network. The PSF token will be used to align incentives and
              prevent spam.
            </p>
          </ListItem>

          <ListItem>
            <p>
              <b>
                <u>
                  <a
                    href="https://gist.github.com/christroutner/8d54597da652fe2affa5a7230664bc45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consolidating Coinjoin
                  </a>
                </u>
              </b>{' '}
              - a peer-to-peer mixing service that brings privacy and
              fungibility to the Bitcoin Cash network. Users will use the PSF
              token to pay for the mixing service. Servers will use the PSF
              token to pay Mirrors to advertise their tor .onion address.
            </p>
          </ListItem>

          <ListItem>
            <p>
              <b>
                <u>
                  <a href="https://p2pvps.org/about" target="_blank" rel="noopener noreferrer">
                    P2P VPS
                  </a>
                </u>
              </b>{' '}
              - allows people to rent out unused computing power for hosting
              common internet services like blogs, email, VPN, and other cloud
              services. Any device capable of running Docker can be rented on
              the network, in exchange for the PSF token.
            </p>
          </ListItem>
        </ul>
      </Layout>
    )
  }
}

export default Roadmap

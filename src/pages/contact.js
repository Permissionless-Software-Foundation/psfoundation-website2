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

class Contact extends React.Component {
  render() {
    const siteTitle = 'Contact | Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <MainContainer>
        <h1>Contact</h1>
        <p>
          The Permissionless Software Foundation is more of a loose network of
          libertarian cypherpunks who love to discuss technology, as opposed to
          a conventional organization. Most of the action happens in our chat
          rooms. Jump in and join the conversation!
        </p>
        </MainContainer>

        <br />
        <ul>
          <ListItem>
            <a href="https://chat.psfoundation.cash" target="_blank" rel="noopener noreferrer">
              PSF Chat Server
            </a> -
            The majority of communication takes place on our unencrypted chat
            server. This is a tor-friendly chat server that is hosted and controlled
            by the Foundation. This is the place to ask questions and get to know
            the community.
          </ListItem>

          <ListItem>
            <a href="https://groups.google.com/d/forum/permissionless-software-foundation"
            target="_blank" rel="noopener noreferrer">Mailing List</a> - Email is still one of the best ways
            for organizations to communicate over the internet. Sign up for our
            mailing list to stay up-to-date on the latest news. If Google's sign-up
            security is frustrating you, submit your email address on chat room
            above and we'll add you to the mailing list manually.
          </ListItem>

          <ListItem>
            <a href="https://www.loomio.org/g/r3dO4k5Z/permissionless-software-foundation"
            target="_blank" rel="noopener noreferrer">PSF Loomio Group</a> -
            Non-technical, governance discussion and decision making takes place
            on Loomio, a platform for democratic governance.
          </ListItem>

          <ListItem>
            Encrypted Chat - Members of the Foundation uses {' '}
            <a href="https://pidgin.im/" target="_blank" rel="noopener noreferrer">Pidgin</a> instant
            messanger along with the <a href="https://otr.cypherpunks.ca/"
            target="_blank" rel="noopener noreferrer">OTR</a> plugin for end-to-end encryption. This
            software is automatically installed in
            <a href="https://tails.boum.org/" target="_blank" rel="noopener noreferrer">Tails</a> OS.{' '}
            <a href="https://www.youtube.com/watch?v=HsSssbs-Sso" target="_blank" rel="noopener noreferrer">
            Here is a video explaining the software</a>. You can chat with members
            of the foundation by asking them for their XMPP account name.
          </ListItem>

          <ListItem>
            <a href="https://ovn.psfoundation.cash" target="_blank" rel="noopener noreferrer">Work Logs</a> -
            The PS Foundation is an Open Value Network (OVN). All work authorized
            by the foundation is documented in our OVN software platform, a
            transparent accounting system. Completed work will be compensated in
            PSF tokens.
          </ListItem>
        </ul>

      </Layout>
    )
  }
}

export default Contact

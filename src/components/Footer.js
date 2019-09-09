/* eslint-disable */

import React from 'react'

class Footer extends React.Component {
  // <li><a href="# " className="icon alt fa-envelope"><span className="label">Email</span></a></li>
  // <li><a href="# " className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
  // <li><a href="# " className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>

  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://t.me/permissionless_software"
              target="_blank"
              className="icon alt fa-telegram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Permissionless-Software-Foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            All content{' '}
            <a
              href="https://github.com/Permissionless-Software-Foundation/psfoundation-website2/blob/master/LICENSE"
              target="_blank"
            >
              MIT Licensed
            </a>
          </li>
          <li>
            <a href="https://troutsblog.com/about" target="_blank">Build your own IPFS-ready website</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer

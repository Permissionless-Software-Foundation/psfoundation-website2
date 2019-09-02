/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { globalHistory } from "@reach/router"



const Header = (props) => {
  // The relative url path.
  let path = globalHistory.location.pathname

  // Remove any leading or trailing slashes
  if(path.slice(0,1) === '/')
    path = path.slice(1)
  if(path.slice(-1) === '/')
    path = path.slice(0,path.length-1)
  //console.log(`path: ${path}`)

  return(
      <header id="header" className="alt">
          <Link to="/" className="logo"><strong>PSF</strong></Link><span>{path === '/' ? "HOME" : path }</span>
          <nav>
              <a className="menu-link" onClick={props.onToggleMenu} href="#">Menu</a>
          </nav>
      </header>
  )
}

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header

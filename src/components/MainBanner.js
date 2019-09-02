import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  color: white;
`
const StyledH4 = styled.h4`
  color: white;
`


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 0,
      usdPerBCH: 0,
      bchBalance: 0,
      tokenBalance: 0,
    }
  }

  render() {

    return (
      <section id="banner" className="major">
        <div className="inner">
          <div className="col-12">
            <div>
              <Logo>Permissionless Software Foundation</Logo>
              <StyledH4>Open Source Incentivized With Tokens</StyledH4>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // React Lifecycle - component has mounted.
  async componentDidMount() {
  }
}

export default Header

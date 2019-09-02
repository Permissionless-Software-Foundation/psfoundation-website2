/*
  Add a warning to the top of the screen
*/

import React from 'react'
import styled from 'styled-components'



const MainDiv = styled.section`
  background-color: #ffff00;
  color: black!important;
  padding: 50px;
`
const StyledStrong = styled.span`
color: black!important;
font-weight: bold;
`
class WarningDiv extends React.Component {
  render() {
    return (<MainDiv>
        <p>
          <StyledStrong>Warning:</StyledStrong> The PSF token should not be considered an investment.
          It's an experimental business model for tracking and rewarding effort
          in open source projects. It's value is intended to be transactional
          in nature,
          and any long-term value is highly speculative.
        </p>
      </MainDiv>
    )
  }

}

export default WarningDiv

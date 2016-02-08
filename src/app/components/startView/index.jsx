import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class StartView extends React.Component {
  render() {
    return (
      <div>
        <img id = 'Logotyp' alt = 'Logotyp' src = ''></img>
        <options>
          <SofaOptions />
        </options>
        <options>
          <BearOptions />
        </options>
        <img id = 'StartButton' alt = 'StartButton' src = ''></img>
        <input type = 'button'></input>
        <infoFlash />
      </div>
    )
  }
}

export default StartView

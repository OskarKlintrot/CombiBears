import React /* , { PropTypes }*/ from 'react'
// import { Link } from 'react-router'
import SofaOptions from './sofaOptions'
import BearOptions from './bearOptions'
import InfoFlash from './infoFlash'

class StartView extends React.Component {
  render() {
    return (
      <div>
        <img id = 'Logotyp' alt = 'Logotyp' src = ''></img>
        <div className = 'option'>
          <SofaOptions />
        </div>
        <div className = 'option'>
          <BearOptions />
        </div>
        <img id = 'StartButton' alt = 'StartButton' src = ''></img>
        <input type = 'button'></input>
        <InfoFlash />
      </div>
    )
  }
}

export default StartView

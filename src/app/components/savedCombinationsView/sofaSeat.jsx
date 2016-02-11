import React from 'react'
import Bear from './bear'

class SofaSeat extends React.Component {
  render() {
    let bear
    if ( this.props.sofaSeat.bear !== null ) {
      bear = <Bear bear = { this.props.sofaSeat.bear } />
    } else {
      bear = "Ingen björn"
    }
    return (
      <li>
        id: { this.props.sofaSeat.id } <br />
      färg: { bear }
      </li>
    )
  }
}

export default SofaSeat

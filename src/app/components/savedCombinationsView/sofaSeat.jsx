import React from 'react'
import Bear from './bear'

class SofaSeat extends React.Component {
  render() {
    let bear
    if ( this.props.sofaSeat.bear !== null ) {
      bear = <Bear bear = { this.props.sofaSeat.bear } />
    }
    return (
      <li>
        { bear }
      </li>
    )
  }
}

export default SofaSeat

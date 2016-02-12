import React from 'react'
import Bear from './bear'

class Seat extends React.Component {
  render() {
    let bear
    if ( this.props.seat.bear !== null )
      bear = <Bear bear={ this.props.seat.bear } />
    return (
      <li>
        { bear }
      </li>
    )
  }
}

export default Seat

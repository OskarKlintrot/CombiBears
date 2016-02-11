import React from 'react'
import Bear from './bear'

class SofaSeat extends React.Component {
  render() {
    return (
      <li>
        id: { this.props.sofaSeat.id } <br />
        färg: <Bear bear = { this.props.sofaSeat.bear } />
      </li>
    )
  }
}

export default SofaSeat

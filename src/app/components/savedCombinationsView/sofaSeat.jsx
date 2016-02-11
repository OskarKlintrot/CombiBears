import React from 'react'
// import Bear from './bear'

class SofaSeat extends React.Component {
  render() {
    return (
      <li>
        { this.props.sofaSeat.id } { this.props.sofaSeat.bear }
      </li>
    )
  }
}

export default SofaSeat

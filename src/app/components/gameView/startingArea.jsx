import React from 'react'
import Teddybear from './teddybear'

class StartingArea extends React.Component {
  renderStartAreaTeddies( teddyColor ) {

    if ( typeof teddyColor === "string" )
      return <Teddybear color = { teddyColor } />
  }

  render() {
    return (
      <div
        className = "starting-area"
        style = { {
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100px',
          height: '120px',
          backgroundColor: 'WHITESMOKE'
        } }
      >
        { this.props.children }
      </div>
    )
  }
}

export default StartingArea

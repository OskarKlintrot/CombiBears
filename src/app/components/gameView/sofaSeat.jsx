import React, { Component, PropTypes } from 'react'
import Seat from './seat'
import { ItemTypes } from './constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {

    console.log( "sofaSeat: seatTarget -> drop" )

    moveTeddybear( props.seat )
  }
}

function collect( connect, monitor ) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class SofaSeat extends React.Component {
  render() {


    console.log( "sofaSeat props", this.props )

    const { seat, connectDropTarget, isOver } = this.props

    return connectDropTarget(

      <div style = { { background: "#f00" } } >
        hej hej
        <Seat />
      </div>
    )
  }
}

SofaSeat.propTypes = {
  seat: PropTypes.number.isRequired
}

export default DropTarget( ItemTypes.BEAR , seatTarget, collect )( SofaSeat )

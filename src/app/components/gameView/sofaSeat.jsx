import React, { Component, PropTypes } from 'react'
import Seat from './seat'
import { ItemTypes } from './constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {
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
    const { seat } = this.props
    return (
      <Seat />
    )
  }
}

SofaSeat.propTypes = {
  seat: PropTypes.number.isRequired
}

export default DropTarget( ItemTypes.BEAR , seatTarget, collect )( SofaSeat )

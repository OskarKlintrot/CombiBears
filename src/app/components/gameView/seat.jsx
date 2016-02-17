import React, { PropTypes } from 'react'
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

class Seat extends React.Component {

  render() {

    console.log( "sofaSeat props", this.props )

    const { seat, connectDropTarget, isOver } = this.props

    return connectDropTarget(

      <div style = { {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '130px',
        height: '120px',
        backgroundColor: 'WHITESMOKE',
        zIndex: 1,
        opacity: 0.8
      } }
      >
      </div>

    )
  }
}

Seat.propTypes = {
  seat: PropTypes.number.isRequired
}

export default DropTarget( ItemTypes.BEAR, seatTarget, collect )( Seat )

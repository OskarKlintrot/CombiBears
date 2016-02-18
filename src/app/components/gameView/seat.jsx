import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {

    console.log( "sofaSeat: seatTarget -> drop", props, monitor )

    // moveTeddybear( props.seat )

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

    const styles = {
      seat: {
        display: 'inline-block',
        width: '130px',
        height: '120px',
        zIndex: 1,
        opacity: 0.8,
        border: '1px solid #f00',
        textAlign: 'center'
      }
    }

    return connectDropTarget(

      <div style = { styles.seat } >

      { this.props.children }

      </div>

    )
  }
}

Seat.propTypes = {
  seat: PropTypes.number.isRequired
}

export default DropTarget( ItemTypes.BEAR, seatTarget, collect )( Seat )

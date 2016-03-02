import React, { PropTypes } from 'react'
import C from '../../constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {

    if ( props.canDrop ) {

      return {
        containerTypeName: props.containerTypeName,
        index: props.index
      }
    }
  }
}

const collect = ( connect, monitor ) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const Seat = ( props ) => {
  const { connectDropTarget, isOver } = props

  const styles = {
    seat: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      zIndex: 1,
      opacity: 1,
      border: '1px solid #f00',
      textAlign: 'center',
      verticalAlign: 'top'
    }
  }

  return connectDropTarget(
    <div style={ styles.seat } >
    { props.children }
    </div>
  )
}

Seat.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default DropTarget( C.COMPONENT_NAMES.BEAR, seatTarget, collect )( Seat )

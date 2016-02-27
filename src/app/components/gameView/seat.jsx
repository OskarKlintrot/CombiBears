import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import C from '../../constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {
    // const dropResult = monitor.getDropResult()

    if ( props.canDrop )
      props.onDrop( props.containerTypeName, props.index )


    // props.onDrop( monitor.getItem() )
    // console.log( 'Drop success' )
    // console.log( 'sofaSeat: seatTarget -> drop', monitor )
    // console.log( 'dropResult', dropResult )
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
  onDrop: PropTypes.func.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default DropTarget( ItemTypes.BEAR, seatTarget, collect )( Seat )

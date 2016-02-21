import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import { DropTarget } from 'react-dnd'

const seatTarget = {
  drop( props, monitor ) {

    // const dropResult = monitor.getDropResult()
    props.onHandleAddBear( "orange", props.index )
    if ( props.canDrop )

      props.onDrop( props.containerTypeName, props.index )


    // props.onDrop( monitor.getItem() )
    // console.log( 'Drop success' )
    // console.log( 'sofaSeat: seatTarget -> drop', monitor )
    // console.log( 'dropResult', dropResult )
  }
}

function collect( connect, monitor ) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Seat extends React.Component {

  render() {

    const { connectDropTarget, isOver } = this.props

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

      { this.props.children }

      </div>

    )
  }
}

Seat.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onHandleAddBear: PropTypes.func.isRequired,
  handleRemoveBear: PropTypes.func.isRequired
}

export default DropTarget( ItemTypes.BEAR, seatTarget, collect )( Seat )

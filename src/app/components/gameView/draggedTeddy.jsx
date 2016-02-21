import React, { Component, PropTypes } from 'react'
import { ItemTypes } from './constants'
import { DragLayer } from 'react-dnd'


function collect( monitor ) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}


function getItemStyles( props ) {
  const { currentOffset } = props
  if ( !currentOffset ) {

    return {
      display: 'none'
    }
  }

  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`

  return {
    transform: transform,
    WebkitTransform: transform
  }
}

class draggedTeddy extends React.Component {
  render() {

    const { item, itemType, isDragging } = this.props

    // Only render if its dragging
    if ( !isDragging ) return null


    const layerStyles = {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 100,
      width: 100,
      height: 120,
      left: 0,
      top: 0
    }

    return (
      <div style={ layerStyles }>
        <div style={ getItemStyles( this.props ) }>
          <img
            src={ 'public/pics/bears/' + this.props.color + '.png' }
            width='100'
            height='120'
          />
        </div>
      </div>
    )
  }
}

draggedTeddy.propTypes = {

  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired,

  color: PropTypes.string.isRequired
}

export default DragLayer( collect )( draggedTeddy )

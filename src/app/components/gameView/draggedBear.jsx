import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicBear from '../shared/basicBear'
import { DragLayer } from 'react-dnd'

const styles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  width: 120,
  height: 140,
  left: 0,
  top: 0
}

const collect = ( monitor ) => {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}

const getItemStyles = ( props ) => {
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

// Not using stateless function since DragLayer need to use refs
class DraggedBear extends React.Component {
  render() {
    const { isDragging, bearKey, bearsSettings } = this.props

    // Only render if its dragging
    if ( !isDragging ) return <div></div>

    return (
      <div style={ styles }>
        <div style={ getItemStyles( this.props ) }>
          <BasicBear
            bear={ bearsSettings[bearKey] } // Get bear object from '(redux state).settings.bears' with key
            width='100'
            height='120'
          />
        </div>
      </div>
    )
  }
}

DraggedBear.propTypes = {
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired,
  bearKey: PropTypes.number.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default DragLayer( collect )( DraggedBear )

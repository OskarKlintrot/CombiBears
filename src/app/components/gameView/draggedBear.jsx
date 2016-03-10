import React, { PropTypes } from 'react'
import BasicBear from '../shared/basicBear'
import { DragLayer } from 'react-dnd'
import Radium from 'radium'

const styles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '121px',
  '@media (min-width: 900px)': {
    width: '142px'
  },
  '@media (min-width: 620px) and (max-width: 767px)': {
    width: '95px'
  },
  '@media (min-width: 480px) and (max-width: 619px)': {
    width: '71px'
  },
  '@media (max-width: 479px)': {
    width: '21%'
  }

}

const collect = ( monitor ) => {

  // Get source item, where the dragged item came from.
  const sourceItem = monitor.getItem()

  // Get bearKey from source item if possible
  const bearKey = sourceItem ? sourceItem.props.bearKey : null

  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
    bearKey: bearKey
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

@Radium
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
  bearsSettings: PropTypes.object.isRequired
}

export default DragLayer( collect )( DraggedBear )

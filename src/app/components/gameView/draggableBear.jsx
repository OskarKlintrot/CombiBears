import React, { PropTypes } from 'react'
import C from '../../constants'
import { DragSource } from 'react-dnd'
import BasicBear from '../shared/basicBear'

const draggableBearSource = {
  beginDrag( props ) {
    return {
      props
    }
  },

  endDrag( props, monitor ) {

    // Get drop target result from seat or gamescene components.
    const dropTargetResult = monitor.getDropResult()

    if ( dropTargetResult ) {

      props.onDrop(
        {
          bearKey: props.bearKey,
          from: {
            containerTypeName: props.containerTypeName,
            index: props.index
          },
          to: {
            containerTypeName: dropTargetResult.containerTypeName,
            index: dropTargetResult.index,
            canDrop: dropTargetResult.canDrop
          }
        }
      )
    }
  }
}

const collect = ( connect, monitor ) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const transparency = 0.5

const DraggableBear = ( props ) => {
  const { connectDragSource, isDragging, bearKey, bearsSettings } = props

  const styles = {
    bear: {
      width: '95%',
      margin: 'auto',
      opacity: isDragging ? transparency : 1
    }
  }

  return connectDragSource(
    <div>
      <BasicBear
        bear={ bearsSettings[bearKey] } // Get bear object from '(redux state).settings.bears' with key
        width='100'
        height='120'
        style={ styles.bear }
      />
    </div>
  )
}

DraggableBear.propTypes = {
  onDrop: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  bearKey: PropTypes.string.isRequired,
  bearsSettings: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default DragSource( C.COMPONENT_NAMES.BEAR, draggableBearSource, collect )( DraggableBear )

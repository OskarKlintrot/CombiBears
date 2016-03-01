import React, { PropTypes } from 'react'
import C from '../../constants'
import { DragSource } from 'react-dnd'
import BasicBear from '../shared/basicBear'

const draggableBearSource = {
  beginDrag( props ) {
    props.onBeginDrag( props.containerTypeName, props.index, props.bearKey )
    return {
      props
    }
  },

  endDrag( props, monitor ) {

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

  console.log( 'DraggableBear props', props )

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
  connectDragSource: PropTypes.func.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  bearKey: PropTypes.number.isRequired,
  bearsSettings: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default DragSource( C.COMPONENT_NAMES.BEAR, draggableBearSource, collect )( DraggableBear )

import React, { PropTypes } from 'react'
import C from '../../constants'
import { DragSource } from 'react-dnd'
import BasicBear from '../shared/basicBear'

const teddybearSource = {
  beginDrag( props ) {
    props.onBeginDrag( props.containerTypeName, props.index, props.color )
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

const Teddybear = ( props ) => {
  const { connectDragSource, isDragging, color } = props

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
        bear={ { src: C.SRC_TO_IMAGES.BEARS_SVG[color] } }
        width='100'
        height='120'
        style={ styles.bear }
      />
    </div>
  )
}

Teddybear.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  containerTypeName: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default DragSource( C.COMPONENT_NAMES.BEAR, teddybearSource, collect )( Teddybear )

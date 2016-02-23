import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import C from '../../constants'
import { DragSource } from 'react-dnd'
import BasicBear from '../shared/basicBear'

const teddybearSource = {
  beginDrag( props ) {
    props.onBeginDrag( props.color )
    return {
      props
    }
  },

  endDrag( props, monitor ) {
    /*
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    */
  }
}

const collect = ( connect, monitor ) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const transparency = 0.8

const Teddybear = ( props ) => {
  const { connectDragSource, isDragging, color } = props

  const styles = {
    bear: {
      width: '80%',
      margin: 'auto',
      opacity: isDragging ? transparency : 1
    }
  }

  return connectDragSource(
    <div>
      <BasicBear
        bear={ { src: C.SRC_TO_IMAGES.BEARS[color] } }
        width='100'
        height='120'
        style={ styles.bear }
      />
    </div>
  )
}

Teddybear.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default DragSource( ItemTypes.BEAR, teddybearSource, collect )( Teddybear )

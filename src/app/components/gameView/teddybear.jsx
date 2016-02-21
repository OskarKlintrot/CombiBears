import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import { DragSource } from 'react-dnd'

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

export default class Teddybear extends React.Component {
  render() {

    const { connectDragSource, isDragging } = this.props

    const styles = {
      bear: {
        width: '80%',
        opacity: isDragging ? transparency : 1
      }
    }

    return connectDragSource(
      <img
        src={ 'public/pics/bears/' + this.props.color + '.png' }
        width='100'
        height='120'
        style={ styles.bear }
      />
    )
  }
}

Teddybear.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default DragSource( ItemTypes.BEAR, teddybearSource, collect )( Teddybear )

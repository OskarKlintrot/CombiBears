import React, { PropTypes } from 'react'
import { ItemTypes } from './constants'
import { DragSource } from 'react-dnd'

const teddybearSource = {
  beginDrag( props ) {
    return {}
  }
}

function collect( connect, monitor ) {

  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default class Teddybear extends React.Component {
  render() {

    const { connectDragSource, isDragging } = this.props

    return connectDragSource(
      <div style={ {
        opacity: isDragging ? 0.5 : 1
      } }
      >
        <img
          src={ 'public/pics/bears/' + this.props.color + '.png' }
          width='100'
          height='120'
        />
      </div>
    )
  }
}

Teddybear.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
}

export default DragSource( ItemTypes.BEAR, teddybearSource, collect )( Teddybear )

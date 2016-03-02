import React, { PropTypes } from 'react'
import C from '../../constants'
import { DropTarget } from 'react-dnd'

const dropTarget = {
  drop( props, monitor, component ) {

    return {
      containerTypeName: C.COMPONENT_NAMES.GAME_SCENE,
      index: null
    }
  }
}

const collect = ( connect, monitor ) => {

  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const GameScene = ( props ) => {
  const { connectDropTarget, isOver } = props

  const styles = {
    gameScene: {
      height: window.innerHeight + 'px',
      width: '80%',
      float: 'left',
    }
  }

  return connectDropTarget(
    <div style={ styles.gameScene } >
      { props.children }
    </div>
  )
}

GameScene.propTypes = {

}

export default DropTarget( C.COMPONENT_NAMES.BEAR, dropTarget, collect )( GameScene )

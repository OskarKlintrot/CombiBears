import React, { PropTypes } from 'react'
import C from '../../constants'
import { DropTarget } from 'react-dnd'

const dropTarget = {
  drop( ) { // Available arguments: props, monitor, component

    return {
      containerTypeName: C.COMPONENT_NAMES.GAME_SCENE,
      index: null,
      canDrop: true
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

  const { connectDropTarget } = props // Available in props: isOver

  const styles = {
    gameScene: {
      height: props.height + 'px',
      width: '80%',
      float: 'left'
    }
  }

  return connectDropTarget(
    <div style={ styles.gameScene } >
      { props.children }
    </div>
  )
}

GameScene.propTypes = {
  height: PropTypes.number.isRequired
}

export default DropTarget( C.COMPONENT_NAMES.BEAR, dropTarget, collect )( GameScene )

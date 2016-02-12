import React from 'react'
import Teddybear from './teddybear'
import Sofa from './sofa'
import StartingArea from './startingArea'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'

class GameView extends React.Component {
  render() {
    return (
      <div className = 'game-scene'>
        <Sofa/>

        <StartingArea>
          <Teddybear/>
        </StartingArea>
      </div>
    )
  }
}

export default DragDropContext( TouchBackend({ enableMouseEvents: true }) )( GameView )

import React from 'react'
import Sofa from './sofa'
import StartingArea from './startingArea'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'


// This data should come from Redux

// TODO: We need to set a standard format for this data.
// Below the length of the array represents the number of seats.
// The string represents the color of the teddy
const teddySeatArray = [
  "orange",
  null,
  "blue",
  "green"
]

const teddyStartingAreaArray = [
  "pink"
]

// const numberOfTeddies = 4 // This cannot be retrieved from the teddySeatArray. Because it can be empty.

class GameView extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {

    }
  }

  render() {
    return (
      <div className = 'game-scene'>

        <Sofa bears = { teddySeatArray }/>

        <StartingArea bears = { teddyStartingAreaArray }/>
      </div>
    )
  }
}

export default DragDropContext( TouchBackend({ enableMouseEvents: true }) )( GameView )

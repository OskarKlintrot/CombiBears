import React from 'react'
import Teddybear from './teddybear'
import Sofa from './sofa'
import Seat from './seat'
import StartingArea from './startingArea'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'


// This data should come from Redux

// TODO: We need to set a standard format for this data.
// Below the length of the array represents the number of seats.
// The string represents the color of the teddy
const teddySeatArray = [
  false,
  false,
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

  renderSofaSeats( teddyColor, seatNumber ) {

    return (
      <Seat>
        { typeof teddyColor === "string" ? (
          <Teddybear color = { teddyColor } id = { seatNumber } />
          ) : ''
        }
      </Seat>
    )
  }

  renderStartAreaTeddies( teddyColor, seatNumber ) {

    if ( typeof teddyColor === "string" )
      return <Teddybear color = { teddyColor } id = { seatNumber } />
  }

  render() {
    return (
      <div className = 'game-scene'>

        <Sofa>
          {
            teddySeatArray.map( this.renderSofaSeats )
          }

        </Sofa>

        <StartingArea>

          {
            teddyStartingAreaArray.map( this.renderStartAreaTeddies )
          }

        </StartingArea>
      </div>
    )
  }
}

export default DragDropContext( TouchBackend({ enableMouseEvents: true }) )( GameView )

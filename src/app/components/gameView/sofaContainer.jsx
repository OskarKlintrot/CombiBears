import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

const Container = ReactPIXI.DisplayObjectContainer

import SeatSprite from './seatSprite.jsx'


const seatWidth = 200

class SofaContainer extends React.Component {

  /*
   * @param props
   *
   *  x:      x position of sprite
   *  y:      y position of sprite
   *  seats:  number of seats
   *
   */

  constructor( props ) {
    super( props )
  }

  getSeatType( seatNum ) {

    let seatType

    if ( seatNum === 0 ) {
      seatType = 'start'
    } else if ( seatNum + 1 === this.props.seats ) {
      seatType = 'end'
    } else {
      seatType = 'between'
    }

    console.log( seatType, "seattype" )

    return seatType
  }

  getNumberOfSeatsArray() {

    const returnArray = []

    for ( let num = 0; num < this.props.seats; num += 1 ) {
      returnArray.push( num )
    }

    console.log( returnArray, "here it should be" + this.props.seats + " <- " )

    return returnArray
  }

  render() {
    return (
      <Container
        x = { this.props.x }
        y = { this.props.y }
        anchor = { new PIXI.Point( 0.5, 1 ) }
      >
        {
          this.getNumberOfSeatsArray().map( ( elem, seatNum ) =>
            <SeatSprite
              type = { this.getSeatType( seatNum ) }
              key = { seatNum + 1 }
              x = { seatWidth * seatNum }
            />
          )
        }

      </Container>
    )
  }
}

export default SofaContainer

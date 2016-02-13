import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

const Sprite = ReactPIXI.Sprite

class SeatSprite extends React.Component {

  /*
   * @param props
   *
   *  x:      x position of sprite
   *  y:      y position of sprite
   *  type:  seattype (start, between, end)
   *
   */

  constructor( props ) {
    super( props )

    this.state = {
      imgPath: 'public/pics/seats/',
      isBeingDragged: false,
      data: null,
      xPos: this.props.x,
      yPos: this.props.y
    }
  }

  getSeatImg( type ) {
    return this.state.imgPath + type + '.png'
  }

  render() {

    const seatAnchor = {
      xPos: 0.5,
      yPos: 0.5
    }

    const seatScale = {
      xScale: 0.2,
      yScale: 0.2
    }

    return (
      <Sprite image={ this.getSeatImg( this.props.type ) }
        scale={ new PIXI.Point( seatScale.xScale, seatScale.yScale ) }
        anchor={ new PIXI.Point( seatAnchor.xPos, seatAnchor.yPos ) }
        key={ this.props.key }
        x={ this.state.xPos }
        y={ this.state.yPos }
        interactive='true'
      />
    )
  }
}

export default SeatSprite

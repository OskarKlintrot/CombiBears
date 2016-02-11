import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

const Sprite = ReactPIXI.Sprite

class BearSprite extends React.Component {

  /*
   * @param props
   *
   *  x:      x position of sprite
   *  y:      y position of sprite
   *  color:  color of bear (white, blue, green, orange, pink)
   *
   */

  constructor( props ) {
    super( props )

    this.state = {
      imgPath: 'public/pics/bears/',
      isBeingDragged: false,
      data: null,
      xPos: this.props.x,
      yPos: this.props.y
    }
  }

  onDragStart( event ) {

    this.setState(
      {
        alpha: 0.5,
        isBeingDragged: true,
        data: event.data
      }
    )

    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    // this.state.data = event.data
  }

  onDragEnd() {

    this.setState(
      {
        alpha: 1,
        isBeingDragged: false,
        data: null
      }
    )
  }

  onDragMove( event ) {

    const draggedElement = event.target
    const containerElement = draggedElement.parent

    if ( this.state.isBeingDragged ) {

      const newPosition = this.state.data.getLocalPosition( containerElement )

      // Set position on state
      this.setState(
        {
          xPos: newPosition.x,
          yPos: newPosition.y
        }
      )

      // Set position on pixie obj
      draggedElement.position.x = newPosition.x
      draggedElement.position.y = newPosition.y
    }
  }

  getBearImg( color ) {
    return this.state.imgPath + color + '.png'
  }

  render() {
    return (
      <Sprite image = { this.getBearImg( this.props.color ) }
        scale = { new PIXI.Point( 0.2, 0.2 ) }
        anchor = { new PIXI.Point( 0.5, 0.5 ) }
        key = '1'
        x = { this.state.xPos }
        y = { this.state.yPos }
        interactive = 'true'

        // Events for drag start
        mousedown = { ( event ) => this.onDragStart( event ) }
        touchstart = { ( event ) => this.onDragStart( event ) }

        // Events for drag end
        mouseup = { ( event ) => this.onDragEnd( event ) }
        mouseupoutside = { ( event ) => this.onDragEnd( event ) }
        touchend = { ( event ) => this.onDragEnd( event ) }
        touchendoutside = { ( event ) => this.onDragEnd( event ) }

        // Events for drag move
        mousemove = { ( event ) => this.onDragMove( event ) }
        touchmove = { ( event ) => this.onDragMove( event ) }
      />
    )
  }
}

export default BearSprite

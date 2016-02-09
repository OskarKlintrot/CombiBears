import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

/*
class GameView extends React.Component {
  render() {
    return (
      <div>
        <img id = 'Logotyp' alt = 'Logotyp' src = '' />
        <options>
          <SofaOptions />
        </options>
        <options>
          <BearOptions />
        </options>
        <img id = 'StartButton' alt = 'StartButton' src = '' />
        <input type = 'button' />
        <infoFlash />
      </div>
    )
  }
}
*/

const Stage = ReactPIXI.Stage
const Sprite = ReactPIXI.Sprite
const Text = ReactPIXI.Text

class GameView extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {
      isBeingDragged: false,
      data: null
    }
  }

  assetPath( filename ) {
    return 'public/pics/' + filename
  }

  onDragStart( event ) {

    this.setState(
      {
        alpha: 0.5,
        isBeingDragged: true,
        data: event.data
      }
    )

    // this.setState( { alpha: 0.5 } )
    // this.setState( { isBeingDragged: true } )

    // this.setState( { data: event.data } )

    // this.state.alpha = 0.5
    // this.state.isBeingDragged = true

    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    // this.state.data = event.data
  }

  onDragEnd() {

    console.log( "State before", this.state )

    this.setState(
      {
        alpha: 1,
        isBeingDragged: false
      }
    )

    console.log( "State after", this.state )


    // this.state.alpha = 1
    // this.state.isBeingDragged = false

    // set the interaction data to null
    // this.state.data = null
  }

  onDragMove( event ) {

    // TODO: Fix dragging. this.parent does not refer to a Pixi Container object. The getLocalPosition only seems to work on that object.
    const draggedElement = event.target
    const containerElement = draggedElement.parent

    if ( this.state.isBeingDragged ) {

      // console.log( this, e.target )

      const newPosition = this.state.data.getLocalPosition( containerElement )

      draggedElement.position.x = newPosition.x
      draggedElement.position.y = newPosition.y

      console.log( newPosition )
    }
  }

  render() {
    const fontstyle = { font: '20px Arial' }
    return (
      <Stage width = { this.props.width } height = { this.props.height }>
        <Sprite image = { this.assetPath( 'bears/white.png' ) }
                scale = { new PIXI.Point( 0.2, 0.2 ) }
                anchor = { new PIXI.Point( 0.5, 0 ) } key = '1'
                x = '100'
                y = '100'
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

        <Text text = 'Some nice vector text'
              x = { this.props.xposition }
              y = { 10 }
              style = { fontstyle }
              anchor = { new PIXI.Point( 0.5, 0 ) }
              key = '2'
        />
      </Stage>
    )
  }
}


export default GameView

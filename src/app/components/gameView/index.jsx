import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

import BearSprite from './bearSprite'
import BackgroundSprite from './backgroundSprite'
import SofaContainer from './sofaContainer'

const Stage = ReactPIXI.Stage
const Text = ReactPIXI.Text

class GameView extends React.Component {

  /*
   * @param props
   *
   *  width:        width of GameView
   *  height:       height of GameView
   *  background:   name of background (livingroom)
   *
   */

  constructor( props ) {
    super( props )

    this.state = {
      width: this.props.width || 800,
      height: this.props.height || 600
    }
  }

  getSofaPosition() {
    return {
      x: this.state.width / 2, // Places sofa at center x position
      y: this.state.height - ( this.state.height / 4 ) // Places sofa at the bottom minus one fourth of total height
    }
  }

  render() {
    const fontstyle = { font: '20px Arial' }
    return (
      <Stage
        width = { this.props.width }
        height = { this.props.height }
      >

        <BackgroundSprite
          background = 'livingroom'
          width = { this.state.width }
          height = { this.state.height }
        />

        <SofaContainer
          seats = { 3 }
          x = { this.getSofaPosition().x }
          y = { this.getSofaPosition().y }
        />

        <BearSprite
          x = '100'
          y = '100'
          color = 'pink'
        />

        <Text text = 'GameView'
          x = { 100 }
          y = { 10 }
          style = { fontstyle }
          anchor = { new PIXI.Point( 0.5, 0 ) }
          key = 'titleText'
        />

      </Stage>
    )
  }
}

export default GameView

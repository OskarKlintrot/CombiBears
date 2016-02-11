import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

import BearSprite from './bearSprite'
import BackgroundSprite from './backgroundSprite'

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
          key = '2'
        />

      </Stage>
    )
  }
}

export default GameView

import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

import BearSprite from './bearSprite.jsx'

const Stage = ReactPIXI.Stage
const Text = ReactPIXI.Text

class GameView extends React.Component {

  render() {
    const fontstyle = { font: '20px Arial' }
    return (
      <Stage width = { this.props.width } height = { this.props.height }>

        <BearSprite x = '100' y = '100' color = 'pink' />

        <Text text = 'GameView'
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

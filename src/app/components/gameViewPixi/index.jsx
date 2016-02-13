import React from 'react'
import ReactPIXI from './../../scripts/ReactPixi'

import BearSprite from './bearSprite'
// import BackgroundSprite from './backgroundSprite'
import SofaContainer from './sofaContainer'

const Stage = ReactPIXI.Stage

const NUMBER_OF_SEATS = 3

class GameViewPixi extends React.Component {

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
      width: this.props.width || window.innerWidth,
      height: this.props.height || window.innerHeight
    }
  }

  getSofaPosition() {

    const sofaPlacementDivider = 4

    return {
      x: this.state.width / 2 - ( ( NUMBER_OF_SEATS * 200 ) / 2 ), // Places sofa at center x position
      y: this.state.height - ( this.state.height / sofaPlacementDivider ) // Places sofa at the bottom minus one fourth of total height
    }
  }

  render() {

    return (
      <Stage
        width={ this.state.width }
        height={ this.state.height }
      >

        <SofaContainer
          seats={ NUMBER_OF_SEATS }
          x={ this.getSofaPosition().x }
          y={ this.getSofaPosition().y }
        />

        <BearSprite
          x='100'
          y='100'
          color='pink'
        />

      </Stage>
    )
  }
}

export default GameViewPixi

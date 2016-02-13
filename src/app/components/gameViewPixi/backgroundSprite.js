import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

const Sprite = ReactPIXI.Sprite

// Background original image width and height, used to calculate a sprite size that fits container.
const backgroundImageOriginalSize = {
  width: 1920,
  height: 1200
}

class BackgroundSprite extends React.Component {

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
      imgPath: 'public/pics/backgrounds/',
      background: this.props.background || 'livingroom',
      width: this.props.width,
      height: this.props.height,
      xPos: ( this.props.width ? this.props.width / 2 : null ),
      yPos: ( this.props.height ? this.props.height : null )
    }
  }

  getBgImg( name ) {
    return this.state.imgPath + name + '.jpg'
  }

  calculateBgImageScale() {

    let widthScaleFactor, heightScaleFactor, returnScaleFactor

    // Calculate scale factors
    widthScaleFactor = this.state.width / backgroundImageOriginalSize.width
    heightScaleFactor = this.state.height / backgroundImageOriginalSize.height

    // Return the smallest scale factor.
    returnScaleFactor = widthScaleFactor > heightScaleFactor ? widthScaleFactor : heightScaleFactor

    return new PIXI.Point( returnScaleFactor, returnScaleFactor )
  }

  render() {

    const bgAnchor = {
      xPos: 0.5,
      yPos: 0.5
    }

    return (
      <Sprite image={ this.getBgImg( this.state.background ) }
        anchor={ new PIXI.Point( bgAnchor.xPos, bgAnchor.yPos ) }
        key='background'
        x={ this.state.xPos }
        y={ this.state.yPos }
        width={ this.state.width }
        height={ this.state.height }
        scale={ this.calculateBgImageScale() }
      />
    )
  }
}

export default BackgroundSprite

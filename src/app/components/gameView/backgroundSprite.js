import React from 'react'
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

const Sprite = ReactPIXI.Sprite

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
      width: this.props.width || 800,
      height: this.props.height || 600,
      xPos: ( this.props.width ? this.props.width / 2 : null ) || 400,
      yPos: ( this.props.height ? this.props.height / 2 : null ) || 300
    }
  }

  getBgImg( name ) {
    return this.state.imgPath + name + '.jpg'
  }

  render() {
    return (
      <Sprite image = { this.getBgImg( this.state.background ) }
        anchor = { new PIXI.Point( 0.5, 0.5 ) }
        key = '1'
        x = { this.state.xPos }
        y = { this.state.yPos }
        width = { this.state.width }
        height = { this.state.height }
        scale = { new PIXI.Point( 0.5, 0.5 ) }
      />
    )
  }
}

export default BackgroundSprite

import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '18em',
    height: '16.5em',
    backgroundSize: '100%',
    zIndex: 999,
    position: 'absolute',
    right: '20%',
    cursor: 'auto',
    display: 'block'
  },
  color: {
    width: '3.5em',
    height: '3.5em',
    margin: '1.25em 0.25em',
    display: 'inline-block',
    cursor: 'pointer'
  }
}

const colors = []

class ColorPicker extends React.Component {
  constructor( props ) {
    super( props )
    this.handleClickOutside = this.handleClickOutside.bind( this )
    colors.length = 0 // Deleting all elements
    for ( const color in C.COLORS ) {
      if ( C.COLORS.hasOwnProperty( color ) )
        colors.push( C.COLORS[color] )
    }
  }

  handleClickOutside = () => {
    this.props.handleClickOutside()
  };

  getObjectKeyLength = ( obj ) => {
    let length = 0
    for ( const key in obj ) {
      if ( obj.hasOwnProperty( key ) )
        length += 1
    }
    return length
  };

  render() {
    const boxStyle = Object.assign(
      {},
      styles.box,
      {
        backgroundImage: this.props.topBear ?
          'url(public/pics/icons/colorpicker-bkgr-outlined-talk-bubble-upside-down.svg)' :
          'url(public/pics/icons/colorpicker-bkgr-outlined-talk-bubble.svg)',
        top: this.props.topBear ?
          '70%' :
          '-170%',
        paddingTop: this.props.topBear ?
          '3em' :
          '1.5em'
      }
    )

    const bearOverlayStyle = {
      position: 'absolute',
      top: this.props.topBear ?
        '-25%' :
        '',
      bottom: this.props.topBear ?
        '' :
        '-35%',
      right: '5%',
      width: '40%',
      height: '40%'
    }

    const noColor = Object.assign(
      {},
      styles.color,
      {
        opacity: 0.3,
        WebkitFilter: 'grayscale(1) brightness(1.3)',
        cursor: 'default'
      }
    )
    return (
      <div
        className='colorPicker'
        style={ boxStyle }
      >
        <div style={ bearOverlayStyle } className='bearOverlay'></div>
        { colors.map( ( color, key ) => {
          if ( color !== C.BEAR_TO_IGNORE ) {
            let showColor = true
            for ( let bear = 0; bear < this.getObjectKeyLength( this.props.bears ); bear += 1 ) {
              if ( this.props.bears[bear].color === color ) {
                showColor = false
                break
              }
            }
            return (
              <img
                className={ 'color' + color }
                src={ C.SRC_TO_IMAGES.ACCESSORIES[color] }
                key={ key }
                onClick={ showColor ? () => this.props.handleBearColorChange( color ) : null }
                style={ showColor ? styles.color : noColor }
                draggable='false'
              />
            )
          }
        }) }
      </div>
    )
  }
}

ColorPicker.props = {
  handleClickOutside: PropTypes.func.isRequired,
  handleBearColorChange: PropTypes.func.isRequired,
  topBear: PropTypes.bool.isRequired,
  bears: PropTypes.object.isRequired
}

export default listensToClickOutside( ColorPicker )

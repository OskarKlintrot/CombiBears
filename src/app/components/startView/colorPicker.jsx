import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '18em',
    height: '16.5em',
    backgroundSize: '100%',
    zIndex: 2,
    position: 'absolute',
    left: '-120%',
    cursor: 'auto'
  },
  color: {
    width: '3.5em',
    height: '3.5em',
    margin: '0.25em',
    display: 'inline-block',
    cursor: 'pointer'
  },
  deleteBearBox: {
    width: '100%'
  },
  deleteBearImg: {
    cursor: 'pointer',
    height: '3.5em',
    width: '3.5em',
    marginTop: '0.5em'
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
          '-190%',
        paddingTop: this.props.topBear ?
          '3em' :
          '1.5em'
      }
    )
    return (
      <div
        className='colorPicker'
        style={ boxStyle }
      >
        { colors.map( ( color, key ) => {
          return (
            <img
              className={ 'color' + color }
              src={ C.SRC_TO_IMAGES.ACCESSORIES[color] }
              key={ key }
              onClick={ () => this.props.handleBearColorChange( color ) }
              style={ styles.color }
            />
          )
        }) }
        <div
          className='deleteBearBox'
          style={ styles.deleteBearBox }
        >
          <img
            className='deleteBear'
            src={ C.SRC_TO_IMAGES.ICONS.WRONG }
            onClick={ this.props.handleDeleteBear }
            style={ styles.deleteBearImg }
          />
        </div>
      </div>
    )
  }
}

ColorPicker.props = {
  handleClickOutside: PropTypes.func.isRequired,
  handleBearColorChange: PropTypes.func.isRequired,
  handleDeleteBear: PropTypes.func.isRequired,
  topBear: PropTypes.bool.isRequired
}

export default listensToClickOutside( ColorPicker )

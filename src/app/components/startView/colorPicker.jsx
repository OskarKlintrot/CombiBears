import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '18em',
    height: '14.8em',
    backgroundImage: 'url(public/pics/icons/colorpicker-bkgr-outlined.svg)',
    backgroundSize: '100%',
    paddingTop: '1em',
    zIndex: 2,
    position: 'absolute',
    top: '-45%',
    right: '-64%',
    cursor: 'auto'
  },
  color: {
    width: '3.5em',
    height: '3.5em',
    margin: '0.25em',
    display: 'inline-block',
    cursor: 'pointer',
    border: '0.2em solid rgb(205, 205, 195)',
    borderRadius: '50%'
  },
  deleteBearBox: {
    width: '100%'
  },
  deleteBearImg: {
    cursor: 'pointer',
    height: '3.5em',
    width: '3.5em',
    border: '0.2em solid rgb(205, 205, 195)',
    borderRadius: '50%'
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
    return (
      <div
        className='colorPicker'
        style={ styles.box }
      >
        { colors.map( ( color, key ) => {
          if ( color !== C.BEAR_TO_IGNORE ) {
            const colorStyle = Object.assign(
              {},
              styles.color,
              { backgroundColor: color }
            )
            return (
              <div
                className={ 'color' + color }
                key={ key }
                onClick={ () => this.props.handleBearColorChange( color ) }
                style={ colorStyle }
              />
            )
          }
        }) }
        <div
          className='deleteBearBox'
          style={ styles.deleteBearBox }
        >
          <img
            className='deleteBear'
            src={ C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }
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
  handleDeleteBear: PropTypes.func.isRequired
}

export default listensToClickOutside( ColorPicker )

import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '18em',
    height: '13em',
    backgroundColor: 'rgba(225, 225, 215, 1)',
    border: '0.2em solid rgb(205, 205, 195)',
    borderRadius: '0.5em',
    zIndex: 2,
    position: 'absolute',
    top: '-40%',
    right: '-60%',
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

const colors = [
  C.COLORS.BLUE,
  C.COLORS.GREEN,
  C.COLORS.YELLOW,
  C.COLORS.RED,
  C.COLORS.PURPLE,
  C.COLORS.PINK,
  C.COLORS.ORANGE,
  C.COLORS.BROWN
]

class ColorPicker extends React.Component {
  constructor( props ) {
    super( props )
    this.handleClickOutside = this.handleClickOutside.bind( this )
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

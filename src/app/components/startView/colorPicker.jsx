import React, { PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'
import C from '../../constants'

const styles = {
  box: {
    width: '18em',
    height: '16.5em',
    backgroundImage: 'url(public/pics/icons/colorpicker-bkgr-outlined-talk-bubble.svg)',
    backgroundSize: '100%',
    paddingTop: '1.5em',
    zIndex: 2,
    position: 'absolute',
    top: '-180%',
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
    width: '3.5em'
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
  handleDeleteBear: PropTypes.func.isRequired
}

export default listensToClickOutside( ColorPicker )

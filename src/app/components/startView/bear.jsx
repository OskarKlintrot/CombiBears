import React, { PropTypes } from 'react'
import ColorPicker from './colorPicker'
import BasicBear from '../shared/basicBear'
import C from '../../constants'

const styles = {
  div: {
    width: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative'
  }
}

class Bear extends React.Component {
  constructor( props ) {
    super( props )
    this.handleToggleColorPicker = this.handleToggleColorPicker.bind( this )
    this.state = {
      showColorPicker: false
    }
  }

  handleToggleColorPicker = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker })
  };

  onHandleOnClickOutsideColorPicker = () => {
    this.setState({ showColorPicker: false })
  };

  onHandleBearColorChange = ( color ) => {
    let src = C.SRC_TO_IMAGES.BEARS.PLACEHOLDER
    switch ( color ) {
    case C.COLORS.BLUE:
      src = C.SRC_TO_IMAGES.BEARS.BLUE
      break
    case C.COLORS.GREEN:
      src = C.SRC_TO_IMAGES.BEARS.GREEN
      break
    case C.COLORS.YELLOW:
      src = C.SRC_TO_IMAGES.BEARS.YELLOW
      break
    case C.COLORS.RED:
      src = C.SRC_TO_IMAGES.BEARS.RED
      break
    case C.COLORS.PURPLE:
      src = C.SRC_TO_IMAGES.BEARS.PURPLE
      break
    case C.COLORS.PINK:
      src = C.SRC_TO_IMAGES.BEARS.PINK
      break
    case C.COLORS.ORANGE:
      src = C.SRC_TO_IMAGES.BEARS.ORANGE
      break
    case C.COLORS.BROWN:
      src = C.SRC_TO_IMAGES.BEARS.BROWN
      break
    default :
      src = C.BEARS.PLACEHOLDER
    }
    this.props.updateBearArray( src, this.props.bearID )
  };

  render() {
    return (
      <div
        style={ styles.div }
      >
        <BasicBear
          className='big-6 columns'
          bear={ this.props.bear }
          style={ this.props.style }
          onClick={ this.handleToggleColorPicker }
        />
      { this.state.showColorPicker ?
        <ColorPicker
          handleClickOutside={ this.onHandleOnClickOutsideColorPicker }
          handleBearColorChange={ this.onHandleBearColorChange }
        /> :
        null
      }
      </div>
    )
  }
}

Bear.propTypes = {
  bearID: PropTypes.number.isRequired,
  color: PropTypes.string,
  style: PropTypes.object.isRequired,
  updateBearArray: PropTypes.func.isRequired
}

export default Bear

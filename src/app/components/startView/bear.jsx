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
    this.src = this.getImageSrcFromColorString( this.props.color )
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
    this.src = this.getImageSrcFromColorString( color )
    this.props.updateBear( this.src, this.props.bearID )
  };

  onHandleDeleteBear = () => {
    this.props.deleteBear( this.props.bearID )
  };

  getImageSrcFromColorString = ( color ) => {
    switch ( color ) {
    case C.COLORS.BLUE:
      return C.SRC_TO_IMAGES.BEARS.BLUE
    case C.COLORS.GREEN:
      return C.SRC_TO_IMAGES.BEARS.GREEN
    case C.COLORS.YELLOW:
      return C.SRC_TO_IMAGES.BEARS.YELLOW
    case C.COLORS.RED:
      return C.SRC_TO_IMAGES.BEARS.RED
    case C.COLORS.PURPLE:
      return C.SRC_TO_IMAGES.BEARS.PURPLE
    case C.COLORS.PINK:
      return C.SRC_TO_IMAGES.BEARS.PINK
    case C.COLORS.ORANGE:
      return C.SRC_TO_IMAGES.BEARS.ORANGE
    case C.COLORS.BROWN:
      return C.SRC_TO_IMAGES.BEARS.BROWN
    default :
      return C.SRC_TO_IMAGES.BEARS.PLACEHOLDER
    }
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
          handleDeleteBear={ this.onHandleDeleteBear }
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
  updateBear: PropTypes.func.isRequired,
  deleteBear: PropTypes.func.isRequired
}

export default Bear

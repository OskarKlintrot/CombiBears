import React, { PropTypes } from 'react'
import ColorPicker from './colorPicker'
import BasicBear from '../shared/basicBear'
import C from '../../constants'

const styles = {
  div: {
    cursor: 'pointer'
  }
}

class Bear extends React.Component {
  constructor( props ) {
    super( props )
    this.handleToggleColorPicker = this.handleToggleColorPicker.bind( this )
    this.src = C.SRC_TO_IMAGES.BEARS[this.props.color]
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
    this.src = C.SRC_TO_IMAGES.BEARS[color]
    this.props.updateBear({
      color: color,
      src: this.src,
      id: this.props.bearID
    })
    this.handleToggleColorPicker()
  };

  onHandleDeleteBear = () => {
    this.props.deleteBear( this.props.bearID )
    this.handleToggleColorPicker()
  };

  render() {
    return (
      <div
        style={ styles.div }
        onClick={ this.handleToggleColorPicker }
      >
        <BasicBear
          bear={ this.props.bear }
          style={ this.props.style }
        />
      { this.state.showColorPicker ?
        <ColorPicker
          handleClickOutside={ this.onHandleOnClickOutsideColorPicker }
          handleBearColorChange={ this.onHandleBearColorChange }
          handleDeleteBear={ this.onHandleDeleteBear }
          topBear={ this.props.bearID < 2 }
          bears={ this.props.bears }
        /> :
        null
      }
      </div>
    )
  }
}

Bear.propTypes = {
  bearID: PropTypes.number.isRequired,
  bear: PropTypes.object.isRequired,
  bears: PropTypes.object.isRequired,
  color: PropTypes.string,
  style: PropTypes.object.isRequired,
  updateBear: PropTypes.func.isRequired,
  deleteBear: PropTypes.func.isRequired
}

export default Bear

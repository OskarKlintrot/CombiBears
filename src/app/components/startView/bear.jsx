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
    this.props.updateBear( this.src, this.props.bearID )
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
          topBear={ this.props.bearID < 2 }
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

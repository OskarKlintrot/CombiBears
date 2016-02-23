import React, { PropTypes } from 'react'
import ColorPicker from './colorPicker'
import BasicBear from '../shared/basicBear'

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

  render() {
    return (
      <div
        style={ styles.div }
      >
        <BasicBear
          className='bear'
          bear={ this.props.bear }
          style={ this.props.style }
          onClick={ this.handleToggleColorPicker }
        />
      { this.state.showColorPicker ? <ColorPicker /> : null }
      </div>
    )
  }
}

Bear.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object.isRequired
}

export default Bear

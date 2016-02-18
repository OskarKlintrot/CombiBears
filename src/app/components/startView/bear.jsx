import React, { PropTypes } from 'react'
import ColorPicker from './colorPicker'

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
        <img
          className='bear'
          src={
            this.props.color ?
            'public/pics/bears/' + this.props.color + '.png' :
            'public/pics/bears/placeholder.png'
          }
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

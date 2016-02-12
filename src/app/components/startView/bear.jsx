import React, { PropTypes } from 'react'
import ColorPicker from './colorPicker'

class Bear extends React.Component {
  render() {
    const styles = {
      div: {
        width: '50%',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative'
      }
    }

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
        />
        <ColorPicker />
      </div>
    )
  }
}

Bear.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
}

export default Bear

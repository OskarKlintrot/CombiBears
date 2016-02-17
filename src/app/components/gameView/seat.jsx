import React from 'react'

class Seat extends React.Component {
  render() {
    const styles = {
      seat: {
        backgroundColor: 'grey',
        width: '100%',
        height: '60%',
        border: '1px black solid',
        position: 'relative'
      }
    }
    return (
      <div className='seat' style={ styles.seat }>
        { this.props.children }
      </div>
    )
  }
}

export default Seat

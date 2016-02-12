import React from 'react'

class Seat extends React.Component {
  render() {
    return (
      <div style = { {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '130px',
        height: '120px',
        backgroundColor: 'WHITESMOKE',
        zIndex: 1,
        opacity: 0.8
      } }>
      </div>
    )
  }
}

export default Seat

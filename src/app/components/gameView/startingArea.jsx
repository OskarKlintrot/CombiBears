import React from 'react'

class StartingArea extends React.Component {
  render() {
    return (
      <div style = { {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100px',
        height: '120px',
        backgroundColor: 'WHITESMOKE'
      } }>
        { this.props.children }
      </div>
    )
  }
}

export default StartingArea

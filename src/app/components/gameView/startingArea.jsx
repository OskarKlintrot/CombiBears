import React, { PropTypes } from 'react'
import Teddybear from './teddybear'
import Seat from './seat'

class StartingArea extends React.Component {
  renderSeat( teddyColor ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear color = { teddyColor } /> :
      null

    return (
      <Seat>
        { bear }
      </Seat>
    )
  }

  render() {
    return (
      <div
        className = 'starting-area'
        style = { {
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '130px',
          height: '120px',
          backgroundColor: 'WHITESMOKE'
        } }
      >
      {
        this.props.bears.map( this.renderSeat )
      }
      </div>
    )
  }
}

StartingArea.propTypes = {
  bears: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

export default StartingArea

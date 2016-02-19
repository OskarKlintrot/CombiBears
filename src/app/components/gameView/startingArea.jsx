import React, { PropTypes } from 'react'
import Teddybear from './teddybear'
import Seat from './seat'

class StartingArea extends React.Component {
  renderSeat( teddyColor ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear color={ teddyColor } /> :
      null

    return (
      <Seat>
        { bear }
      </Seat>
    )
  }

  render() {

    const styles = {
      startingArea: {

        border: '1px solid #f0f',

        bottom: '0',
        margin: '0 auto',
        left: '0',
        //right: '0',

        position: 'absolute',
        width: '500px',
        height: '125px'


      }
    }

    return (
      <div
        style={ styles.startingArea }
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

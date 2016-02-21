import React, { PropTypes } from 'react'
import Teddybear from './teddybear'
import Seat from './seat'

class StartingArea extends React.Component {
  renderSeat( teddyColor, seatIndex ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear
        onBeginDrag={ this.props.onBeginDrag }
        color={ teddyColor }
      /> :
      null

    return (
      <Seat
        index={ seatIndex }
        onDrop={ this.props.onDrop }
        canDrop={ bear === null }
        containerTypeName='StartingArea'
      >
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
        // right: '0',
        position: 'absolute',
        width: '500px',
        height: '125px'
      }
    }

    return (
      <div style={ styles.startingArea } >
      {
        this.props.bears.map(
          ( bear, index ) => this.renderSeat( bear, index )
        )
      }
      </div>
    )
  }
}

StartingArea.propTypes = {
  bears: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default StartingArea

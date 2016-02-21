import React, { PropTypes } from 'react'
import Teddybear from './teddybear'
import Seat from './seat'

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

const StartingArea = ( props ) => {
  const { bears, onDrop, onBeginDrag } = props

  return (
    <div style={ styles.startingArea } >
    { bears.map( ( teddyColor, seatIndex ) => {
      const bear = typeof teddyColor === "string" ?
        <Teddybear
          onBeginDrag={ onBeginDrag }
          color={ teddyColor }
        /> :
        null

      return (
        <Seat
          key={ seatIndex }
          index={ seatIndex }
          onDrop={ onDrop }
          canDrop={ bear === null }
          containerTypeName='StartingArea'
        >
          { bear }
        </Seat>
      )
    }) }
    </div>
  )
}

StartingArea.propTypes = {
  bears: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default StartingArea

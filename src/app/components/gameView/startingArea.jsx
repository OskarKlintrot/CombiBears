import React, { PropTypes } from 'react'
import Teddybear from './teddybear'
import Seat from './seat'

const styles = {
  startingArea: {
    border: '1px solid #f0f',
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    // right: '0',
    position: 'absolute',
    width: '500px',
    height: '150px'
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
          containerTypeName='StartingArea'
          key={ seatIndex }
          index={ seatIndex }
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

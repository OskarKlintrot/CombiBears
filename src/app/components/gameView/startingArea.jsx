import React, { PropTypes } from 'react'
import Seat from './seat'
import DraggableBear from './draggableBear.jsx'
import C from '../../constants'

const styles = {
  startingArea: {
    display: 'flex',
    alignItems: 'stretch',
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    position: 'fixed',
    width: '50%'
  }
}

const StartingArea = ( props ) => {

  const renderSeat = ( bearKey, seatIndex, containerTypeName ) => {

    const bear = bearKey !== null ?
      <DraggableBear
        key={ seatIndex }
        index={ seatIndex }
        bearKey={ bearKey }
        bearsSettings={ props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
        containerTypeName={ containerTypeName }
        onDrop={ props.onDrop }
      /> :
      null

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        containerTypeName={ containerTypeName }
        numberOfSeats={ props.numberOfSeats }
      >
        { bear }
      </Seat>
    )
  }

  return (
    <div
      className={ C.COMPONENT_NAMES.STARTING_AREA }
      style={ styles.startingArea }
    >
      {
        // Render prop.bearsOnStart with function prop.renderSeat, both passed from parent
        props.bearsOnStart ? props.bearsOnStart.map( ( bearKey, index ) =>
          renderSeat( bearKey, index, C.COMPONENT_NAMES.STARTING_AREA ) ) : null
      }
    </div>
  )
}

StartingArea.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  bearsOnStart: PropTypes.array.isRequired,
  onDrop: PropTypes.func.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default StartingArea

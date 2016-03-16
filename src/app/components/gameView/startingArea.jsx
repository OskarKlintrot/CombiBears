import React, { PropTypes } from 'react'
import Seat from './seat'
import DraggableBear from './draggableBear'
import BearPlaceHolder from './bearPlaceHolder'
import C from '../../constants'
import Radium from 'radium'

const styles = {
  startingArea: {
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    position: 'fixed',
    width: '512px',
    '@media (min-width: 1400px)': {
      width: '800px'
    },
    '@media (min-width: 900px) and (max-width: 1399px)': {
      width: '600px'
    },
    '@media (min-width: 620px) and (max-width: 767px)': {
      width: '400px'
    },
    '@media (min-width: 480px) and (max-width: 619px)': {
      width: '300px'
    },
    '@media (max-width: 479px)': {
      width: '90%'
    }
  }
}

@Radium
class StartingArea extends React.Component {

  renderSeat = ( bearKey, seatIndex, containerTypeName ) => {

    const bear = bearKey !== null ?
      <DraggableBear
        key={ seatIndex }
        index={ seatIndex }
        bearKey={ bearKey }
        bearsSettings={ this.props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
        containerTypeName={ containerTypeName }
        onDrop={ this.props.onDrop }
      /> :
      <BearPlaceHolder
        bearsSettings={ this.props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
      />

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        containerTypeName={ containerTypeName }
        numberOfSeats={ 4 }
      >
        { bear }
      </Seat>
    )
  };

  render() {
    return (
      <div
        className={ 'flex-seat-container' }
        style={ styles.startingArea }
      >
        <div className='flex-seat-container'>
          {
            // Render prop.bearsOnStart with function prop.renderSeat, both passed from parent
            this.props.bearsOnStart ? this.props.bearsOnStart.map( ( bearKey, index ) =>
              this.renderSeat( bearKey, index, C.COMPONENT_NAMES.STARTING_AREA ) ) : null
            }
        </div>
      </div>
    )
  }
}

StartingArea.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  bearsOnStart: PropTypes.array.isRequired,
  onDrop: PropTypes.func.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default StartingArea

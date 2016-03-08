import React, { PropTypes } from 'react'
import _ from 'lodash'
import Seat from './seat'
import DraggableBear from './draggableBear'
import BearPlaceHolder from './bearPlaceHolder'
import C from '../../constants'

const Sofa = ( props ) => {
  const { styles, numberOfSeats } = props

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
      <BearPlaceHolder
        bearsSettings={ props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
      />

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
      className={ C.COMPONENT_NAMES.SOFA }
      style={ Sofa.mergeStyles( styles, numberOfSeats ) }
    >
      <div style={ Sofa.genericStyles.seatContainer }>

        {
          // Render prop.bearsOnSofa with function prop.renderSeat, both passed from parent
          props.bearsOnSofa ? props.bearsOnSofa.map( ( bearKey, index ) =>
            renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
            ) : null
        }

      </div>
    </div>
  )
}

Sofa.getSofaStyles = ( numberOfSeats ) => {
  const sofaStyles = {
    twoSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ') top no-repeat',
      width: '50%',
      padding: '0% 7% 8% 7%'
    },
    threeSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ') top no-repeat',
      width: '50%',
      padding: '3% 7% 8% 7%'
    },
    fourSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ') top no-repeat',
      width: '50%',
      padding: '5% 7% 8% 7%'
    }
  }

  switch ( numberOfSeats ) {
  case 2: return sofaStyles.twoSeats
  case 3: return sofaStyles.threeSeats
  case 4: return sofaStyles.fourSeats
  default: return sofaStyles.fourSeats
  }
}

Sofa.genericStyles = {

  sofa: {
    backgroundSize: 'contain',
    textAlign: 'center',
    margin: '0 auto'
  },
  seatContainer: {
    display: 'flex',
    alignItems: 'stretch'
  }
}

// Merge styles: genericStyles, prop.styles, and sofaStyles
Sofa.mergeStyles = ( styles, numberOfSeats ) => _.assign({}, Sofa.genericStyles.sofa, styles, Sofa.getSofaStyles( numberOfSeats ) )

Sofa.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  bearsOnSofa: PropTypes.array.isRequired,
  onDrop: PropTypes.func.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default Sofa

import React, { PropTypes } from 'react'
import C from '../../constants'

const Sofa = ( props ) => {
  const { scale, styles, numberOfSeats } = props
  return (
    <div
      className={ C.COMPONENT_NAMES.SOFA }
      style={ Sofa.mergeStyles( styles, scale, numberOfSeats ) }
    >
      <div style={ Sofa.genericStyles( scale ).seatContainer }>
        { props.children }
      </div>
    </div>
  )
}

Sofa.applyScale = ( value, unit, scale ) => {
  return ( scale * Number( value ) ).toString() + unit
}

Sofa.getSofaStyles = ( scale, numberOfSeats ) => {
  const sofaStyles = {
    twoSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ') top no-repeat',
      width: '50%',
      padding: '1% 1% 1% 1%'
    },
    threeSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ') top no-repeat',
      width: '50%',
      padding: '5% 7% 8% 7%'
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

Sofa.genericStyles = ( scale ) => {
  return ({
    sofa: {
      backgroundSize: 'contain',
      textAlign: 'center',
      border: '1px solid #f0f',
      margin: '0 auto'
    },
    seatContainer: {
      display: 'flex',
      alignItems: 'stretch'
    }
  })
}

// Merge styles: genericStyles, prop.styles, and sofaStyles
Sofa.mergeStyles = ( styles, scale, numberOfSeats ) => Object.assign({}, Sofa.genericStyles().sofa, styles, Sofa.getSofaStyles( scale, numberOfSeats ) )

Sofa.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired
}

export default Sofa

import React, { PropTypes } from 'react'
import C from '../../constants'

const Sofa = ( props ) => {
  const { scale, styles, numberOfSeats } = props
  return (
    <div
      className={ C.COMPONENT_NAMES.SOFA }
      style={ Sofa.mergedStyles( styles, scale, numberOfSeats ) }
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
      width: Sofa.applyScale( '450', 'px', scale ),
      height: Sofa.applyScale( '240', 'px', scale ),
      padding: `${ Sofa.applyScale( '20', 'px', scale ) } ${ Sofa.applyScale( '8', 'px', scale ) } 0 ${ Sofa.applyScale( '12', 'px', scale ) }`
    },
    threeSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ')',
      width: Sofa.applyScale( '500', 'px', scale ),
      height: Sofa.applyScale( '270', 'px', scale ),
      padding: `${ Sofa.applyScale( '40', 'px', scale ) } ${ Sofa.applyScale( '8', 'px', scale ) } 0 ${ Sofa.applyScale( '12', 'px', scale ) }`
    },
    fourSeats: {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ')',
      width: Sofa.applyScale( '600', 'px', scale ),
      height: Sofa.applyScale( '300', 'px', scale ),
      padding: `${ Sofa.applyScale( '70', 'px', scale ) } ${ Sofa.applyScale( '75', 'px', scale ) } 0 ${ Sofa.applyScale( '85', 'px', scale ) }`
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
      textAlign: 'center'
    },
    seatContainer: {
      height: Sofa.applyScale( '150', 'px', scale )
    }
  })
}

// Merge styles: genericStyles, prop.styles, and sofaStyles
Sofa.mergedStyles = ( styles, scale, numberOfSeats ) => Object.assign({}, Sofa.genericStyles().sofa, styles, Sofa.getSofaStyles( scale, numberOfSeats ) )

Sofa.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired
}

export default Sofa

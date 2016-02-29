import React, { PropTypes } from 'react'
import C from '../../constants'

const Sofa = ( props ) => {

  const applyScale = ( value, unit ) => {
    return ( props.scale * Number( value ) ).toString() + unit
  }

  const getSofaStyles = () => {
    switch ( props.numberOfSeats ) {
    case 2: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ')',
      width: applyScale( '450', 'px' ),
      height: applyScale( '240', 'px' ),
      padding: `${ applyScale( '20', 'px ' ) } ${ applyScale( '8', 'px' ) } 0 ${ applyScale( '12', 'px' ) }`
    }
    case 3: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ')',
      width: applyScale( '500', 'px' ),
      height: applyScale( '270', 'px' ),
      padding: `${ applyScale( '40', 'px ' ) } ${ applyScale( '8', 'px' ) } 0 ${ applyScale( '12', 'px' ) }`
    }
    case 4: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ')',
      width: applyScale( '600', 'px' ),
      height: applyScale( '300', 'px' ),
      padding: `${ applyScale( '70', 'px ' ) } ${ applyScale( '75', 'px' ) } 0 ${ applyScale( '85', 'px' ) }`
    }
    default: return C.SRC_TO_IMAGES.SOFAS['4']
    }
  }

  const styles = {
    sofa: {
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      bottom: '80px',
      margin: '0 auto',
      left: '0',
      right: '0',
      textAlign: 'center'
    },
    seatContainer: {
      height: applyScale( '150', 'px' )
    }
  }

  // Merge styles
  const sofaStyles = Object.assign({}, styles.sofa, props.styles, getSofaStyles() )

  return (
    <div
      className={ C.COMPONENT_NAMES.SOFA }
      style={ sofaStyles }
    >
      <div style={ styles.seatContainer }>

        { props.children }

      </div>
    </div>
  )
}

Sofa.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired
}

export default Sofa

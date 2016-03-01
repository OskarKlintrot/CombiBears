import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSeat from './basicSeat'
import BasicBear from './basicBear'

const BasicSofa = ( props ) => {

  const applyScale = ( value, unit ) => {
    return ( props.scale * Number( value ) ).toString() + unit
  }

  const getSofaStyles = () => {

    const sofaStyles = {
      twoSeats: {
        background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ')',
        width: applyScale( '450', 'px' ),
        height: applyScale( '240', 'px' ),
        padding: `${ applyScale( '20', 'px ' ) } ${ applyScale( '8', 'px' ) } 0 ${ applyScale( '12', 'px' ) }`
      },
      threeSeats: {
        background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ')',
        width: applyScale( '500', 'px' ),
        height: applyScale( '270', 'px' ),
        padding: `${ applyScale( '40', 'px ' ) } ${ applyScale( '8', 'px' ) } 0 ${ applyScale( '12', 'px' ) }`
      },
      fourSeats: {
        background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ')',
        width: applyScale( '600', 'px' ),
        height: applyScale( '300', 'px' ),
        padding: `${ applyScale( '70', 'px ' ) } ${ applyScale( '75', 'px' ) } 0 ${ applyScale( '85', 'px' ) }`
      }
    }

    switch ( props.settings.numberOfSeats ) {
    case 2: return sofaStyles.twoSeats
    case 3: return sofaStyles.threeSeats
    case 4: return sofaStyles.fourSeats
    default: return sofaStyles.fourSeats
    }
  }

  const genericStyles = {
    sofa: {
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      textAlign: 'center'
    },
    seatContainer: {
      height: applyScale( '150', 'px' )
    },
    bear: {
      width: '95%',
      margin: 'auto'
    }
  }

  // Merge styles: genericStyles, prop.styles, and sofaStyles
  const mergedStyles = Object.assign({}, genericStyles.sofa, props.styles, getSofaStyles() )

  const renderSeat = ( bearKey, seatIndex, containerTypeName ) => {
    console.log( bearKey, seatIndex )
    const bear = bearKey !== null ?
      <BasicBear
        key={ seatIndex }
        index={ seatIndex }
        style={ mergedStyles.bear }
        bear={ props.settings.bears[bearKey] }
      /> :
      null

    return (
      <BasicSeat
        key={ seatIndex }
        index={ seatIndex }
        containerTypeName={ containerTypeName }
      >
        { bear }
      </BasicSeat>
    )
  }

  return (
    <div
      className={ C.COMPONENT_NAMES.SOFA }
      style={ mergedStyles }
    >
      <div style={ genericStyles.seatContainer }>

        {
          props.bearsOnSofa.map( ( bearKey, index ) =>
            renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
          )
        }

      </div>
    </div>
  )
}

BasicSofa.propTypes = {
  scale: PropTypes.number.isRequired,
  bearsOnSofa: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default BasicSofa

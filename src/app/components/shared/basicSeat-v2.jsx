import React, { PropTypes } from 'react'

const BasicSeat = ( props ) => {
  const styles = {
    getSeatCss: function( noOfTotalSeats ) {
      let seatWidth = '0%'
      let seatPadding = '0%'
      let seatMargin = '0%'
      const four = 4
      const three = 3
      if ( noOfTotalSeats === four ) {
        seatWidth = '25%'
      } else if ( noOfTotalSeats === three ) {
        seatWidth = '30%'
        seatPadding = '1.5%'
        seatMargin = '1%'
      } else {
        seatWidth = '40%'
        seatPadding = '5%'
        seatMargin = '4%'
      }

      return ({
        width: seatWidth,
        paddingLeft: seatPadding,
        paddingRight: seatPadding,
        marginRight: seatMargin,
        marginLeft: seatMargin,
        display: 'inline-block',
        minHeight: '100%',
        zIndex: 1,
        opacity: 1,
        textAlign: 'center',
        verticalAlign: 'top'
      })
    }
  }

  return (
    <div style={ styles.getSeatCss( props.numberOfSeats ) } >
    { props.children }
    </div>
  )
}

BasicSeat.propTypes = {
  index: PropTypes.number.isRequired
}

export default BasicSeat

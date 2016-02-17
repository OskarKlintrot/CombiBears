import React from 'react'
import Seat from './seat'

const styles = {
  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5px',
    zIndex: '10',
    marginLeft: '0px',
    marginTop: '-150px',
    display: 'inline-flex'
  },

  ulSofasLi: {
    display: 'inline-block'
  }
}

const getSofaWidth = {
  getSofaSize: function( sofa ) {
    let sofaSize = 0
    sofa.seats.map( ( seat ) => {
      if ( seat.onSofa )
        sofaSize += 1
    })
    return sofaSize
  },

  getNoOfBears: function( sofa ) {
    let noOfBears = 0
    sofa.seats.map( ( seat ) => {
      if ( seat.bear !== null )
        noOfBears += 1
    })
    return noOfBears
  },

  getSeatCss: function( noOfTotalSeats ) {
    let seatWidth = ''
    if ( noOfTotalSeats === 4 )
      seatWidth = '25%'
    else if ( noOfTotalSeats === 3 )
      seatWidth = '33%'
    else
      seatWidth = '50%'
    return ({
      display: 'inline',
      marginLeft: '0px',
      width: seatWidth
    })
  },

  sofaWidth: function( sofaSize, noOfBears ) {
    let sofaWidth = ''

    if ( sofaSize === 4 ) {
      sofaWidth = '100%'
    } else if ( sofaSize === 3 ) {
      if ( noOfBears === 4 )
        sofaWidth = '75%'
      else
        sofaWidth = '100%'
    } else if ( sofaSize === 2 ) {
      if ( noOfBears === 4 )
        sofaWidth = '50%'
      else if ( noOfBears === 3 )
        sofaWidth = '67%'
      else
        sofaWidth = '100%'
    }
    return ({
      width: sofaWidth
    })
  }
}

const Sofa = ( props ) => {
  const sofaSize = getSofaWidth.getSofaSize( props.sofa )
  const noOfBears = getSofaWidth.getNoOfBears( props.sofa )
  return (
    <li style={ styles.ulSofasLi } className='small-4 medium-4 large-4 columns'>
      <img src='public/pics/sofas/four.png' alt='Image for three-seat sofa' style={ getSofaWidth.sofaWidth( sofaSize, noOfBears ) }/>
      <ul style={ styles.ulBears }>
        { props.sofa.seats.map( ( seat ) => {
          return <li key={ seat.seatId } style={ getSofaWidth.getSeatCss( props.sofa.seats.length ) }><Seat seat={ seat } key={ seat.seatId } /></li>
        }) }
      </ul>
    </li>
  )
}

export default Sofa

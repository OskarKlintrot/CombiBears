import React from 'react'
import Seat from './seat'

const styles = {
  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5px',
    zIndex: '10',
    marginLeft: '0px',
    marginTop: '-130px'
  },

  ulSofasLi: {
    display: 'inline-block'
  },

  sofa: {
    width: '100%'
  }
}

const getSofaProps = {
  getSeatCss: function( noOfTotalSeats ) {
    let seatWidth = ''
    if ( noOfTotalSeats === 4 )
      seatWidth = '25%'
    else if ( noOfTotalSeats === 3 )
      seatWidth = '33%'
    else
      seatWidth = '50%'
    return ({
      display: 'inline-block',
      marginLeft: '0px',
      width: seatWidth
    })
  }

}

const noOfSeats = {
  getSeatsImage: function( seats ) {
    switch ( seats ) {
    case 2: return 'two'
    case 3: return 'three'
    case 4: return 'four'
    default: return 'four'
    }
  }
}

const Sofa = ( props ) => {

  return (
    <li style={ styles.ulSofasLi } className='small-4 medium-4 large-4 columns'>
      <img src={ 'public/pics/sofas/' + noOfSeats.getSeatsImage( props.sofa.seats.length ) + '.png' } alt='Image for three-seat sofa' style={ styles.sofa }/>
      <ul style={ styles.ulBears }>
        { props.sofa.seats.map( ( seat ) => {
          return <li key={ seat.seatId } style={ getSofaProps.getSeatCss( props.sofa.seats.length ) }><Seat seat={ seat } key={ seat.seatId } /></li>
        }) }
      </ul>
    </li>
  )
}

export default Sofa

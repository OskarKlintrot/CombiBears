import React from 'react'
import Seat from './seat'

const styles = {
  sofa: {
    width: '75%'
  },

  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5px',
    zIndex: '10',
    marginTop: '-150px',
    marginLeft: '0px'
  },

  ulSofasLi: {
    display: 'inline-block'
  }
}

const getSofaWidth = {
  sofaWidth: function( sofa ) {
    let sofaSize = 0
    let noOfBears = 0
    sofa.seats.map( ( seat ) => {
      if ( seat.onSofa )
        sofaSize += 1
      if ( seat.bear !== null )
        noOfBears += 1
    })
    return ({
      width: '100%'
    })
  }
}

const Sofa = ( props ) => {
  return (
    <li style={ styles.ulSofasLi } className='small-4 medium-4 large-4 columns'>
      <img src='public/pics/sofas/three.png' alt='Image for four-seat sofa' style={ getSofaWidth.sofaWidth( props.sofa ) }/>
      <ul style={ styles.ulBears }>
        { props.sofa.seats.map( ( seat ) => {
          return <Seat seat={ seat } key={ seat.seatId } />
        }) }
      </ul>
    </li>
  )
}

export default Sofa

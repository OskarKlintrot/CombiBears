import React from 'react'
import Seat from './seat'

const styles = {
  sofa: {
    width: '260px'
  },

  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5px',
    zIndex: '10',
    marginTop: '-150px',
    marginLeft: '0px'
  },

  ulSofasLi: {
    display: 'inline-block',
    marginLeft: '30px'
  }
}

const Sofa = ( props ) => {
  return (
    <li style={ styles.ulSofasLi }>
      <img src='public/pics/sofas/three.png' alt='Image for four-seat sofa' style={ styles.sofa }/>
      <ul style={ styles.ulBears }>
        { props.sofa.seats.map( ( seat ) => {
          return <Seat seat={ seat } key={ seat.seatId } />
        }) }
      </ul>
    </li>
  )
}

export default Sofa

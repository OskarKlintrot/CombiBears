import React from 'react'
import Bear from './bear'

const styles = {
  ulBearsLi: {
    display: 'inline-block',
    width: '85px',
    marginLeft: '0px'
  }
}

const Seat = ( props ) => {
  let bear
  if ( props.seat.bear !== null )
    bear = <Bear bear={ props.seat.bear } />
  return (
    <li style={ styles.ulBearsLi }>
      { bear }
    </li>
  )
}

export default Seat

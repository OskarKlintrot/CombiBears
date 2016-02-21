import React from 'react'
import Bear from './bear'

const Seat = ( props ) => {
  if ( props.seat.bear !== null )
    return <Bear bear={ props.seat.bear }/>
  return <div></div>
}

export default Seat

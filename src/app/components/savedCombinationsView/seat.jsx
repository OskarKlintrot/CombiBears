import React from 'react'
import Bear from './bear'

const Seat = ( props ) => {
  let bear
  if ( props.seat.bear !== null )
    bear = <Bear bear={ props.seat.bear } />
  return <div>{ bear }</div>
}

export default Seat

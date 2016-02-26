import React from 'react'
import Bear from './bear'

const Seat = ( props ) => {
  if ( props.bear !== null )
    return <Bear bear={ props.bear }/>
  return <div></div>
}

export default Seat

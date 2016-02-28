import React from 'react'
import BasicBear from '../shared/basicBear'

const Seat = ( props ) => {
  if ( props.bear !== null )
    return <BasicBear bear={ props.bear }/>
  return <div></div>
}

export default Seat

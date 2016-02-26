import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Bear from './bear'

const Seat = ( props ) => {
  const bear = props.bears[props.bear.id]
  if ( bear !== null )
    return <Bear bear={ bear }/>
  return <div></div>
}

export default Seat

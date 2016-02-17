import React from 'react'

const styles = {
  bear: {
    width: '100%'
  }
}

const Seat = ( props ) => {
  let bear
  if ( props.seat.bear !== null )
    bear = <img src={ 'public/pics/bears/' + props.seat.bear.color + '.png' } alt='Image of bear' style={ styles.bear }/>
  else
    bear = <img src={ 'public/bears/png' } alt='Image of bear' style={ styles.bear }/>
  return bear
}

export default Seat

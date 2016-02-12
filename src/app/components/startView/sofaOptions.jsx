import React, { PropTypes } from 'react'

const styles = {
  img: {
    height: '1579px',
    width: '1000px',
    objectFit: 'none',
    zoom: '10%'
  }
}

const sprites = {
  1: {
    objectPosition: '0 0'
  },
  2: {
    objectPosition: '-1000px 0'
  },
  3: {
    objectPosition: '-2000px 0'
  },
  4: {
    objectPosition: '-3000px 0'
  }
}

const SofaOptions = ( props ) => {
  const { selected } = props
  const couch = []
  const klick = ( seat ) => console.log( seat )

  for ( const sprite in sprites ) {
    if ( sprite ) {
      const currentSeat = Number( sprite )
      const minimumNumberOfSeats = 2
      const style = Object.assign({}, styles.img, sprites[currentSeat] )

      couch.push(
        <img
          key={ currentSeat }
          onClick={ () => klick( currentSeat ) }
          style={ style }
          src={
            currentSeat <= selected ||
            selected < minimumNumberOfSeats &&
            currentSeat <= minimumNumberOfSeats &&
            selected > 0 ?
            'public/pics/sofas/slider-four.png' : 'public/pics/sofas/four.png'
          }
        ></img>
      )
    }
  }

  return (
    <div>
      { couch }
    </div>
  )
}

SofaOptions.propTypes = {
  selected: PropTypes.number.isRequired
}

export default SofaOptions

import React from 'react'

const styles = {
  img: {
    height: '1579px',
    width: '1000px',
    objectFit: 'none',
    WebkitFilter: 'opacity(0.85)',
    filter: 'opacity(0.85)',
    zoom: '10%'
  },
  selected: {
    WebkitFilter: 'opacity(1)',
    filter: 'opacity(1)'
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

const SofaOptions = () => {
  const couch = []
  const klick = ( seat ) => console.log( seat )

  for ( const sprite in sprites ) {
    if ( sprite !== isNaN ) {
      couch.push(
        <img
          key={ sprite }
          onClick={ () => klick( sprite ) }
          style={ Object.assign({}, styles.img, sprites[sprite] ) }
          src='public/pics/sofas/four.png'
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

export default SofaOptions

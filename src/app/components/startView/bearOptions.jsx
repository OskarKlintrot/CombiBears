import React from 'react'
import C from '../../constants'
import Bear from './bear'

const style = {
  box: {
    position: 'relative'
  },
  bear: {
    position: 'relative'
  }
}

const BearOptions = ( props ) => {
  const { bears } = props

  const bearsToRender = []
  const placeholder = { src: C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }

  for ( const item in bears ) {
    if ( bears.hasOwnProperty( item ) ) {
      bearsToRender.push(
        <Bear
          key={ item }
          bear={ bears[item] || placeholder }
          style={ style.bear }
          bearID={ item }
        />
      )
    }
  }

  return (
    <div
      className='bears'
      style={ style.box }
    >
      { bearsToRender }
    </div>
  )
}

export default BearOptions

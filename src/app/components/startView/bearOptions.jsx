import React from 'react'
import C from '../../constants'
import Bear from './bear'

const style = {
  box: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-55%)'
  },
  bear: {
    position: 'relative',
    WebkitFilter: 'drop-shadow(0 0 0.25em rgba(240, 240, 230, 1))'
  }
}

const BearOptions = ( props ) => {
  const { bears, updateBear, deleteBear } = props

  const bearsToRender = []
  const placeholder = { src: C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }

  for ( const item in bears ) {
    if ( bears.hasOwnProperty( item ) ) {
      bearsToRender.push(
        <Bear
          key={ item }
          bear={ bears[item] || placeholder }
          updateBear={ updateBear }
          deleteBear={ deleteBear }
          style={ style.bear }
          bearID={ parseInt( item ) }
        />
      )
    }
  }

  return (
    <div
      className='bears'
      style={ style.box }
    >
      <div className='row'>
        { bearsToRender[0] }
        { bearsToRender[1] }
      </div>
      <div className='row'>
        { bearsToRender[2] }
        { bearsToRender[3] }
      </div>
    </div>
  )
}

export default BearOptions

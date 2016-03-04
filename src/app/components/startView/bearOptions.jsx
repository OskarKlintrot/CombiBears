import React from 'react'
import C from '../../constants'
import Bear from './bear'

const style = {
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: '12%'
  },
  innerBox: {
    position: 'relative',
    display: 'inline-block',
    margin: '3% 6.25%',
    width: '25%'
  },
  bear: {
    width: '100%',
    WebkitFilter: 'drop-shadow(0 0 0.25em rgba(140, 140, 130, 1))'
  }
}

const BearOptions = ( props ) => {
  const { bears, updateBear, deleteBear } = props

  const bearsToRender = []
  const placeholder = { src: C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }

  for ( const item in bears ) {
    if ( bears.hasOwnProperty( item ) ) {
      bearsToRender.push(
        <div style={ style.innerBox }>
          <Bear
            key={ item }
            bear={ bears[item] || placeholder }
            bears={ bears }
            updateBear={ updateBear }
            deleteBear={ deleteBear }
            style={ style.bear }
            bearID={ parseInt( item ) }
          />
        </div>
      )
    }
  }

  return (
    <div
      className='bears'
      style={ style.box }
    >
      { bearsToRender[0] }
      { bearsToRender[1] }
      { bearsToRender[2] }
      { bearsToRender[3] }
    </div>
  )
}

export default BearOptions

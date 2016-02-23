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

const colors = [
  C.COLORS.BLUE,
  C.COLORS.GREEN,
  C.COLORS.PLACEHOLDER,
  C.COLORS.PLACEHOLDER
]

const BearOptions = () => {
  return (
    <div
      className='bears'
      style={ style.box }
    >
      { colors.map( ( color, key ) => {
        return (
          <Bear
            color={ color }
            style={ style.bear }
            key={ key }
          />
        )
      }) }
    </div>
  )
}

export default BearOptions

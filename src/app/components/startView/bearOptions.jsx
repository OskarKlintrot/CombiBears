import React from 'react'
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
  'blue',
  'green',
  'placeholder',
  'placeholder'
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

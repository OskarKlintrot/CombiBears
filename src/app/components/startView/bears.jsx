import React from 'react'
import Bear from './bear'

const style = {
  paddingTop: '3em'
}

const Bears = () => {
  return (
    <div
      className='bears'
      style={ style }
    >
      <Bear />
      <Bear />
      <Bear />
      <Bear />
    </div>
  )
}

export default Bears

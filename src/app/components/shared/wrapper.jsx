import React from 'react'

const Wrapper = ( props ) => {
  const { children } = props

  return (
    <div>
      { children }
    </div>
  )
}

export default Wrapper

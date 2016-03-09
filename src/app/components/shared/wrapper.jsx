import React from 'react'
import { StyleRoot } from 'radium'

const Wrapper = ( props ) => {
  const { children } = props

  return (
    <StyleRoot>
      <div>
        { children }
      </div>
    </StyleRoot>
  )
}

export default Wrapper

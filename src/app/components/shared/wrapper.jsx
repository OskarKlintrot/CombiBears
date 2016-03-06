import React from 'react'
import Radium, { Style, StyleRoot, PrintStyleSheet } from 'radium'

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

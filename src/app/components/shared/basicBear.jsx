import React from 'react'

const originalStyle = {
  // TODO: Do we need any common css?
}

const BasicBear = ( props ) => {
  const { bear, style, ...otherProps } = props

  const mergedStyle = Object.assign({}, originalStyle, style )

  return (
    <div
      { ...otherProps }
      style={ mergedStyle }
    >
      <img src={ bear.src }></img>
    </div>
  )
}

export default BasicBear

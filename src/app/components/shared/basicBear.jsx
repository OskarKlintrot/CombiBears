import React, { PropTypes } from 'react'

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
      <img
        className='allowTouchMove'
        src={ bear.src }
        alt='Image of a bear'
        draggable='false'
      ></img>
    </div>
  )
}

BasicBear.propTypes = {
  bear: PropTypes.object.isRequired
}

export default BasicBear

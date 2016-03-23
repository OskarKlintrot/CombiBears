import React, { PropTypes } from 'react'
import C from '../../constants'

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
        className={ C.ALLOW_TOUCH_MOVE_CLASS }
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

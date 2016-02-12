import React, { PropTypes } from 'react'

const Option = ( props ) => {
  const {
    optionElement,
    optionStyle
  } = props

  return (
    <div
      className='startViewOptions'
      style={ optionStyle }
    >{ optionElement }</div>
  )
}

Option.propTypes = {
  optionElement: PropTypes.func.isRequired,
  optionStyle: PropTypes.object
}

export default Option

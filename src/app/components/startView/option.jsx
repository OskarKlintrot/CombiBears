import React from 'react'

const Option = ( props ) => {
  const optionStyle = {
    optionElement: {
      height: '25em',
      width: '25em',
      padding: '0 5em 0 5em',
      borderRadius: '50%',
      backgroundColor: 'rgba(161, 161, 161, 0.56)'
    }
  }

  return (
    <div
      className='startViewOptions'
      style={ optionStyle.optionElement }
    >
      { props.children }
    </div>
  )
}

export default Option

import React from 'react'

const styles = {
  optionElement: {
    height: '25em',
    width: '25em',
    padding: '0 5em 0 5em',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)'
  }
}

const Option = ( props ) => {
  return (
    <div
      className='startViewOptions'
      style={ styles.optionElement }
    >
      { props.children }
    </div>
  )
}

export default Option

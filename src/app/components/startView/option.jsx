import React from 'react'

const styles = {
  optionElement: {
    width: '100%',
    paddingBottom: '100%',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)',
    position: 'relative'
  }
}

const Option = ( props ) => {
  return (
    <div>
      <div
        className='startViewOptions'
        style={ styles.optionElement }
      >
        { props.children }
      </div>
    </div>
  )
}

export default Option

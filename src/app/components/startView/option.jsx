import React from 'react'
import MediaQuery from 'react-responsive'

const styles = {
  optionElement: {
    height: '25em',
    maxWidth: '25em',
    width: '100%',
    padding: '0 5em 0 5em',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)'
  },
  optionElementTiny: {
    minWidth: '25em',
    minHeight: '25em',
    padding: '0 5em 0 5em',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)',
    margin: '1em 0'
  }
}

const Option = ( props ) => {
  return (
    <div>
      <MediaQuery query='(min-width: 1024px)'>
        <div
          className='startViewOptions'
          style={ styles.optionElement }
        >
          { props.children }
        </div>
      </MediaQuery>
      <MediaQuery query='(max-width: 1023px)'>
        <div
          className='startViewOptions'
          style={ styles.optionElementTiny }
        >
          { props.children }
        </div>
      </MediaQuery>
    </div>
  )
}

export default Option

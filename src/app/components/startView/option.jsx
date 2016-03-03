import React from 'react'
import MediaQuery from 'react-responsive'

const styles = {
  optionElement: {
    minHeight: '30em',
    maxWidth: '45em',
    maxHeight: '45em',
    width: '100%',
    padding: '0 5em 0 5em',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)'
  },
  optionElementTiny: {
    minWidth: '20em',
    minHeight: '20em',
    maxWidth: '30em',
    maxHeight: '30em',
    padding: '0 5em 0 5em',
    borderRadius: '50%',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)',
    margin: '1em auto'
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

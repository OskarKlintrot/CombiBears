import React from 'react'
import BasicBear from '../shared/basicBear'

const styles = {
  bear: {
    width: '100%'
  }
}

const Bear = ( props ) => {
  return (
    <BasicBear
      bear={ { id: props.bear.id, src: props.bear.src } }
      style={ styles.bear }
    />
   )
}

export default Bear

import React from 'react'
import C from '../../constants'
import BasicBear from '../shared/basicBear'

const styles = {
  bear: {
    width: '100%'
  }
}

const Bear = ( props ) => {
  return (
    <BasicBear
      bear={ { src: C.SRC_TO_IMAGES.BEARS[props.bear.color] } }
      style={ styles.bear }
    />
   )
}

export default Bear

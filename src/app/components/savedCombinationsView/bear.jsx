import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import BasicBear from '../shared/basicBear'

const styles = {
  bear: {
    width: '100%'
  }
}

const Bear = ( props ) => {
  return (
    <BasicBear
      bear={ { src: props.bear.src } }
      style={ styles.bear }
    />
   )
}

export default Bear

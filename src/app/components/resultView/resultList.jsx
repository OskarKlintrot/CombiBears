import React, { PropTypes } from 'react'
import _ from 'lodash'
import Box from './box'

const styles = {
  container: {
    marginTop: '2em',
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: 'auto',
    height: '100%'
  }
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  return (
    <div style={ styles.container }>
     { numberOfFoundPermutations + "/" + numberOfCorrectPermutations }
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

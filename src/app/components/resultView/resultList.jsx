import React, { PropTypes } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    verticalAlign: 'middle',
    height: '100%',
    lineHeight: '5em'
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

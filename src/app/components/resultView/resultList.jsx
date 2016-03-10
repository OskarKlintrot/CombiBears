import React, { PropTypes } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '3.4em',
    color: '#E26B00',
    fontFamily: '"jollygood_sansbasic", "Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif'
  }
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  const foundPermutations = numberOfFoundPermutations > 9 ? numberOfFoundPermutations : '0' + numberOfFoundPermutations
  return (
    <div style={ styles.container }>
     { foundPermutations + "/" + numberOfCorrectPermutations }
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

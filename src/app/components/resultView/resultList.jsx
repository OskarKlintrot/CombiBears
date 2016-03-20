import React, { PropTypes } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '3.4em',
    fontFamily: '"comic sans ms",Arial,sans-serif',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.1em solid rgb(250, 250, 240)',
    borderRadius: '0.2em'
  }
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  return (
    <div style={ styles.container }>
     {
        numberOfFoundPermutations +
        '/' +
        numberOfCorrectPermutations
      }
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

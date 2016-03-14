import React, { PropTypes } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '3.4em',
    fontFamily: '"comic sans ms",Arial,sans-serif'
  }
}

const nine = 9

const zeroOrHero = ( number ) => {
  if ( number > nine )
    return number
  return '0' + number
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  return (
    <div style={ styles.container }>
     {
        zeroOrHero( numberOfFoundPermutations ) +
        '/' +
        zeroOrHero( numberOfCorrectPermutations )
      }
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

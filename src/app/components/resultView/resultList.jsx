import React, { PropTypes } from 'react'

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '3.4em',
    color: '#E26B00',
    fontFamily: '"jollygood_sansbasic", "Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif'
  }
}

const zeroOrHero = ( number ) => {
  if ( number > 9 )
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

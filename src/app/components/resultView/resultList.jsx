import React, { PropTypes } from 'react'
import _ from 'lodash'
import Box from './box'

const styles = {
  container: {
    marginTop: '2em'
  }
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  return (
    <div
      className='row'
      style={ styles.container }
    >
      <div className='small-10 small-offset-1 columns'>
        { _.times( numberOfCorrectPermutations, Number ).map( ( item ) => {
          const found = item < numberOfFoundPermutations
          const statusOfCurrentPermutation = { id: item + 1, found: found }
          return (
            <Box
              item={ statusOfCurrentPermutation }
              key={ item }
            />
          )
        }) }
      </div>
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

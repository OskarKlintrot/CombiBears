import React, { PropTypes } from 'react'
import _ from 'lodash'
import Box from './box'

const style = {
  position: 'fixed',
  margin: '175px 0px 0px 278px',
  width: '650px',
  height: '159px',
  overflowX: 'hidden',
  padding: '0px 10px 10px 13px'
}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  return (
    <div style={ style }>
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
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList

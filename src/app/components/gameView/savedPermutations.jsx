import React, { PropTypes } from 'react'
import C from '../../constants'
import SavedPermutationsSofaList from './savedPermutationsSofaList'
import { Link } from 'react-router'

const styles = {
  icon: {
    height: '100px'
  }
}

const SavedPermutations = ( props ) => {
  const savedPermutationsSofas = []
  if ( props.savedPermutations !== null ) {
    let iInLoop = 0
    for ( iInLoop; iInLoop < props.savedPermutations.length; iInLoop += 1 ) {
      const savedPermutationsSeats = []
      const savedPermutationsSofa = { id: iInLoop }
      for ( let jInLoop = 0; jInLoop < props.savedPermutations[iInLoop].length; jInLoop += 1 ) {
        const savedPermutationsSeat = { id: jInLoop }
        if ( props.savedPermutations[iInLoop][jInLoop] !== null ) {
          const bearKey = props.savedPermutations[iInLoop][jInLoop]
          const savedPermutationsBear = props.bears[bearKey]
          savedPermutationsSeat.savedPermutationsBear = savedPermutationsBear
        } else {
          savedPermutationsSeat.savedPermutationsBear = null
        }
        savedPermutationsSeats.push( savedPermutationsSeat )
      }
      savedPermutationsSofa.savedPermutationsSeats = savedPermutationsSeats
      savedPermutationsSofas.push( savedPermutationsSofa )
    }
  } else {
    return (
      <div></div>
    )
  }

  return (
    <SavedPermutationsSofaList savedPermutationsSofas={ savedPermutationsSofas } />
  )
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  bears: PropTypes.object.isRequired
}

export default SavedPermutations

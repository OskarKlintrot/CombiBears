import React, { PropTypes } from 'react'
import C from '../../constants'
import SavedPermutationsSofaList from './savedPermutationsSofaList'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    float: 'right',
    background: '#FFF'
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
      <div style={ styles.savedPermutations }></div>
    )
  }

  return (
    <div style={ styles.savedPermutations }>
      <SavedPermutationsSofaList savedPermutationsSofas={ savedPermutationsSofas } />
    </div>
  )
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  bears: PropTypes.object.isRequired
}

export default SavedPermutations

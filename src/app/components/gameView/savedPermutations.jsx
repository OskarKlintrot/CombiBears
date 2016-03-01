import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'

const SavedPermutations = ( props ) => {

  const styles = {

  }

  return (

    <div>
    </div>
  )
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,

  // Vet inte om denna behövs? Ska man kunna markera en permutation så att den laddas in i stora soffan i spelvyn?
  // Om den ska användas så skicka med aktuell permutations array: exempelvis ["0", null, "1", null]
  selectPermutation: PropTypes.func.isRequired
}

export default SavedPermutations

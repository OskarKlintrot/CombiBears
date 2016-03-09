import React, { PropTypes } from 'react'
import FoundPermutations from './foundPermutations'
import ShowAllPremutations from './showAll'

const FoundList = ( props ) => {
  const { showSolutions, savedPermutations, settings } = props
  return (
    <div>
      <div hidden={ showSolutions }>
        <FoundPermutations
          savedPermutations={ savedPermutations }
          settings={ settings }
        />
      </div>

      <div hidden={ !showSolutions }>
        <ShowAllPremutations
          savedPermutations={ savedPermutations }
          settings={ settings }
        />
      </div>
    </div>
  )
}

FoundList.propTypes = {
  showSolutions: PropTypes.bool.isRequired,
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default FoundList

import React from 'react'
import { connect } from 'react-redux'
import ResultList from './resultList'
import FoundList from './foundList'
import Buttons from './buttons'

const ResultView = ( props ) => {
  const { game, settings } = props
  return (
    <div>
      <Buttons/>
      <ResultList
        numberOfFoundPermutations={ game.savedPermutations.length }
        numberOfCorrectPermutations={ settings.correctCombinations.length }
      />
      <FoundList
        savedPermutations={ game.savedPermutations }
        settings={ settings }
        game={ game }
      />
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

export default connect( mapStateToProps )( ResultView )

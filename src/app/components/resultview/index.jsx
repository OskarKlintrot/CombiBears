import React from 'react'
import { connect } from 'react-redux'
import ResultList from './resultlist'
import FoundList from './foundlist'
import Buttons from './buttons'

const ResultView = ( props ) => {
  return (
    <div>
      <Buttons/>
      <ResultList
        NumberOfBearsFound={ props.game.savedPermutations }
        CorrectAnswers={ props.settings.correctCombinations }
      />
      <FoundList
        savedPermutations={ props.game.savedPermutations }
        settings={ props.settings }
        game={ props.game }
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

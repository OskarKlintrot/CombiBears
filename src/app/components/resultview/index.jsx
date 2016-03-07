import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import C from '../../constants'
import ResultList from './resultlist'
import FoundList from './foundlist'
import Buttons from './buttons'

class resultview extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {}
  }

  render()
  {
    return (
      <div>
        <Buttons/>
        <ResultList NumberOfBearsFound = { this.props.game.savedPermutations } CorrectAnswers = { this.props.settings.correctCombinations } />
        <FoundList  savedPermutations={ this.props.game.savedPermutations } settings={ this.props.settings }/>
      </div>
        )
  }
}

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

export default connect( mapStateToProps )( resultview )
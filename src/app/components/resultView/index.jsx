import React from 'react'
import { connect } from 'react-redux'
import ResultList from './resultList'
import FoundList from './foundList'
import Buttons from './buttons'

class ResultView extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      showSolutions: false
    }
  }
  onShowSolutions = () => {
    this.setState({ showSolutions: true })
  };

  render() {
    return (
      <div>
        <Buttons handleClick={ this.onShowSolutions } />
        <ResultList
          className='small-12 medium-9 medium-offset-1 columns'
          numberOfFoundPermutations={ this.props.game.savedPermutations.length }
          numberOfCorrectPermutations={ this.props.settings.correctCombinations.length }
        />
        <FoundList
          className='small-12 medium-10 medium-offset-1 columns'
          showSolutions={ this.state.showSolutions }
          savedPermutations={ this.props.game.savedPermutations }
          settings={ this.props.settings }
          game={ this.props.game }
        />
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

export default connect( mapStateToProps )( ResultView )

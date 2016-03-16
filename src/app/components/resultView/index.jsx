import React from 'react'
import C from '../../constants'
import { connect } from 'react-redux'
import ResultList from './resultList'
import Buttons from './buttons'
import FoundPermutations from './foundPermutations'

class ResultView extends React.Component {

  constructor( props ) {
    super( props )

    // Apply background filters
    document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: ' + C.BG_FILTER )

    this.state = {
      windowHeight: window.innerHeight
    }
  }

  componentDidMount() {
    // Bind 'this' to passed methods
    const handleOrientationChange = this.handleOrientationChange.bind( this )

    // When orientation is changed between landscape and portrait mode.
    window.addEventListener( 'orientationchange', handleOrientationChange, false )
  }

  handleOrientationChange() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  render() {

    const { game, settings } = this.props

    const styles = {
      height: this.state.windowHeight + 'px'
    }

    return (
      <div style={ styles }>
        <Buttons>
          <ResultList
            numberOfFoundPermutations={ game.savedPermutations.length }
            numberOfCorrectPermutations={ settings.correctCombinations.length }
          />
        </Buttons>
        <FoundPermutations
          className='small-12 medium-10 medium-offset-1 columns'
          savedPermutations={ game.savedPermutations }
          settings={ settings }
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

import React from 'react'
import C from '../../constants'
import { connect } from 'react-redux'
import ResultList from './resultList'
import Buttons from './buttons'
import FoundPermutations from './foundPermutations'
import Actions from '../../redux/actions/'

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
    this.boundHandleOrientationChange = this.handleOrientationChange.bind( this )

    // When orientation is changed between landscape and portrait mode.
    window.addEventListener( 'orientationchange', this.boundHandleOrientationChange, false )
    window.addEventListener( 'resize', this.boundHandleOrientationChange, false )
  }

  componentWillUnmount() {
    window.removeEventListener( 'orientationchange', this.boundHandleOrientationChange )
    window.removeEventListener( 'resize', this.boundHandleOrientationChange )
  }

  handleOrientationChange() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  render() {

    const { game, settings } = this.props

    const styles = {
      container: {
        height: this.state.windowHeight + 'px'
      }
    }

    const buttonsHeight = 170

    const foundPermutationsHeight = this.state.windowHeight - buttonsHeight

    return (
      <div style={ styles.container }>
        <Buttons
          saveLastSettings={ this.props.saveLastSettings }
          foundAll={ game.savedPermutations.length === settings.correctCombinations.length }
        >
          <ResultList
            numberOfFoundPermutations={ game.savedPermutations.length }
            numberOfCorrectPermutations={ settings.correctCombinations.length }
          />
        </Buttons>
        <FoundPermutations
          height={ foundPermutationsHeight }
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

const mapDispatchToProps = ( dispatch ) => {
  return {
    saveLastSettings: ( ) => {
      dispatch( Actions.saveLastSettings( ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ResultView )

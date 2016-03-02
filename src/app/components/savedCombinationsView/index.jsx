import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import C from '../../constants'
import SofaList from './sofaList'

const styles = {
  icon: {
    height: '100px'
  },

  iconRight: {
    height: '100px',
    float: 'right'
  },

  iconReturn: {
    position: 'absolute',
    marginTop: '200px'
  }
}

const SavedCombinationsView = ( props ) => {
  const sofas = []
  if ( props.game.savedPermutations !== null ) {
    let iInLoop = 0
    for ( iInLoop; iInLoop < props.game.savedPermutations.length; iInLoop += 1 ) {
      const seats = []
      const sofa = { id: iInLoop }
      for ( let jInLoop = 0; jInLoop < props.game.savedPermutations[iInLoop].length; jInLoop += 1 ) {
        const seat = { id: jInLoop }
        if ( props.game.savedPermutations[iInLoop][jInLoop] !== null ) {
          const bearKey = props.game.savedPermutations[iInLoop][jInLoop]
          const bear = props.settings.bears[bearKey]
          seat.bear = bear
        } else {
          seat.bear = null
        }
        seats.push( seat )
      }
      sofa.seats = seats
      sofas.push( sofa )
    }
  } else {
    return (
      <div></div>
    )
  }

  return (
    <div>
      <div>
        <h1>Sparade kombinationer</h1>
      </div>
      <div>
        <Link
          to={ C.ROUTES.START }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            style={ styles.icon }
          />
        </Link>
        <Link
          to={ C.ROUTES.RESULTS }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
            alt='Icon for showing result'
            style={ styles.iconRight }
          />
        </Link>
      </div>
      <div style={ styles.iconReturn }>
        <Link
          to={ C.ROUTES.GAME }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
            alt='Icon for returning to game view'
            style={ styles.icon }
          />
        </Link>
      </div>
      <SofaList sofas={ sofas } />
    </div>
  )
}

SavedCombinationsView.propTypes = { savedPermutations: PropTypes.array }

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

export default connect( mapStateToProps )( SavedCombinationsView )

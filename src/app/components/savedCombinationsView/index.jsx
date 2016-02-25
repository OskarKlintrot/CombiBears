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
  const bears = []
  for ( const bear in props.bears )
    bears.push( props.bears[bear] )

  const sofas = [{ id: 0, bears: bears }]

  return (
    <div>
      <div>
        <h1>Sparade kombinationer</h1>
      </div>
      <div>
        <Link
          to={ '/start' }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            style={ styles.icon }
          />
        </Link>
        <Link
          to={ '/results' }
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
          to={ '/game' }
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

SavedCombinationsView.propTypes = { correctCombinations: PropTypes.array }

const mapStateToProps = ( state ) => state.settings

export default connect( mapStateToProps )( SavedCombinationsView )

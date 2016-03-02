import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    overflow: 'scroll',
    float: 'right',
    background: '#FFF'
  },

  ulSofas: {
    listStyleType: 'none'
  }
}

const SavedPermutations = ( props ) => {

  const renderSofa = ( bearsOnSofa ) => {
    return (
      <BasicSofa
        scale={ 0.5 }
        numberOfSeats={ props.settings.numberOfSeats }
        settings={ props.settings }
        bearsOnSofa={ bearsOnSofa }
      />
    )
  }

  if ( props.savedPermutations !== null ) {
    return (
      <div style={ styles.savedPermutations }>
        {
            props.savedPermutations.map( ( bearsOnSofa ) =>
            renderSofa( bearsOnSofa )
          )
        }
      </div>
    )
  }
  return (
    <div style={ styles.savedPermutations }></div>
  )

}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default SavedPermutations

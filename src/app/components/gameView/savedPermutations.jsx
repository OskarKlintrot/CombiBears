import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: '#FFF'
  },

  ulSofas: {
    listStyleType: 'none',
    marginLeft: '0px'
  }
}

const SavedPermutations = ( props ) => {

  const renderSofa = ( bearsOnSofa, index ) => {
    return (
      <li key={ index }>
        <BasicSofa
          scale={ 0.7 }
          numberOfSeats={ props.settings.numberOfSeats }
          settings={ props.settings }
          bearsOnSofa={ bearsOnSofa }
        />
      </li>
    )
  }

  if ( props.savedPermutations !== null ) {
    return (
      <div style={ styles.savedPermutations }>
        <ul style={ styles.ulSofas }>
          {
            props.savedPermutations.map( ( bearsOnSofa, index ) =>
              renderSofa( bearsOnSofa, index )
              )
            }
        </ul>
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

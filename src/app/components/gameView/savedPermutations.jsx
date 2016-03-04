import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'

const styles = {
  icon: {
    width: '80px'
  },

  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: '#FFF'
  },

  ulSofas: {
    listStyleType: 'none',
    margin: 'auto',
    padding: '15px'
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
        <div style={ styles.iconReturn }>
          <img
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
            alt='Icon for expanding saved permutations list'
            style={ styles.icon }
            onClick={ () => {
              console.log( 'Test av onclick på pil' )
            } }
          />
        </div>
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

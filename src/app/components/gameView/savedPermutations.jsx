import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    float: 'right',
    background: '#FFF'
  },

  ulSofas: {
    listStyleType: 'none'
  }
}

const SavedPermutations = ( props ) => {
  const bearsOnSofaArray = []
  if ( props.savedPermutations !== null ) {
    let iInLoop = 0
    for ( iInLoop; iInLoop < props.savedPermutations.length; iInLoop += 1 ) {
      const bearsOnSofa = []
      for ( let jInLoop = 0; jInLoop < props.savedPermutations[iInLoop].length; jInLoop += 1 )
        bearsOnSofa.push( props.savedPermutations[iInLoop] )
      bearsOnSofa.id = iInLoop
      bearsOnSofaArray.push( bearsOnSofa )
    }
  } else {
    return (
      <div style={ styles.savedPermutations }></div>
    )
  }
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


  return (
    <div style={ styles.savedPermutations }>
      {
        bearsOnSofaArray.map( ( bearsOnSofa ) =>
          renderSofa( bearsOnSofa )
        )
      }
    </div>
  )
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default SavedPermutations

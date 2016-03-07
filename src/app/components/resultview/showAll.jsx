import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    margin: '361px 0px 0px 157px',
    position: 'fixed',
    width: '57%',
    height: '627px',
    overflow: 'auto',
    background: '#FFF',
    border: '6px solid black',
    borderRadius: '8px'
  },

  ulSofas: {
    margin: '33px -40px 40px 69px'
  },
  FoundPermutations: {
    display: 'inline',
    float:'left',
    width: '30%'
  }
}

const ShowAllPremutations = ( props ) => {

  const renderSofa = ( bearsOnSofa, index ) => {
    return (
      <li key={ index } style={ styles.FoundPermutations }>
        <BasicSofa
          scale={ 0.7 }
          numberOfSeats={ props.settings.numberOfSeats }
          settings={ props.settings }
          bearsOnSofa={ bearsOnSofa }
        />
      </li>
    )
  }

  if ( props.settings.correctCombinations.length > 0 ) {
    return (
      <div style={ styles.savedPermutations }>
        <ul style={ styles.ulSofas }>
          {
            props.settings.correctCombinations.map( ( bearsOnSofa, index ) =>
              renderSofa( bearsOnSofa, index )
            )
          }
        </ul>
      </div>
    )
  }

  return (
    <div style={ styles.savedPermutations }> <h1>error i showAll</h1></div>
  )

}

ShowAllPremutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default ShowAllPremutations

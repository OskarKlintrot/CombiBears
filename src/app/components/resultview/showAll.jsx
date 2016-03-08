import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa-v2'

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
    float: 'left',
    width: '30%'
  }
}

const ShowAllPermutations = ( props ) => {
  return (
    <div style={ styles.savedPermutations }>
      <ul style={ styles.ulSofas }>
      {
          props.settings.correctCombinations.map( ( bearsOnSofa, index ) =>
            ShowAllPermutations.renderSofa( bearsOnSofa, index, props )
          )
      }
      </ul>
    </div>
  )
}

ShowAllPermutations.renderSofa = ( bearsOnSofa, index, props ) => {
  return (
    <li
      key={ index }
      style={ styles.FoundPermutations }
    >
      <BasicSofa
        numberOfSeats={ props.settings.numberOfSeats }
        settings={ props.settings }
        bearsOnSofa={ bearsOnSofa }
      />
    </li>
  )
}

ShowAllPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default ShowAllPermutations

import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa-v2'
import styles from './shared/styles'

const ShowAllPermutations = ( props ) => {
  return (
    <div className='row'>
      <div
        className='small-12 columns'
        style={ styles.savedPermutations }
      >
        <ul
          className='row'
          style={ styles.ulSofas }
        >
        {
            props.settings.correctCombinations.map( ( bearsOnSofa, index ) =>
              ShowAllPermutations.renderSofa( bearsOnSofa, index, props )
            )
        }
        </ul>
      </div>
    </div>
  )
}

ShowAllPermutations.renderSofa = ( bearsOnSofa, index, props ) => {
  return (
    <li
      className='small-6 medium-4 large-3 columns'
      key={ index }
      style={ styles.permutation }
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

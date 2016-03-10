import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa-v2'
import styles from './shared/styles'

const notFoundPermutationsStyle = Object.assign(
  {},
  styles.permutation,
  {
    opacity: '0.1'
  }
)

const ShowFoundPermutations = ( props ) => {
  const correctCombos = props.settings.correctCombinations.map( ( element ) => JSON.stringify( element ) )
  const savedCombos = props.savedPermutations
      .map( ( element ) => JSON.stringify( element ) )
      .map( ( element ) => correctCombos.indexOf( element ) )
  console.log( savedCombos )
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
          props.settings.correctCombinations.map( ( bearsOnSofa, index ) => {
            const found = savedCombos.indexOf( index ) >= 0
            return ShowFoundPermutations.renderSofa( bearsOnSofa, index, found, props )
          })
        }
        </ul>
      </div>
    </div>
  )
}

ShowFoundPermutations.renderSofa = ( bearsOnSofa, index, found, props ) => {
  return (
    <li
      className='small-6 medium-4 large-3 columns'
      key={ index }
      style={ found ? styles.permutation : notFoundPermutationsStyle }
    >
      <BasicSofa
        numberOfSeats={ props.settings.numberOfSeats }
        settings={ props.settings }
        bearsOnSofa={ bearsOnSofa }
      />
    </li>
  )
}

ShowFoundPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default ShowFoundPermutations

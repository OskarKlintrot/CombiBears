import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa-v2'

const styles = {
  savedPermutations: {
    overflow: 'auto',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.5em solid rgb(250, 250, 240)',
    borderRadius: '0.3em',
    marginTop: '2em',
    paddingTop: '1em'
  },
  ulSofas: {
    margin: 0
  },
  permutation: {
    display: 'inline',
    float: 'left',
    width: '30%'
  }
}

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

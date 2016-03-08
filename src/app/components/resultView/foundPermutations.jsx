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

const notFoundPermutationsStyle = Object.assign(
  {},
  styles.permutation,
  {
    opacity: '0.1'
  }
)

const FoundPermutations = ( props ) => {
  const rows = []
  for ( let FoundLoop = 0; FoundLoop < props.savedPermutations.length; FoundLoop += 1 ) {
    for ( let AnswersLoop = 0; AnswersLoop < props.settings.correctCombinations.length; AnswersLoop += 1 ) {
      const test = JSON.stringify( props.savedPermutations[FoundLoop] ) === JSON.stringify( props.settings.correctCombinations[AnswersLoop] )

      if ( test )
        rows.push( props.savedPermutations[FoundLoop] )
    }
  }
  let numbers = 0
  for ( let NewArray = 0; NewArray < props.settings.correctCombinations.length; NewArray += 1 ) {
    if ( rows.length > NewArray )
      numbers += 1
    else
      rows.push( [0, 0] )
  }
  if ( rows.length > 0 ) {
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
              rows.map( ( bearsOnSofa, index ) =>
                FoundPermutations.renderSofa( bearsOnSofa, index, numbers, props )
              )
            }
          </ul>
        </div>
      </div>
    )
  }
  return (
    <div style={ styles.savedPermutations }> <h1>error in foundPermutations</h1></div>
  )
}

FoundPermutations.renderSofa = ( bearsOnSofa, index, numbers, props ) => {
  return (
    <li
      className='small-6 medium-4 large-3 columns'
      key={ index }
      style={ index < numbers ? styles.permutation : notFoundPermutationsStyle }
    >
      <BasicSofa
        numberOfSeats={ props.settings.numberOfSeats }
        settings={ props.settings }
        bearsOnSofa={ bearsOnSofa }
      />
    </li>
  )
}

FoundPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default FoundPermutations

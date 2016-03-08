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
  NotFoundPermutations: {
    opacity: '0.1',
    display: 'inline',
    float: 'left',
    width: '30%'
  },
  FoundPermutations: {
    display: 'inline',
    float: 'left',
    width: '30%'
  }
}

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
      <div style={ styles.savedPermutations }>
        <ul style={ styles.ulSofas }>
          {
            rows.map( ( bearsOnSofa, index ) =>
              FoundPermutations.renderSofa( bearsOnSofa, index, numbers, props )
            )
          }
        </ul>
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
      key={ index }
      style={ index < numbers ? styles.FoundPermutations : styles.NotFoundPermutations }
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

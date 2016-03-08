import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'
import { Link } from 'react-router'

const styles = {
  savedPermutations: {
    //margin: '277px 0px 0px 157px',
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
    float:'left',
    width: '30%'
  },
  FoundPermutations: {
    display: 'inline',
    float:'left',
    width: '30%'
  }
}

const FoundPermutations = ( props ) => {

  const renderSofa = ( bearsOnSofa, index, numers ) => {
    if ( index < numers ) {
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
    }else {
      return (
        <li key={ index } style={ styles.NotFoundPermutations }>
          <BasicSofa
            scale={ 0.7 }
            numberOfSeats={ props.settings.numberOfSeats }
            settings={ props.settings }
            bearsOnSofa={ bearsOnSofa }
          />
        </li>
      )
    }

  }

  let rows = []

  for ( let FoundLoop = 0; FoundLoop < props.savedPermutations.length; FoundLoop++ )
  {
    for ( let AnswersLoop = 0; AnswersLoop < props.settings.correctCombinations.length; AnswersLoop++ )
    {
      let test = JSON.stringify( props.savedPermutations[FoundLoop] ) === JSON.stringify( props.settings.correctCombinations[AnswersLoop] )

      if ( test )
        rows.push( props.savedPermutations[FoundLoop] )

    }
  }

  let numers = 0
  for ( let NewArray = 0; NewArray < props.settings.correctCombinations.length; NewArray++ )
  {
    if ( rows.length > NewArray )
      numers++
    else
      rows.push( [0,0] )
  }

  if ( rows.length > 0 ) {
    return (
      <div style={ styles.savedPermutations }>
        <ul style={ styles.ulSofas }>
          {
            rows.map( ( bearsOnSofa, index ) =>
              renderSofa( bearsOnSofa, index, numers )
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

FoundPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default FoundPermutations

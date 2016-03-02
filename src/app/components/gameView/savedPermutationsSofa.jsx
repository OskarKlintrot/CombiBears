import React from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa'

const styles = {
  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginLeft: '0px'
  },

  ulSofasLi: {
    display: 'inline-block'
  }
}

const SavedPermutationsSofa = ( props ) => {
  return (
    <li
      style={ styles.ulSofasLi }
    >
      <div>
        <ul style={ styles.ulBears }>
          { props.savedPermutationsSofa.savedPermutationsSeats.map( ( savedPermutationsSeat ) => {
            return (
              <li
                key={ savedPermutationsSeat.id }
              >
                <BasicSofa
                  key={ savedPermutationsSeat.id }
                  scale={ 0.5 }
                  bearsOnSofa={ props.savedPermutationsSeat }
                  settings={ props.settings }
                />
              </li>
            )
          }) }
        </ul>
      </div>
    </li>
  )
}

export default SavedPermutationsSofa

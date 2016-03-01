import React from 'react'
import C from '../../constants'
import SavedPermutationsSeat from './savedPermutationsSeat'

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

const getSofaProps = {
  getSeatCss: function( noOfTotalSeats ) {
    let seatWidth = ''
    const four = 4
    const three = 3
    if ( noOfTotalSeats === four )
      seatWidth = '25%'
    else if ( noOfTotalSeats === three )
      seatWidth = '33%'
    else
      seatWidth = '50%'
    return ({
      display: 'inline-block',
      marginLeft: '0px',
      width: seatWidth
    })
  },
  getSofaBackgroundImg: function( sofaLength ) {
    return ({
      backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS[sofaLength] + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      display: 'block'
    })
  }
}

const SavedPermutationsSofa = ( props ) => {
  return (
    <li
      style={ styles.ulSofasLi }
    >
      <div
        style={ getSofaProps.getSofaBackgroundImg( props.savedPermutationsSofa.savedPermutationsSeats.length ) }
      >
        <ul style={ styles.ulBears }>
          { props.savedPermutationsSofa.savedPermutationsSeats.map( ( savedPermutationsSeat ) => {
            return (
              <li
                key={ savedPermutationsSeat.id }
                style={ getSofaProps.getSeatCss( props.savedPermutationsSofa.savedPermutationsSeats.length ) }
              >
                <SavedPermutationsSeat
                  key={ savedPermutationsSeat.id }
                  savedPermutationsBear={ savedPermutationsSeat.savedPermutationsBear }
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

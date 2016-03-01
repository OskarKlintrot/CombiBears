import React from 'react'
import SavedPermutationsSofa from './savedPermutationsSofa'

const styles = {
  ulSofas: {
    listStyleType: 'none'
  }
}

const SavedPermutationsSofaList = ( props ) => {
  return (
    <div>
      <ul style={ styles.ulSofas }>
        { props.savedPermutationsSofas.map( ( savedPermutationsSofa ) => {
          return (
            <SavedPermutationsSofa
              key={ savedPermutationsSofa.id }
              savedPermutationsSofa={ savedPermutationsSofa }
            />
          )
        }) }
      </ul>
    </div>
  )
}

export default SavedPermutationsSofaList

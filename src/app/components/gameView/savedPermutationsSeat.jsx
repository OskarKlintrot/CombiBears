import React from 'react'
import BasicBear from '../shared/basicBear'

const savedPermutationsSeat = ( props ) => {
  if ( props.savedPermutationsBear !== null )
    return <BasicBear bear={ props.savedPermutationsBear }/>
  return <div></div>
}

export default savedPermutationsSeat

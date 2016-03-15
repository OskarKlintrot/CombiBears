export const addBear = ( array, color, position ) => {
  return [
    ...array.slice( 0, position ),
    array[position] = color,
    ...array.slice( position + 1 )
  ]
}

export const removeBear = ( array, position ) => {
  return [
    ...array.slice( 0, position ),
    array[position] = null,
    ...array.slice( position + 1 )
  ]
}

export const savePermutation = ( savedPermutations, permutation ) => {

  savedPermutations.unshift( permutation )

  return savedPermutations
}

export const moveAllBearsToStart = ( bearsOnSofa, bearsOnStart ) => {

  // Remove all null elements from arrays
  bearsOnStart = bearsOnStart.filter( ( elem ) => typeof elem === "string" )
  bearsOnSofa = bearsOnSofa.filter( ( elem ) => typeof elem === "string" )

  // Return combined array
  return bearsOnStart.concat( bearsOnSofa )
}

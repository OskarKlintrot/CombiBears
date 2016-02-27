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

  console.log( "savePermutation", permutation )

  savedPermutations.push( permutation )

  return savedPermutations
}

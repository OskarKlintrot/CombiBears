export const updateBear = ( bears, bearSrc, bearId ) => {
  // Fail-safe, checking if the color already exists on another bear
  for ( let bear = 0; bear < bears.length; bear += 1 ) {
    if ( bears[bear].src === bearSrc && bear !== bearId )
      // If it exists, don't change the state
      return bears
  }

  bears[bearId] = { src: bearSrc }

  return bears
}

export const deleteBear = ( bears, bearId ) => {
  let numberOfBears = 0

  for ( let bear = 0; bear < bears.length; bear += 1 ) {
    if ( bears[bear] !== null )
      numberOfBears += 1
  }

  if ( numberOfBears > 2 )
    bears[bearId] = null

  return bears
}

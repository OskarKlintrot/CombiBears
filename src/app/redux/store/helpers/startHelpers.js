const getObjectKeyLength = ( obj ) => {
  let length = 0
  for ( const key in obj ) {
    if ( obj.hasOwnProperty( key ) )
      length += 1
  }
  return length
}

export const updateBear = ( bears, bearSrc, bearId ) => {
  // Fail-safe, checking if the color already exists on another bear
  const bearsLength = getObjectKeyLength( bears )
  for ( let bear = 0; bear < bearsLength; bear += 1 ) {
    if ( bears[bear] !== null && bears[bear].src === bearSrc && bear !== bearId )
      // If it exists, don't change the state
      return bears
  }

  bears[bearId] = { src: bearSrc }

  return bears
}

export const deleteBear = ( bears, bearId ) => {
  let numberOfBears = 0

  const bearsLength = getObjectKeyLength( bears )
  for ( let bear = 0; bear < bearsLength; bear += 1 ) {
    if ( bears[bear] !== null )
      numberOfBears += 1
  }

  if ( numberOfBears > 2 )
    bears[bearId] = null

  return bears
}

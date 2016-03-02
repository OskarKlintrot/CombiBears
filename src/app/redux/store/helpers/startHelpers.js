import C from "../../../constants"

const getObjectKeyLength = ( obj ) => {
  let length = 0
  for ( const key in obj ) {
    if ( obj.hasOwnProperty( key ) )
      length += 1
  }
  return length
}

export const updateBear = ( bears, bear ) => {
  // Fail-safe, checking if the color already exists on another bear
  const bearsLength = getObjectKeyLength( bears )
  for ( let counter = 0; counter < bearsLength; counter += 1 ) {
    if ( bears[counter] !== null && bears[counter].src === bear.src && counter !== bear.id )
      // If it exists, don't change the state
      return bears
  }

  bears[bear.id] = {
    color: bear.color,
    src: bear.src
  }

  return bears
}

export const deleteBear = ( bears, bearId ) => {
  let numberOfBears = 0

  const bearsLength = getObjectKeyLength( bears )
  for ( let bear = 0; bear < bearsLength; bear += 1 ) {
    if ( bears[bear] !== null )
      numberOfBears += 1
  }

  if ( numberOfBears > 2 ) {
    bears[bearId] = {
      color: C.BEAR_TO_IGNORE,
      src: C.SRC_TO_IMAGES.BEARS[C.BEAR_TO_IGNORE]
    }
  }

  return bears
}

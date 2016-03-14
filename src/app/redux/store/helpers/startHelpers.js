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
    if ( bears[bear].color !== C.BEAR_TO_IGNORE )
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

export const randomizeMissingBear = ( bears, newBearId ) => {
  const randomBearNumber = () => {
    const maxBear = Object.keys( C.COLORS_ENUM ).length - 1
    let random
    let foundUnique = true
    const bearsLength = getObjectKeyLength( bears )
    do {
      random = Math.floor( ( Math.random() * maxBear ) + 0 )
      foundUnique = true
      for ( let counter = 0; counter < bearsLength; counter += 1 ) {
        if ( C.COLORS_ENUM[random] === bears[counter].color ) {
          foundUnique = false
          break
        }
      }
    } while ( !foundUnique )
    return random
  }

  const bearColor = randomBearNumber()

  bears[newBearId] = {
    color: C.COLORS_ENUM[bearColor],
    src: C.SRC_TO_IMAGES.BEARS[C.COLORS_ENUM[bearColor]]
  }

  return bears
}

export const removeBear = ( bears, removeBearId ) => {
  bears[removeBearId] = {
    color: C.BEAR_TO_IGNORE,
    src: C.SRC_TO_IMAGES.BEARS[C.BEAR_TO_IGNORE]
  }

  return bears
}

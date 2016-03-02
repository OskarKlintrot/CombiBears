import C from "../../../constants"

export const numberOfBears = ( bears ) => {
  let counter = 0
  for ( const bear in bears ) {
    if ( bears.hasOwnProperty( bear ) ) {
      if ( bears[bear].color !== C.BEAR_TO_IGNORE )
        counter += 1
    }
  }
  return counter
}

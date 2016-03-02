import C from '../../constants'

const randomBearNumber = ( exception ) => {
  const maxBear = 8
  let random
  do
    random = Math.floor( ( Math.random() * maxBear ) + 0 )
  while ( random === exception )
  return random
}

const firstBear = randomBearNumber()
const secondBear = randomBearNumber( firstBear )

const InitialState = () => {
  return {
    settings: {
      numberOfSeats: 2,
      bears: {
        0: {
          src: C.SRC_TO_IMAGES.BEARS[C.COLORS_ENUM[firstBear]]
        },
        1: {
          src: C.SRC_TO_IMAGES.BEARS[C.COLORS_ENUM[secondBear]]
        },
        2: null,
        3: null
      },
      correctCombinations: null
    },
    game: {
      savedPermutations: [],
      bearsOnSofa: null,
      bearsOnStart: null
    }
  }
}

export default InitialState

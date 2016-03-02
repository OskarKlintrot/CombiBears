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
          color: C.COLORS_ENUM[firstBear],
          src: C.SRC_TO_IMAGES.BEARS[C.COLORS_ENUM[firstBear]]
        },
        1: {
          color: C.COLORS_ENUM[secondBear],
          src: C.SRC_TO_IMAGES.BEARS[C.COLORS_ENUM[secondBear]]
        },
        2: {
          color: C.COLORS.WHITE,
          src: C.SRC_TO_IMAGES.BEARS.WHITE
        },
        3: {
          color: C.COLORS.WHITE,
          src: C.SRC_TO_IMAGES.BEARS.WHITE
        }
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

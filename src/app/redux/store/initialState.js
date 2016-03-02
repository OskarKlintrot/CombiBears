import C from '../../constants'

const randomBearNumber = ( exception ) => {
  const maxBear = Object.keys( C.COLORS_ENUM ).length - 1
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
          color: C.COLORS.PLACEHOLDER,
          src: C.SRC_TO_IMAGES.BEARS.PLACEHOLDER
        },
        3: {
          color: C.COLORS.PLACEHOLDER,
          src: C.SRC_TO_IMAGES.BEARS.PLACEHOLDER
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

import C from '../../constants'

const InitialState = () => {
  return {
    settings: {
      numberOfSeats: 2,
      bears: {
        0: {
          src: C.SRC_TO_IMAGES.BEARS.BLUE
        },
        1: {
          src: C.SRC_TO_IMAGES.BEARS.GREEN
        },
        2: null,
        3: null
      },
      correctCombinations: null
    },
    game: {
      // bearsOnSofa: [null, null, C.COLORS.BLUE, C.COLORS.GREEN],
      // bearsOnStart: [C.COLORS.ORANGE],

      savedPermutations: [],
      currentCombination: {
        bearsOnSofa: [null, null, C.COLORS.BLUE, C.COLORS.GREEN],
        bearsOnStart: [C.COLORS.ORANGE, null, null, null]
      }
    }
  }
}

export default InitialState

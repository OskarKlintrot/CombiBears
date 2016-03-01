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
      savedPermutations: [],
      bearsOnSofa: [null, null, null, null],
      bearsOnStart: ["0", "1", null, null]
    }
  }
}

export default InitialState

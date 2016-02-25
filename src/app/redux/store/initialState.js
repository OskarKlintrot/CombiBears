import C from '../../constants'

const InitialState = () => {
  return {
    settings: {
      numberOfSeats: 2,
      bears: {
        0: {
          id: 0,
          src: C.SRC_TO_IMAGES.BEARS.BLUE
        },
        1: {
          id: 1,
          src: C.SRC_TO_IMAGES.BEARS.GREEN
        },
        2: {
          id: 2,
          src: null
        },
        3: {
          id: 3,
          src: null
        }
      },
      correctCombinations: null
    },
    game: {
      bearsOnSofa: [null, null, C.COLORS.BLUE, C.COLORS.GREEN],
      bearsOnStart: [C.COLORS.ORANGE]
    }
  }
}

export default InitialState

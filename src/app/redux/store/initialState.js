const InitialState = () => {
  return {
    settings: {
      numberOfSeats: 2,
      bears: {
        0: null,
        1: null,
        2: null,
        3: null
      },
      correctCombinations: null
    },
    game: {
      bearsOnSofa: [null, null, "BLUE", "GREEN"],
      bearsOnStart: ["ORANGE"]
    }
  }
}

export default InitialState

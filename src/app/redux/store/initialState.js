const InitialState = () => {
  return {
    // Your initial state goes here
    app: {
      user: "World"
    },
    settings: {
      numberOfSeats: 2,
      bears: {
        0: null,
        1: null,
        2: null,
        3: null
      }
    }
  }
}

export default InitialState

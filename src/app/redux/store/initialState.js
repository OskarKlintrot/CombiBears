const InitialState = () => {
  return {
    // Your initial state goes here
    app: {
      user: "World"
    },
    settings: {
      numberOfSeats: 2
    },
    combination: {
      bearsOnSofa: [null, null, "blue", "green"],
      bearsOnStart: ["orange"]
    }

  }
}

export default InitialState

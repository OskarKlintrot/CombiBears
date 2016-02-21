import ActionTypes from "./actionTypes"

const {
  RESET_GAME,
  ADD_BEAR,
  REMOVE_BEAR
} = ActionTypes

const GameActions = {
  resetCombination: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_GAME
      })
    }
  },
  addBear: ( color, position ) => {
    return ( dispatch ) => {
      dispatch({
        type: ADD_BEAR,
        color: color,
        position: position
      })
    }
  },
  removeBear: ( position ) => {
    return ( dispatch ) => {
      dispatch({
        type: REMOVE_BEAR,
        position: position
      })
    }
  }
}

export default GameActions

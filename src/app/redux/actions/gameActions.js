import ActionTypes from "./actionTypes"

const {
  RESET_PERMUTATION,
  ADD_BEAR_TO_SOFA,
  ADD_BEAR_TO_START,
  REMOVE_BEAR_FROM_SOFA,
  REMOVE_BEAR_FROM_START,
  SAVE_PERMUTATION
} = ActionTypes

const GameActions = {
  resetPermutation: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_PERMUTATION
      })
    }
  },

  addBearToSofa: ( color, position ) => {
    return ( dispatch ) => {
      dispatch({
        type: ADD_BEAR_TO_SOFA,
        color: color,
        position: position
      })
    }
  },

  addBearToStart: ( color, position ) => {
    return ( dispatch ) => {
      dispatch({
        type: ADD_BEAR_TO_START,
        color: color,
        position: position
      })
    }
  },

  removeBearFromSofa: ( position ) => {
    return ( dispatch ) => {
      dispatch({
        type: REMOVE_BEAR_FROM_SOFA,
        position: position
      })
    }
  },

  removeBearFromStart: ( position ) => {
    return ( dispatch ) => {
      dispatch({
        type: REMOVE_BEAR_FROM_START,
        position: position
      })
    }
  },

  savePermutation: ( permutation ) => {
    return ( dispatch ) => {
      dispatch({
        type: SAVE_PERMUTATION,
        permutation: permutation
      })
    }
  }
}

export default GameActions

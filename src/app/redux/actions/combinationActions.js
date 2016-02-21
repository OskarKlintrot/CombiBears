import ActionTypes from "./actionTypes"

const {
  RESET_COMBINATION,
  ADD_BEAR,
  REMOVE_BEAR
	// Write down the actions you want to use here
} = ActionTypes

const CombinationActions = {
  resetCombination: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_COMBINATION
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

export default CombinationActions

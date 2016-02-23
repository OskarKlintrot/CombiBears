import ActionTypes from "./actionTypes"
import C from "../../constants"

const {
	RESET_SETTINGS,
  INCREASE_NUMBER_OF_SEATS,
  DECREASE_NUMBER_OF_SEATS,
  START_GAME
} = ActionTypes

const SettingsActions = {
  resetSettings: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_SETTINGS
      })
    }
  },
  increaseNumberOfSeats: () => {
    return ( dispatch ) => {
      dispatch({
        type: INCREASE_NUMBER_OF_SEATS
      })
    }
  },
  decreaseNumberOfSeats: () => {
    return ( dispatch ) => {
      dispatch({
        type: DECREASE_NUMBER_OF_SEATS
      })
    }
  },
  startGame: () => {
    return ( dispatch ) => {
      dispatch({
        type: START_GAME,
        meta: {
          transition: () => ({
            path: C.ROUTES.GAME
          })
        }
      })
    }
  }
}

export default SettingsActions

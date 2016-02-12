import ActionTypes from "./actionTypes"

const {
	RESET_SETTINGS,
  SET_NUMBER_OF_SEATS
	// Write down the actions you want to use here
} = ActionTypes

const SettingsActions = {
  resetSettings: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_SETTINGS
      })
    }
  },
  setNumberOfSeats: ( numberOfSeats ) => {
    return ( dispatch ) => {
      dispatch({
        type: SET_NUMBER_OF_SEATS,
        numberOfSeats: numberOfSeats
      })
    }
  }
}

export default SettingsActions

import ActionTypes from "./actionTypes"

const {
	RESET
	// Write down the actions you want to use here
} = ActionTypes

const SettingsActions = {
  resetSettings: () => {
    return ( dispatch ) => {
      dispatch( {
        type: RESET
      } )
    }
  }
}

export default SettingsActions

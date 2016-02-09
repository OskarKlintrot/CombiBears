import ActionTypes from "./actionTypes"

const {
	RESET,
	SET_USER
	// Write down the actions you want to use here
} = ActionTypes

/* If you need to access the current state use this:
 * return ( dispatch, getState ) => {
 */

const AppActions = {
  resetApp: () => {
    return ( dispatch ) => {
      setTimeout( () => {
        dispatch( {
          type: RESET
        } )
      }, 1000 )
    }
  },
  setUser: ( user ) => {
    return ( dispatch ) => {
      dispatch( {
        type: SET_USER,
        user: user
      } )
    }
  }
}

export default AppActions

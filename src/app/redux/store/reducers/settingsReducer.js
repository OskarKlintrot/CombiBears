import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const {
  RESET_SETTINGS,
  SET_NUMBER_OF_SEATS
  // Write down the actions you want to use here
} = ActionTypesSettings

const SettingsReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_SETTINGS:
    return new InitialState().settings
  case SET_NUMBER_OF_SEATS:
    return {
      ...state,
      numberOfSeats: action.numberOfSeats <= 2 ? 2 : action.numberOfSeats
    }
  default:
    return state || new InitialState().settings
  }
}

export default SettingsReducer

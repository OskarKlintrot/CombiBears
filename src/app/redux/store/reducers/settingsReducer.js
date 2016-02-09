import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const {
  RESET
  // Write down the actions you want to use here
} = ActionTypesSettings

const SettingsReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET:
    return new InitialState().settings
  default:
    return state || new InitialState().settings
  }
}

export default SettingsReducer

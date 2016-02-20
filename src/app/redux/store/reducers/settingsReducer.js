import Combinatorics from 'js-combinatorics'
import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const {
  RESET_SETTINGS,
  INCREASE_NUMBER_OF_SEATS,
  DECREASE_NUMBER_OF_SEATS,
  START_GAME
  // Write down the actions you want to use here
} = ActionTypesSettings

const maxSeats = 4
const minSeats = 2

const SettingsReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_SETTINGS:
    return new InitialState().settings
  case INCREASE_NUMBER_OF_SEATS:
    return {
      ...state,
      numberOfSeats: state.numberOfSeats + 1 > maxSeats ? minSeats : state.numberOfSeats + 1
    }
  case DECREASE_NUMBER_OF_SEATS:
    return {
      ...state,
      numberOfSeats: state.numberOfSeats - 1 < minSeats ? maxSeats : state.numberOfSeats - 1
    }
  case START_GAME:
    return {
      ...state,
      correctCombinations: Combinatorics.permutation(
        Object.keys( state.bears ).filter( ( key ) => state.bears[key] ),
        state.numberOfSeats
      ).toArray()
    }
  default:
    return state || new InitialState().settings
  }
}

export default SettingsReducer

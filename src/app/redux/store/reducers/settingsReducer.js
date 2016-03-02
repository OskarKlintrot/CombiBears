import Combinatorics from 'js-combinatorics'
import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'
import { updateBear, deleteBear } from '../helpers/startHelpers'

const getBearsFromObject = ( obj, seats ) => {
  const filtered = Object.keys( obj ).filter( ( key ) => obj[key] )
  const fill = seats - filtered.length > 0 ? Array(
    ...Array( seats - filtered.length )
  ).map( () => null ) : []
  return filtered.concat( fill )
}

const {
  RESET_SETTINGS,
  INCREASE_NUMBER_OF_SEATS,
  DECREASE_NUMBER_OF_SEATS,
  UPDATE_BEAR,
  DELETE_BEAR,
  START_GAME
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
  case UPDATE_BEAR:
    return {
      ...state,
      bears: Object.assign({}, updateBear( state.bears, action.bear ) )
    }
  case DELETE_BEAR:
    return {
      ...state,
      bears: Object.assign({}, deleteBear( state.bears, action.bearId ) )
    }
  case START_GAME:
    return {
      ...state,
      correctCombinations: Combinatorics.permutation(
        getBearsFromObject( state.bears, state.numberOfSeats ),
        state.numberOfSeats
      )
      .toArray()
      .map( ( item ) => JSON.stringify( item ) )  // Converting all arrays
      .filter( ( elem, index, arr ) =>            // to JSON for comparsion
        arr.indexOf( elem ) === index             // might be a bit "quick
      )                                           // and dirty" but it's close
      .map( ( item ) => JSON.parse( item ) )      // enough for our purposes
    }
  default:
    return state || new InitialState().settings
  }
}

export default SettingsReducer

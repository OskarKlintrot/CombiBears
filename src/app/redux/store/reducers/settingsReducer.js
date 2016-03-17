import Combinatorics from 'js-combinatorics'
import InitialState from '../initialState'
import C from '../../../constants.js'
import { ActionTypesSettings } from '../../actions/actionTypes'
import { updateBear, deleteBear, randomizeMissingBear, removeBear } from '../helpers/startHelpers'

const getBearsFromObject = ( obj, seats ) => {
  const filtered = Object.keys( obj ).filter( ( key ) => obj[key].color !== C.BEAR_TO_IGNORE )
  const fill = seats - filtered.length > 0 ? Array(
    ...Array( seats - filtered.length )
  ).map( () => null ) : []
  return filtered.concat( fill )
}

const {
  RESET_SETTINGS,
  INCREASE_NUMBER_OF_SEATS,
  DECREASE_NUMBER_OF_SEATS,
  INCREASE_NUMBER_OF_BEARS,
  DECREASE_NUMBER_OF_BEARS,
  UPDATE_BEAR,
  DELETE_BEAR,
  START_GAME
} = ActionTypesSettings

const maxSeats = 4
const minSeats = 2
const maxBears = 4
const minBears = 2

const SettingsReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_SETTINGS:
    return new InitialState().settings
  case INCREASE_NUMBER_OF_SEATS:
    return {
      ...state,
      numberOfSeats: state.numberOfSeats + 1 > maxSeats ? state.numberOfSeats : state.numberOfSeats + 1
    }
  case DECREASE_NUMBER_OF_SEATS:
    return {
      ...state,
      numberOfSeats: state.numberOfSeats - 1 < minSeats ? state.numberOfSeats : state.numberOfSeats - 1
    }
  case INCREASE_NUMBER_OF_BEARS:
    return {
      ...state,
      numberOfBears: state.numberOfBears + 1 > maxBears ? state.numberOfBears : state.numberOfBears + 1,
      bears: Object.assign({}, randomizeMissingBear( state.bears, state.numberOfBears ) ),
      bounceBearsAnimation1: !state.bounceBearsAnimation1
    }
  case DECREASE_NUMBER_OF_BEARS:
    return {
      ...state,
      numberOfBears: state.numberOfBears - 1 < minBears ? state.numberOfBears : state.numberOfBears - 1,
      bears: Object.assign({}, removeBear( state.bears, state.numberOfBears - 1 ) ),
      bounceBearsAnimation1: !state.bounceBearsAnimation1
    }
  case UPDATE_BEAR:
    return {
      ...state,
      bears: Object.assign({}, updateBear( state.bears, action.bear ) ),
      bounceBears: false
    }
  case DELETE_BEAR:
    return {
      ...state,
      bears: Object.assign({}, deleteBear( state.bears, action.bearId ) )
    }
  case START_GAME:
    return {
      ...state,
      bounceBears: true,
      correctCombinations: Combinatorics.permutation(
        getBearsFromObject(
          state.bears,
          state.numberOfSeats,
        ),
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

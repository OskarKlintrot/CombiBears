import InitialState from '../initialState'
import { ActionTypesCombination } from '../../actions/actionTypes'

const {
  RESET_COMBINATION,
  ADD_BEAR,
  REMOVE_BEAR
  // Write down the actions you want to use here
} = ActionTypesCombination

const addBear = ( array, color, position ) => {
  return [
    ...array.slice( 0, position ),
    array[position] = color,
    ...array.slice( position + 1 )
  ]
}

const removeBear = ( array, position ) => {
  return [
    ...array.slice( 0, position ),
    array[position] = null,
    ...array.slice( position + 1 )
  ]
}

const CombinationReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_COMBINATION:
    return new InitialState().combination
  case ADD_BEAR:
    return {
      ...state,
      bearsOnSofa: addBear( state.bearsOnSofa, action.color, action.position )
    }
  case REMOVE_BEAR:
    return {
      ...state,
      bearsOnStart: removeBear( state.bearsOnStart, action.position )
    }
  default:
    return state || new InitialState().app
  }
}


export default CombinationReducer

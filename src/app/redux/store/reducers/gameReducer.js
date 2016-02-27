import InitialState from '../initialState'
import { addBear, removeBear } from '../helpers/gameHelpers'
import { ActionTypesGame } from '../../actions/actionTypes'

const {
  RESET_GAME,
  ADD_BEAR,
  REMOVE_BEAR
} = ActionTypesGame

const CombinationReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_GAME:
    return new InitialState().game
  case ADD_BEAR:
    return {
      ...state,
      bearsOnSofa: addBear( state.currentCombination.bearsOnSofa, action.color, action.position )
    }
  case REMOVE_BEAR:
    return {
      ...state,
      bearsOnStart: removeBear( state.currentCombination.bearsOnStart, action.position )
    }
  default:
    return state || new InitialState().game
  }
}

export default CombinationReducer

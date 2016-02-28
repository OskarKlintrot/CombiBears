import InitialState from '../initialState'
import { addBear, removeBear, savePermutation } from '../helpers/gameHelpers'
import { ActionTypesGame } from '../../actions/actionTypes'

const {
  RESET_GAME,
  ADD_BEAR,
  REMOVE_BEAR,

  ADD_BEAR_TO_SOFA,
  ADD_BEAR_TO_START,
  REMOVE_BEAR_FROM_SOFA,
  REMOVE_BEAR_FROM_START,

  SAVE_PERMUTATION

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

  case ADD_BEAR_TO_SOFA:
    return {
      ...state,
      bearsOnSofa: addBear( state.currentCombination.bearsOnSofa, action.color, action.position )
    }
  case REMOVE_BEAR_FROM_SOFA:
    return {
      ...state,
      bearsOnSofa: removeBear( state.currentCombination.bearsOnSofa, action.position )
    }
  case ADD_BEAR_TO_START:
    return {
      ...state,
      bearsOnStart: addBear( state.currentCombination.bearsOnStart, action.color, action.position )
    }
  case REMOVE_BEAR_FROM_START:
    return {
      ...state,
      bearsOnStart: removeBear( state.currentCombination.bearsOnStart, action.position )
    }

  case SAVE_PERMUTATION:
    return {
      ...state,
      savedPermutations: savePermutation( state.savedPermutations, action.permutation )
    }

  default:
    return state || new InitialState().game
  }
}

export default CombinationReducer

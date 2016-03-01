import InitialState from '../initialState'
import { addBear, removeBear, savePermutation, moveAllBearsToStart } from '../helpers/gameHelpers'
import { ActionTypesGame } from '../../actions/actionTypes'

const {
  RESET_PERMUTATION,
  ADD_BEAR_TO_SOFA,
  ADD_BEAR_TO_START,
  REMOVE_BEAR_FROM_SOFA,
  REMOVE_BEAR_FROM_START,
  SAVE_PERMUTATION

} = ActionTypesGame

const CombinationReducer = ( state, action ) => {
  switch ( action.type ) {
  case RESET_PERMUTATION:

    return {
      ...state,
      bearsOnStart: moveAllBearsToStart( state.bearsOnSofa, state.bearsOnStart ),
      bearsOnSofa: state.bearsOnSofa.map( () => null )
    }

  case ADD_BEAR_TO_SOFA:
    return {
      ...state,
      bearsOnSofa: addBear( state.bearsOnSofa, action.color, action.position )
    }
  case REMOVE_BEAR_FROM_SOFA:
    return {
      ...state,
      bearsOnSofa: removeBear( state.bearsOnSofa, action.position )
    }
  case ADD_BEAR_TO_START:
    return {
      ...state,
      bearsOnStart: addBear( state.bearsOnStart, action.color, action.position )
    }
  case REMOVE_BEAR_FROM_START:
    return {
      ...state,
      bearsOnStart: removeBear( state.bearsOnStart, action.position )
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

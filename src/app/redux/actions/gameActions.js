import ActionTypes from "./actionTypes"
import { shuffleArray } from "./helpers/gameActionHelpers"
import C from '../../constants'

const {
  RESET_GAME,
  RESET_PERMUTATION,
  ADD_BEAR_TO_SOFA,
  ADD_BEAR_TO_START,
  REMOVE_BEAR_FROM_SOFA,
  REMOVE_BEAR_FROM_START,
  SAVE_PERMUTATION,
  INIT_BEARS,
  INIT_SOFA,
  REDIRECT_TO_RESULT_VIEW // Lägg till!
} = ActionTypes

const GameActions = {
  resetGame: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_GAME
      })
    }
  },
  resetPermutation: () => {
    return ( dispatch ) => {
      dispatch({
        type: RESET_PERMUTATION
      })
    }
  },
  addBearToSofa: ( color, position ) => {
    return ( dispatch ) => {
      dispatch({
        type: ADD_BEAR_TO_SOFA,
        color: color,
        position: position
      })
    }
  },
  addBearToStart: ( color, position ) => {
    return ( dispatch ) => {
      dispatch({
        type: ADD_BEAR_TO_START,
        color: color,
        position: position
      })
    }
  },
  removeBearFromSofa: ( position ) => {
    return ( dispatch ) => {
      dispatch({
        type: REMOVE_BEAR_FROM_SOFA,
        position: position
      })
    }
  },
  removeBearFromStart: ( position ) => {
    return ( dispatch ) => {
      dispatch({
        type: REMOVE_BEAR_FROM_START,
        position: position
      })
    }
  },
  savePermutation: ( permutation ) => {
    return ( dispatch ) => {
      dispatch({
        type: SAVE_PERMUTATION,
        permutation: permutation
      })
    }
  },
  initBears: () => {
    return ( dispatch, getState ) => {
      const bears = []
      for ( const bear in getState().settings.bears ) {
        if ( getState().settings.bears[bear].color !== C.BEAR_TO_IGNORE )
          bears.push( bear )
      }
      dispatch({
        type: INIT_BEARS,
        bearsOnStart: shuffleArray( bears )
      })
    }
  },
  initSofa: () => {
    return ( dispatch, getState ) => {
      dispatch({
        type: INIT_SOFA,
        numberOfSeats: getState().settings.numberOfSeats
      })
    }
  },

  // Vi har lagt till härifrån...
  redirectToResultView: () => {
    return ( dispatch ) => {
      dispatch({
        type: REDIRECT_TO_RESULT_VIEW,
        meta: {
          transition: () => ({
            path: C.ROUTES.RESULTS
          })
        }
      })
    }
  }
}

export default GameActions

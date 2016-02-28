const Game = {
  RESET_GAME: 'RESET_GAME',
  ADD_BEAR: 'ADD_BEAR',
  REMOVE_BEAR: 'REMOVE_BEAR',

  ADD_BEAR_TO_SOFA: 'ADD_BEAR_TO_SOFA',
  ADD_BEAR_TO_START: 'ADD_BEAR_TO_START',
  REMOVE_BEAR_FROM_SOFA: 'REMOVE_BEAR_FROM_SOFA',
  REMOVE_BEAR_FROM_START: 'REMOVE_BEAR_FROM_START',

  SAVE_PERMUTATION: 'SAVE_PERMUTATION'
}

const Settings = {
  RESET_SETTINGS: 'RESET_SETTINGS',
  INCREASE_NUMBER_OF_SEATS: 'INCREASE_NUMBER_OF_SEATS',
  DECREASE_NUMBER_OF_SEATS: 'DECREASE_NUMBER_OF_SEATS',
  UPDATE_BEAR: 'UPDATE_BEAR',
  DELETE_BEAR: 'DELETE_BEAR',
  START_GAME: 'START_GAME'
}

const ActionTypes = Object.assign({}, Game, Settings )

export const ActionTypesGame = Object.freeze( Game )
export const ActionTypesSettings = Object.freeze( Settings )
export default Object.freeze( ActionTypes )

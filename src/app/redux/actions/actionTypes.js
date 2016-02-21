const Game = {
  RESET_GAME: 'RESET_GAME',
  ADD_BEAR: 'ADD_BEAR',
  REMOVE_BEAR: 'REMOVE_BEAR'
}

const Settings = {
  RESET_SETTINGS: 'RESET_SETTINGS',
  INCREASE_NUMBER_OF_SEATS: 'INCREASE_NUMBER_OF_SEATS',
  DECREASE_NUMBER_OF_SEATS: 'DECREASE_NUMBER_OF_SEATS',
  START_GAME: 'START_GAME'
}

const ActionTypes = Object.assign({}, Game, Settings )

export const ActionTypesGame = Object.freeze( Game )
export const ActionTypesSettings = Object.freeze( Settings )
export default Object.freeze( ActionTypes )

const App = {
  RESET: 'RESET',
  SET_USER: 'SET_USER'
  // You can have several objects here...
}

const Settings = {
  RESET_SETTINGS: 'RESET_SETTINGS',
  INCREASE_NUMBER_OF_SEATS: 'INCREASE_NUMBER_OF_SEATS',
  DECREASE_NUMBER_OF_SEATS: 'DECREASE_NUMBER_OF_SEATS',
  START_GAME: 'START_GAME'
  // ...just to increase code readability
}

const Combination = {
  RESET_COMBINATION: 'RESET_COMBINATION',
  ADD_BEAR: 'ADD_BEAR',
  REMOVE_BEAR: 'REMOVE_BEAR'
  // ...just to increase code readability
}

const ActionTypes = Object.assign({}, App, Settings, Combination )

export const ActionTypesApp = Object.freeze( App )
export const ActionTypesSettings = Object.freeze( Settings )
export const ActionTypesCombination = Object.freeze( Combination )
export default Object.freeze( ActionTypes )

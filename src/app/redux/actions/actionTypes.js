const App = {
  RESET: 'RESET',
  SET_USER: 'SET_USER'
  // You can have several objects here...
}

const Settings = {
  RESET_SETTINGS: 'RESET_SETTINGS',
  INCREASE_NUMBER_OF_SEATS: 'INCREASE_NUMBER_OF_SEATS',
  DECREASE_NUMBER_OF_SEATS: 'DECREASE_NUMBER_OF_SEATS'
  // ...just to increase code readability
}

const ActionTypes = Object.assign({}, App, Settings )

export const ActionTypesApp = Object.freeze( App )
export const ActionTypesSettings = Object.freeze( Settings )
export default Object.freeze( ActionTypes )

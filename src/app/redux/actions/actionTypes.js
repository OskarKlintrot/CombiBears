export const ActionTypesApp = {
  RESET: 'RESET',
  SET_USER: 'SET_USER'
  // You can have several objects here...
}

export const ActionTypesSettings = {
  RESET_SETTINGS: 'RESET_SETTINGS',
  SET_NUMBER_OF_SEATS: 'SET_NUMBER_OF_SEATS'
  // ...just to increase code readability
}

const ActionTypes = Object.assign({}, ActionTypesApp, ActionTypesSettings )

export default ActionTypes

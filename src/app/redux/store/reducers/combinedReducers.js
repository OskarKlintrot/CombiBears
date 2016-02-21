import { combineReducers } from 'redux'
// Import your reducers...
import AppReducer from './appReducer'
import SettingsReducer from './settingsReducer'
import CombinationReducer from './combinationReducer'

const CombinedReducers = combineReducers({
  // ...and combine them here
  app: AppReducer,
  settings: SettingsReducer,
  combination: CombinationReducer
})

export default CombinedReducers

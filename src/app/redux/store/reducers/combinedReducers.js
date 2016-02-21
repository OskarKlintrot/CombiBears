import { combineReducers } from 'redux'
import SettingsReducer from './settingsReducer'
import GameReducer from './gameReducer'

const CombinedReducers = combineReducers({
  settings: SettingsReducer,
  game: GameReducer
})

export default CombinedReducers

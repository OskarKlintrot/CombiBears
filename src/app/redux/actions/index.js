import AppActions from "./appActions"
import SettingsActions from "./settingsActions"
import CombinationActions from "./combinationActions"

const Actions = Object.assign({}, AppActions, SettingsActions, CombinationActions )

export default Actions

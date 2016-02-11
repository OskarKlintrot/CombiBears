// React
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// React Router
import Root from './components/root'
import configureStore from './redux/store'

import createHistory from 'history/lib/createHashHistory'
import { useQueries } from 'history'
import InitialState from './redux/store/initialState'

// PIXI.js
import PIXI from 'pixi.js/bin/pixi'
import ReactPIXI from 'react-pixi'

// Game View
import GameView from './components/gameView'

const history = useQueries( createHistory )()
const Store = configureStore( new InitialState(), history )

// Needed for React Developer Tools
window.React = React

/*
 * Needed for onTouchTap
 * Can go away when react 1.0 release
 * Check this repo:
 * https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin()

ReactPIXI.render(
  <GameView width = { window.innerWidth } height = { window.innerHeight } />,
  document.getElementById( 'game-view-pixi' )
)


ReactDOM.render(
  <Root store = { Store } history = { history }/>,
  document.getElementById( 'app' )
)


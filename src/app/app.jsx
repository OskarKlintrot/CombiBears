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
import PIXI from 'pixi.js/bin/pixi' // PIXI, added by Johnny Pesola 2016-02-04
import ReactPIXI from 'react-pixi' // React PIXI, added by Johnny Pesola 2016-02-04

const history = useQueries(createHistory)()
const Store = configureStore(InitialState(), history)




//Needed for React Developer Tools
window.React = React

/*
 * Needed for onTouchTap
 * Can go away when react 1.0 release
 * Check this repo:
 * https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin()

ReactDOM.render(
  <Root store={ Store } history={ history }/>
, document.getElementById('app'))

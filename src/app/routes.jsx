import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Wrapper from './components/shared/wrapper.jsx'

import NoMatch from './components/shared/noMatch.jsx'
import Main from './components/main.jsx'
import About from './components/about.jsx'
import StartView from './components/startView'
import SavedCombinationsView from './components/savedCombinationsView'
import GameViewPixi from './components/gameViewPixi'

export default (
  <Route path='/' component={ Wrapper }>
    <IndexRoute component={ Main } />
    <Route path='/start' component={ StartView }/>
    <Route path='/saved' component={ SavedCombinationsView } />
    <Route path='/game-pixi' component = { GameViewPixi } />
    <Route path='/about' component={ About }/>
    <Route path='*' component={ NoMatch }/>
  </Route>
)

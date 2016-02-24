import React from 'react'
import { Route, IndexRoute } from 'react-router'
import C from './constants'

import Wrapper from './components/shared/wrapper.jsx'
import NoMatch from './components/shared/noMatch.jsx'
import Main from './components/main.jsx'
import About from './components/about.jsx'
import StartView from './components/startView'
import GameView from './components/gameView'
import SavedCombinationsView from './components/savedCombinationsView'

export default (
  <Route path='/' component={ Wrapper } >
    <IndexRoute component={ Main } />
    <Route path={ C.ROUTES.START } component={ StartView } />
    <Route path={ C.ROUTES.GAME } component={ GameView } />
    <Route path={ C.ROUTES.SAVED } component={ SavedCombinationsView } />
    <Route path='*' component={ NoMatch } />
  </Route>
)

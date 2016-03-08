import React from 'react'
import { Route, IndexRoute } from 'react-router'
import C from './constants'

import Wrapper from './components/shared/wrapper.jsx'
import NoMatch from './components/shared/noMatch.jsx'
import StartView from './components/startView'
import GameView from './components/gameView'
import ResultsView from './components/resultview'

export default (
  <Route
    path={ C.ROUTES.START }
    component={ Wrapper }
  >
    <IndexRoute
      component={ StartView }
    />
    <Route
      path={ C.ROUTES.GAME }
      component={ GameView }
    />
    <Route
      path={ C.ROUTES.RESULTS }
      component={ ResultsView }
    />
    <Route
      path='*'
      component={ NoMatch }
    />
  </Route>
)

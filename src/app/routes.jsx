import React from 'react'
import { Route, IndexRoute } from 'react-router'
import C from './constants'

import Wrapper from './components/shared/wrapper.jsx'
import NoMatch from './components/shared/noMatch.jsx'
import StartView from './components/startView'
import GameView from './components/gameView'
import ResultView from './components/resultView'

const validateSession = ( nextState, replaceState ) => {
  if (
      sessionStorage &&
      !sessionStorage.CombiBearsDev &&
      !sessionStorage.CombiBears
    )
    replaceState({ nextPathname: nextState.location.pathname }, C.ROUTES.START )
}

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
      onEnter={ validateSession }
    />
    <Route
      path={ C.ROUTES.RESULTS }
      component={ ResultView }
      onEnter={ validateSession }
    />
    <Route
      path='*'
      component={ NoMatch }
    />
  </Route>
)

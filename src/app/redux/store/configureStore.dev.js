import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistStateSessionStorage from 'redux-sessionstorage'
import storeEnhancer from 'redux-history-transitions'
import CombinedReducers from './reducers/combinedReducers'
import C from '../../constants'

// Redux DevTools store enhancers
import { persistState } from 'redux-devtools/lib'
import DevTools from '../../components/devTools'

export default function configureStore( initialState, history ) {
  const getDebugSessionKey = () => {
    // By default we try to read the key from ?debug_session=<key> in the address bar
    // const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    // return ( matches && matches.length > 0 ) ? matches[1] : null
    return null
  }

  const finaleCreateStore = compose(
    applyMiddleware( thunk ),
    storeEnhancer( history ),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState( getDebugSessionKey() ),
    persistStateSessionStorage( null, { key: C.SESSION_STORAGE.DEV })
  )( ( createStore ) )

  const store = finaleCreateStore( CombinedReducers, initialState )

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if ( module.hot ) {
    module.hot.accept( CombinedReducers, () => {
      return store.replaceReducer( CombinedReducers ) // default if you use Babel 6+
    })
  }

  return store
}

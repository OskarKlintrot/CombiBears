import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistStateSessionStorage from 'redux-sessionstorage'
import CombinedReducers from './reducers/combinedReducers'
import storeEnhancer from 'redux-history-transitions'

export default function configureStore( initialState, history ) {
  const finaleCreateStore = compose(
    applyMiddleware( thunk ),
    storeEnhancer( history ),
    persistStateSessionStorage( null, { key: 'CombiBears' })
  )( ( createStore ) )

  return finaleCreateStore( CombinedReducers, initialState )
}

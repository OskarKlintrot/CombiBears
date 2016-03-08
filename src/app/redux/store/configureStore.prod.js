import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistStateLocalstorage from 'redux-localstorage'
import CombinedReducers from './reducers/combinedReducers'
import storeEnhancer from 'redux-history-transitions'

export default function configureStore( initialState, history ) {
  const finaleCreateStore = compose(
    applyMiddleware( thunk ),
    storeEnhancer( history ),
    persistStateLocalstorage( null, { key: 'BearGoesWhere' })
  )( ( createStore ) )

  return finaleCreateStore( CombinedReducers, initialState )
}

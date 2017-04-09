import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers'

const store = createStore (rootReducer, compose (
  applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store

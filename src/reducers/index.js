import { combineReducers } from 'redux'
import { sceneReducer } from './sceneReducer'

const rootReducers = combineReducers({
  scene: sceneReducer
})

export default rootReducers

import * as actionType from '../actions/constants'

export const sceneReducer = (state = 'HOME', action) => {
  switch (action.type) {
    case actionType.HOME_SCENE:
      return action.payload
    case actionType.PROFILE_SCENE:
      return action.payload
    default:
      return state
  }
}

import * as actionType from '../actions/constants'

export const sceneReducer = (state = 'HOME', action) => {
  switch (action.type) {
    case actionType.MALL_SCENE:
      return action.payload
    case actionType.ITENERARY_SCENE:
      return action.payload
    default:
      return state
  }
}

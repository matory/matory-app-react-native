import * as actionType from './constants'

export const homeScene = (data) => {
  return (
    type: actionType.HOME_SCENE,
    payload: data
  )
}

export const profileScene = (data) => {
  return (
    type: actionType.PROFILE_SCENE,
    payload: data
  )
}

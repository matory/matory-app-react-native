import * as actionType from './constants'

export const homeScene = (data) => {
  return (
    type: actionType.MALL_SCENE,
    payload: data
  )
}

export const profileScene = (data) => {
  return (
    type: actionType.ITENERARY_SCENE,
    payload: data
  )
}

import produce from 'immer'
import { COUNTER_CHANGE } from './constants'

type initialStateType = {
  count: number
}

const initialState: initialStateType = {
  count: 0,
}

const countReducer = produce((draft = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case COUNTER_CHANGE:
      draft.count += 1
      return draft
    default:
      return draft
  }
})

export default countReducer

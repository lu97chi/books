import { createStore, combineReducers } from 'redux'
import countReducer from './src/views/Congratulation/reducers'

const rootReducer = combineReducers({ count: countReducer })

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore

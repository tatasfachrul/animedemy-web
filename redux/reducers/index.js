import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import videoReducer from './videoReducer'

const reducers = combineReducers({
  categoryReducer,
  videoReducer
})

export default reducers
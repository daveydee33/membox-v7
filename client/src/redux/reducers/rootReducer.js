// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import items from '@src/views/dave/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  items
})

export default rootReducer

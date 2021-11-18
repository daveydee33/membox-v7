// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import items from './items'
import collections from './collections'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  items,
  collections
})

export default rootReducer

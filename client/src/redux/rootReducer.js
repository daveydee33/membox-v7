// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import items from './items'
import collections from './collections'

const rootReducer = {
  auth,
  navbar,
  layout,
  items,
  collections
}

export default rootReducer

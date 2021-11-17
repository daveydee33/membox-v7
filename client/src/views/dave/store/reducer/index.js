const initialState = {
  items: [],
  params: {},
  totalItems: 0,
  selectedItem: {},
  tags: [],
  favorites: []
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.data.results,
        params: action.params,
        totalItems: action.data.totalResults
      }
    case 'UPDATE_SINGLE_ITEM':
      return { ...state }
    case 'DELETE_ITEM':
      return { ...state }
    case 'SELECT_ITEM':
      return { ...state, selectedItem: action.item }
    case 'GET_TAGS':
      return { ...state, tags: action.data }
    case 'ADD_FAVORITE':
      return { ...state, favorites: action.data }
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: action.data }
    default:
      return state
  }
}

export default itemsReducer

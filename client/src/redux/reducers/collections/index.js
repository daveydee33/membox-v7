const initialState = {
  collections: [],
  collectionsTotal: 0,
  collectionsParams: {}
}

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COLLECTIONS':
      return {
        ...state,
        collections: action.data.results,
        collectionsTotal: action.data.totalResults,
        collectionsParams: action.params
      }
    case 'ADD_COLLECTION':
      return { ...state }
    case 'UPDATE_SINGLE_COLLECTION':
      return { ...state }
    case 'DELETE_COLLECTION':
      return { ...state }
    default:
      return state
  }
}

export default collectionsReducer

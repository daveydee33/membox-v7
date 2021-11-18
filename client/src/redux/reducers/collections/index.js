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
    default:
      return state
  }
}

export default collectionsReducer

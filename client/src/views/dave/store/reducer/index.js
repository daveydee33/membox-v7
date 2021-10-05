const initialState = {
  items: [],
  params: {},
  totalItems: 0
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

    default:
      return state
  }
}

export default itemsReducer

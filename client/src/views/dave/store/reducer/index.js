const initialState = {
  items: []
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.data.items
      }

    default:
      return state
  }
}

export default itemsReducer

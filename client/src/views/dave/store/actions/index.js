import axios from 'axios'

// ** Get Items
export const getItems = (params) => {
  return (dispatch) => {
    return axios.get('/v1/items', { params }).then((res) => {
      dispatch({ type: 'GET_ITEMS', data: res.data, params })
    })
  }
}

// ** Update single Item
export const updateSingleItem = (id, item) => {
  return (dispatch, getState) => {
    axios
      .patch(`/v1/items/${id}`, { ...item })
      .then((res) => {
        dispatch({
          type: 'UPDATE_SINGLE_ITEM',
          item: res.data
        })
      })
      .then(() => dispatch(getItems(getState().items.params)))
  }
}

// ** Update multiple Items
// export const updateMultipleItems = (item) => {
//   return (dispatch, getState) => {
//     axios
//       .post('/apps/todo/update-item', { item })
//       .then((res) => {
//         dispatch({
//           type: 'UPDATE_MULTIPLE_ITEMS',
//           item: res.data
//         })
//       })
//       // .then(() => dispatch(getItems(getState().items.params)))
//   }
// }

// ** Delete Item
export const deleteItem = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(`/v1/items/${id}`)
      .then((res) => {
        dispatch({
          type: 'DELETE_ITEM',
          item: res.data
        })
      })
      .then(() => dispatch(getItems(getState().items.params)))
  }
}

// Select Item
export const selectItem = (item) => (dispatch) => dispatch({ type: 'SELECT_ITEM', item })

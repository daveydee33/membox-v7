import axios from 'axios'

// Get Items
export const getItems = (params) => {
  return (dispatch) => {
    return axios.get('/v1/items', { params }).then((res) => {
      dispatch({ type: 'GET_ITEMS', data: res.data, params })
    })
  }
}

// Select Item
export const selectItem = item => dispatch => dispatch({ type: 'SELECT_ITEM', item })
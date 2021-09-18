import axios from 'axios'

// Get Items
export const getItems = (params) => {
  return (dispatch) => {
    return axios.get('/dave/items', { params }).then((res) => {
      dispatch({ type: 'GET_ITEMS', data: res.data, params })
    })
  }
}

import axios from 'axios'

// Get Items
export const getItems = () => {
  return (dispatch) => {
    return axios.get('/dave/items').then((res) => {
      dispatch({ type: 'GET_ITEMS', data: res.data })
    })
  }
}

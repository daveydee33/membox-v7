import axios from 'axios'

// ** Get Collections
export const getCollections = (params) => {
  return (dispatch) => {
    return axios.get('/v1/collections', { params }).then((res) => {
      dispatch({ type: 'GET_COLLECTIONS', data: res.data, params })
    })
    // .then(() => dispatch(getTags()))
  }
}

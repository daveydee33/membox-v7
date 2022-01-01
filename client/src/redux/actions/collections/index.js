import axios from 'axios'

export const getCollections = (params) => {
  return (dispatch) => {
    return axios.get('/v1/collections', { params }).then((res) => {
      dispatch({ type: 'GET_COLLECTIONS', data: res.data, params })
    })
    // .then(() => dispatch(getTags()))
  }
}

export const addCollection = (collection) => {
  return (dispatch, getState) => {
    axios
      .post('/v1/collections', collection)
      .then((res) => {
        dispatch({
          type: 'ADD_COLLECTION',
          payload: res.data
        })
      })
      .then(dispatch(getCollections(getState().collections.params)))
  }
}

export const updateSingleCollection = (id, collection) => {
  return (dispatch, getState) => {
    axios
      .patch(`/v1/collections/${id}`, { ...collection })
      .then((res) => {
        dispatch({
          type: 'UPDATE_SINGLE_COLLECTION',
          payload: res.data
        })
      })
      .then(() => dispatch(getCollections(getState().collections.params)))
  }
}

export const deleteCollection = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(`/v1/collections/${id}`)
      .then((res) => {
        dispatch({
          type: 'DELETE_COLLECTION',
          payload: res.data
        })
      })
      .then(() => dispatch(getCollections(getState().collections.params)))
  }
}

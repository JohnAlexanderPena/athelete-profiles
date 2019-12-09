import axios from 'axios';

import { GET_PROFILE, GET_PROFILES, ADD_PROFILE } from './types'


export const getAllProfiles = () => dispatch => {
  axios.get('http://localhost:5000/profiles/all')
  .then( res => {
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  })
  .catch(err =>
  dispatch({
    type: GET_PROFILES,
    payload: []
  })
)
}


export const createProfile = (profileData, history) => dispatch => {
    axios.post('http://localhost:5000/profiles/', profileData)
    .then(res =>
     {
        debugger;
       dispatch({
        type: ADD_PROFILE,
        payload: res.data
      })}
      )
    .catch(err =>
      console.log(err)
    )
    .then(history.push('/'))
}

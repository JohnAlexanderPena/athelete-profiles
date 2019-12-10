import { GET_PROFILES, ADD_PROFILE } from '../actions/types'


const initialState = {
  profile: {},
  profiles: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PROFILE:
    return {
      ...state,
      profiles:[action.payload, ...state.profiles] //adding new post coming in from payload automatically
    }
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      }
    default:
      return state;
  }
}

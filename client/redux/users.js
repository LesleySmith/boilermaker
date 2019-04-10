import Axios from 'axios'

// ACTION TYPES
export const SET_USERS = 'SET_USERS';

// ACTION CREATORS
export const setUsers = (users) => ({ type: SET_USERS, users });


// INITIAL STATE
const initialState = {
  users: [],
  user: {}
}

// REDUCER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users }
    default:
      return state
  }
}

// THUNKS
export const fetchUsers = () => {
  return async (dispatch) => {
    const {data} = await Axios.get('/api/users')
    dispatch(setUsers(data))
  }
}

export default userReducer;

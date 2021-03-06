import Axios from 'axios';

// ACTION TYPES
export const SET_KITTENS = 'SET_KITTENS'


// ACTION CREATORS
export const setKittens = (kittens) => ({ type: SET_KITTENS, kittens });

// INITIAL STATE
const initialState = {
  kittens: [],
  kitten: {}
}

// REDUCER
const kittensReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KITTENS:
      return { ...state, kittens: action.kittens }
    default:
      return state
  }
}

// THUNKS
export const fetchKittens = () => {
  return async (dispatch) => {
    const {data} = await Axios.get('/api/kittens')
    dispatch(setKittens(data))
  }
}


export default kittensReducer;

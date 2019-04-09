import { combineReducers } from 'redux'
import usersReducer from './users'
import kittensReducer from './kittens'

export default combineReducers({
  kittens: kittensReducer,
  users: usersReducer
});

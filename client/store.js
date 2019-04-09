import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/index'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;

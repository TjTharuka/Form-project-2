import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer/rootReducer';

// necessary if
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
};

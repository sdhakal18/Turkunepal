import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import apiReducer from './reducers/api';
import userProfileReducer from './reducers/userProfile';
import { RootState } from './types';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function initStore(): Store<RootState> {
  return createStore(
    combineReducers({
      api: apiReducer,
      userProfile: userProfileReducer,
    }),
    composeEnhancers(
      applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)
    )
  );
}

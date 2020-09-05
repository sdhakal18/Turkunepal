import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  fetchUserProfileAction,
  loginUserAction,
} from '../actions/userProfile';
import { ProcessingStatus, UserProfileState } from '../types';

const initialState: UserProfileState = {};

const reducer = reducerWithInitialState<UserProfileState>(initialState)
  .case(fetchUserProfileAction.started, (state) => ({
    ...state,
    fetchingStatus: ProcessingStatus.PROCESSING,
  }))
  .caseWithAction(fetchUserProfileAction.done, (state, action) => ({
    ...state,
    fetchingStatus: ProcessingStatus.SUCCESS,
    user: action.payload.result,
  }))
  .case(fetchUserProfileAction.failed, (state) => ({
    ...state,
    fetchingStatus: ProcessingStatus.FAILURE,
  }))
  .case(loginUserAction.started, (state) => ({
    ...state,
    fetchingStatus: ProcessingStatus.PROCESSING,
  }))
  .caseWithAction(loginUserAction.done, (state, action) => ({
    ...state,
    fetchingStatus: ProcessingStatus.SUCCESS,
    user: action.payload.result,
  }))
  .case(loginUserAction.failed, (state) => ({
    ...state,
    fetchingStatus: ProcessingStatus.FAILURE,
  }));

export default reducer;

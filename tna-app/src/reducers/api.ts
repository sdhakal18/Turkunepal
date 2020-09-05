import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetchAllAction } from '../actions/api';

import { APIState, ProcessingStatus } from '../types';

const initialState: APIState = {};

const reducer = reducerWithInitialState<APIState>(initialState)
  .case(fetchAllAction.started, (state) => ({
    ...state,
    fetchAllStatus: ProcessingStatus.PROCESSING,
  }))
  .case(fetchAllAction.done, (state) => ({
    ...state,
    fetchAllStatus: ProcessingStatus.SUCCESS,
  }))
  .case(fetchAllAction.failed, (state) => ({
    ...state,
    fetchAllStatus: ProcessingStatus.FAILURE,
  }));

export default reducer;

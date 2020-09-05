import actionCreatorFactory from 'typescript-fsa';

import { fetchUserProfile } from './userProfile';

const creator = actionCreatorFactory('apiAggregates');

/*
 * Custom action for "fetching user data"
 */
export const fetchAllAction = creator.async<{}, {}, Error>('fetchAll');

export const fetchAll = () => (dispatch: any) => {
  dispatch(fetchAllAction.started({}));

  const endpoints = [dispatch(fetchUserProfile())];

  return Promise.all(endpoints)
    .then((values) => {
      dispatch(
        fetchAllAction.done({
          params: {},
          result: values,
        })
      );
    })
    .catch((error) => {
      dispatch(
        fetchAllAction.failed({
          error,
          params: {},
        })
      );
    });
};

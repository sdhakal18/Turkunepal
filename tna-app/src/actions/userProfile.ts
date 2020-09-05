import { Dispatch } from 'redux';
import actionCreatorFactor from 'typescript-fsa';
import { LoginCredentials, UserProfile } from '../types';
import api from '../api/api';

const creator = actionCreatorFactor('userProfile');

export const fetchUserProfileAction = creator.async<{}, UserProfile, Error>(
  'fetch'
);

export const loginUserAction = creator.async<{}, UserProfile, Error>('login');

/**
 * Asynchronous Redux action which attempts to request profile of the user which has been logged in.
 */
export const fetchUserProfile = () => (dispatch: Dispatch) => {
  dispatch(fetchUserProfileAction.started({}));

  return api
    .fetchUserProfile()
    .then((response: UserProfile) => {
      dispatch(
        fetchUserProfileAction.done({
          params: {},
          result: response,
        })
      );
    })
    .catch((error: Error) => {
      dispatch(
        fetchUserProfileAction.failed({
          error,
          params: {},
        })
      );
      throw error;
    });
};

export const loginUser = (data: LoginCredentials) => (dispatch: Dispatch) => {
  dispatch(loginUserAction.started({}));

  return api
    .postLogin(data)
    .then((response: UserProfile) => {
      dispatch(
        loginUserAction.done({
          params: {},
          result: response,
        })
      );
    })
    .then(console.log)
    .catch((error: Error) => {
      dispatch(
        loginUserAction.failed({
          error,
          params: {},
        })
      );
      throw error;
    });
};

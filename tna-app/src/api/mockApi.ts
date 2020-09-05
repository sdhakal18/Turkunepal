import * as axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { loggedInUserMock, userProfileMock } from './mockData';
import { apiEndpoints } from './urls';

const injectMockApi = (axiosInstance: axios.AxiosInstance) => {
  const axiosMock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

  axiosMock
    .onGet(apiEndpoints.userProfile)
    .reply(200, userProfileMock)

    .onPost(apiEndpoints.login)
    .reply(200, loggedInUserMock)

    .onAny()
    .passThrough();
};

export default injectMockApi;

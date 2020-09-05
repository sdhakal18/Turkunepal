export interface NavContent {
  name?: string;
  icon?: string;
}
export enum ProcessingStatus {
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface APIState {
  fetchAllStatus?: ProcessingStatus;
  copyOrderStatus?: ProcessingStatus;
}

export interface UserProfile {
  name: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
export interface UserProfileState {
  fetchingStatus?: ProcessingStatus;
  user?: UserProfile;
  error?: Error;
}

export interface RootState {
  api: APIState;
  userProfile: UserProfileState;
}

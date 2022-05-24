import { LOADING } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const loadingState = (isLoading) => ({
  type: LOADING,
  isLoading,
});

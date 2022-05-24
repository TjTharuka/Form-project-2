import axios from 'axios';

/**
 * Create or cancel CancelTokenSource
 * @param cancelToken
 * @returns {CancelTokenSource}
 */
export const createCancelToken = (cancelToken) => {
  // Check if there are any previous pending requests
  if (cancelToken) {
    cancelToken.cancel();
  }

  // Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  return cancelToken;
};

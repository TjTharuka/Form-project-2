import { TOAST_MESSAGE } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const toastMessage = (message, status) => ({
  type: TOAST_MESSAGE,
  message,
  status,
});

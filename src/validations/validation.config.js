import * as Yup from 'yup';

export const name = {
  name: Yup.string()
    .required('First name is required')
    .matches(
      /^[A-Za-z0-9_ \- ~.]*$/,
      'First name can only use Letters, Numbers, Underscore, Hyphen, Period and Tilde.'
    ),
};
export const firstNameLastName = {
  firstName: Yup.string()
    .required('First name is required')
    .matches(
      /^[A-Za-z0-9_ \- ~.]*$/,
      'First name can only use Letters, Numbers, Underscore, Hyphen, Period and Tilde.'
    ),
  lastName: Yup.string()
    .required('Last name is required')
    .matches(
      /^[A-Za-z0-9_ \- ~.]*$/,
      'Last name can only use Letters, Numbers, Underscore, Hyphen, Period and Tilde.'
    ),
};

export const IMAGE_SIZE = 1024 * 1024 * 10;

export const SUPPORTED_IMAGE_FORMATS = ['image/png', 'image/jpeg'];

export const SUPPORTED_VIDEO_FORMATS = ['video/ogg', 'video/mp4', 'video/webm'];

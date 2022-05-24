import * as Yup from 'yup';
import { firstNameLastName,name } from './validation.config';

// Common validation
const emailValidation = Yup.string()
  .required('Email is required')
  .email('Enter valid email');
const passwordValidation = Yup.string()
  .min(6, 'Password is too short')
  .required('Password is required');
const confirmPassword = Yup.string()
  .required('Confirm password is required')
  .oneOf([Yup.ref('password'), null], 'Password does not match');
const nameValidation = Yup.string().required('Name is required');
const mobileValidation = Yup.string()
  .required('Phone number is required')
  .min(9, 'Should have at least 9 digits')
  .max(12, 'You can only have 12 numbers');

const addressValidation = Yup.string().required('Address is required');
const nicValidation = Yup.string()
.required('N.I.C number is required')
.max(15)
.min(10);

// user registration validations
export const registerSchema = Yup.object({
    ...name,
    age: Yup.number().required('Age is required').min(6).max(120),
    nic:nicValidation,
    email: emailValidation,
    password: passwordValidation,
    confirmPassword,
    phone: mobileValidation,
});

export const loginSchema = Yup.object({
  email: emailValidation,
  password: Yup.string().required('Password is required'),
});

export const emailValidationSchema = Yup.object({
  email: emailValidation,
});

export const nameValidationSchema = Yup.object({
  name: nameValidation,
});

export const phoneValidationSchema = Yup.object({
  phone_number: mobileValidation,
});

export const changePasswordSchema = Yup.object({
  currentPassword: Yup.string()
    .min(6, 'Current password is too short')
    .required('Current password is required'),
  password: Yup.string()
    .min(6, 'New password is too short')
    .required('New password is required'),
  confirmPassword,
});

export const addPaperValidation = Yup.object({
  PaperName: Yup.string()
    .required('Paper Name is required'),
});

/* All form validations will resides here */

import * as Yup from 'yup';

export const loginFormValidation = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

export const signUpFormValidation = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobileNo: Yup.string().required('Mobile no is required'),
  password: Yup.string().required('Password is required')
});

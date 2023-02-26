/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FormikControl, NavLink } from '@components';
import ROUTES from '@navigation/ROUTES';
import { Button, Icon } from '@rneui/themed';
import { signUpFormValidation } from '@utils';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  email: '',
  mobileNo: '',
  password: ''
};

const propTypes = {
  t: PropTypes.func.isRequired
};

const defaultProps = {};

export const SignUpForm = ({ t }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={signUpFormValidation}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <>
            <FormikControl
              type="input"
              name="name"
              placeholder="Name"
              value={values.name}
              handleChange={handleChange}
              leftIcon={<Icon name="user" type="feather" size={24} color="gray" />}
            />
            <FormikControl
              type="input"
              name="email"
              placeholder="Email"
              value={values.email}
              handleChange={handleChange}
              leftIcon={<Icon name="mail" size={24} color="gray" />}
            />
            <FormikControl
              type="input"
              name="mobileNo"
              placeholder="Mobile No"
              value={values.mobileNo}
              handleChange={handleChange}
              leftIcon={<Icon name="phone" size={24} color="gray" />}
            />
            <FormikControl
              type="input"
              name="password"
              placeholder="Password"
              value={values.password}
              handleChange={handleChange}
              {...(!passwordVisible && { secureTextEntry: true })}
              leftIcon={<Icon name="lock" size={24} color="gray" />}
              rightIcon={
                <Icon
                  name={passwordVisible ? 'visibility' : 'visibility-off'}
                  size={24}
                  color="gray"
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
            <Button
              title={t('SignUp.signUpBtn')}
              containerStyle={{ width: '95%' }}
              onPress={handleSubmit}
            />
            <NavLink screen={ROUTES.LOGIN} params={{}}>
              Already a user? Login
            </NavLink>
          </>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = propTypes;
SignUpForm.defaultProps = defaultProps;

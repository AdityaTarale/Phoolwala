/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FormikControl, NavLink } from '@components';
import ROUTES from '@navigation/ROUTES';
import { Button, Icon } from '@rneui/themed';
import { loginFormValidation } from '@utils';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const initialValues = {
  email: '',
  password: ''
};

const propTypes = {
  t: PropTypes.func.isRequired
};

const defaultProps = {};

export const LoginForm = ({ t }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={loginFormValidation}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <>
            <FormikControl
              type="input"
              name="email"
              placeholder="Email"
              value={values.email}
              handleChange={handleChange}
              leftIcon={<Icon name="email" size={24} color="gray" />}
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
              title={t('Login.loginBtn')}
              containerStyle={{ width: '95%' }}
              onPress={handleSubmit}
            />
            <NavLink screen={ROUTES.SIGNUP} params={{}}>
              Don't have an account ? Signup
            </NavLink>
          </>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FormikControl } from '@components';
import { Icon } from '@rneui/base';
import { Button } from '@rneui/themed';
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
              placeholder="Username"
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
          </>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

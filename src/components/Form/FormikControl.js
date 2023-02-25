import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import TextField from './Input';

const propTypes = {
  control: PropTypes.oneOf(['input', 'select', 'radio'])
};

const defaultProps = {
  control: 'input'
};

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <TextField {...rest} />;
    case 'select':
      return <View />;
    case 'radio':
      return <View />;
  }
};

FormikControl.propTypes = propTypes;
FormikControl.defaultProps = defaultProps;

export default FormikControl;

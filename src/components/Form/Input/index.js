import React from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

const defaultProps = {};

const TextField = ({ name, handleChange, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { value } = field;
        return (
          <View style={styles.inputControl}>
            <Input
              {...rest}
              value={value}
              onChangeText={handleChange(name)}
              errorMessage={form.touched[name] && form.errors[name]}
            />
            {/* <ErrorMessage name={name} component={TextError} /> */}
          </View>
        );
      }}
    </Field>
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;

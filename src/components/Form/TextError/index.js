import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string
};

const defaultProps = {
  children: null
};

const TextError = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

TextError.propTypes = propTypes;
TextError.defaultProps = defaultProps;

export default TextError;

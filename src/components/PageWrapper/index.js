import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@rneui/themed';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  children: PropTypes.node.isRequired
};

export default function PageWrapper({ children }) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.white
      }}
    >
      {children}
    </View>
  );
}

PageWrapper.propTypes = propTypes;

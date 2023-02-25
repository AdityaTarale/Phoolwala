import React from 'react';
import { SafeAreaView } from 'react-native';

import { Map } from './map';
import styles from './styles';

const propTypes = {};
const defaultProps = {};

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Map />
    </SafeAreaView>
  );
};

ProfileScreen.propTypes = propTypes;
ProfileScreen.defaultProps = defaultProps;

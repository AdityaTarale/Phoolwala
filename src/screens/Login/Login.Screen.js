/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types'
import { ScrollView, View /* , useColorScheme */ } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

import { LoginForm } from './login-form';
import styles from './styles';

const propTypes = {};
const defaultProps = {};

export const LoginScreen = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const { theme } = useTheme();

  const screen = {
    backgroundColor: theme.colors.white,
    flex: 1
  };

  const { t } = useTranslation();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={screen}>
      {/* <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text style={{color: '#000'}}>LoginScreen</Text>
      </View> */}
      <View style={styles.loginWrapper}>
        <Text h3 h3Style={styles.loginTitle}>
          {t('Login.title')}
        </Text>

        <LoginForm t={t} />
      </View>
    </ScrollView>
  );
};

LoginScreen.propTypes = propTypes;
LoginScreen.defaultProps = defaultProps;

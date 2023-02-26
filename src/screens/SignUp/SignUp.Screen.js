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

import { SignUpForm } from './signUp-form';
import styles from './styles';

const propTypes = {};
const defaultProps = {};

export const SignUpScreen = () => {
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
        <Text style={{color: '#000'}}>SignupScreen</Text>
      </View> */}
      <View style={styles.signUpWrapper}>
        <Text h3 h3Style={styles.signUpTitle}>
          {t('SignUp.title')}
        </Text>

        <SignUpForm t={t} />
      </View>
    </ScrollView>
  );
};

SignUpScreen.propTypes = propTypes;
SignUpScreen.defaultProps = defaultProps;

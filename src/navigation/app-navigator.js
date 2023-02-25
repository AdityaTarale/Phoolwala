import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useThemeMode } from '@rneui/themed';
import { isLastLoginInDate, validateAuthToken } from '@utils/services';

import 'react-native-get-random-values';

import { AppStack } from './app-stack';
import { AuthStack } from './auth-stack';

export const AppNavigator = () => {
  const { _, setMode } = useThemeMode();
  const app = useSelector(state => state.appReducer);
  const auth = useSelector(state => state.authReducer);

  useEffect(() => {
    setMode(app?.theme);
  }, []);

  const validateAuthTokenWithDeviceId = async () => {
    const isValid = await validateAuthToken(auth?.accessToken);
    if (isValid) {
      return (
        <NavigationContainer theme={app?.theme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppStack />
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer theme={app?.theme === 'dark' ? DarkTheme : DefaultTheme}>
          <AuthStack />
        </NavigationContainer>
      );
    }
  };

  // Change this to manually entering inside application
  if (!(auth?.accessToken && auth?.deviceId && auth?.timestamp)) {
    return (
      <NavigationContainer theme={app?.theme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppStack />
      </NavigationContainer>
    );
  }

  if (auth?.accessToken && auth?.deviceId && auth?.timestamp) {
    if (isLastLoginInDate(auth)) {
      return (
        <NavigationContainer theme={app?.theme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppStack />
        </NavigationContainer>
      );
    } else {
      validateAuthTokenWithDeviceId(auth);
    }
  }
};

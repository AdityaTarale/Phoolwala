import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SelectLanguageScreen, SignUpScreen } from '@screens';

import ROUTES from './ROUTES';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      {/* Remove intro from here and make new component and only show once to the user when app initially load use redux to build logic */}
      {/* <Stack.Screen
        name={ROUTES.INTRO}
        component={IntroScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={ROUTES.LOGIN}
        options={{
          headerShown: false
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ROUTES.SIGNUP}
        options={{
          headerShown: false
        }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={ROUTES.SELECT_LANGUAGE}
        component={SelectLanguageScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

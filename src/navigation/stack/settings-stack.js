import React from 'react';
import ROUTES from '@navigation/ROUTES';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SETTINGS}>
      <Stack.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import ROUTES from '@navigation/ROUTES';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

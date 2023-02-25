import React from 'react';
import ROUTES from '@navigation/ROUTES';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.PROFILE}>
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

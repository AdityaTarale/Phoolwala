import React from 'react';
import ROUTES from '@navigation/ROUTES';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationsScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const NotificationsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.NOTIFICATIONS}>
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

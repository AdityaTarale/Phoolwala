import React from 'react';
import ROUTES from '@navigation/ROUTES';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SupportScreen } from '@screens';

const Stack = createNativeStackNavigator();

export const SupportStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SUPPORT}>
      <Stack.Screen
        name={ROUTES.SUPPORT}
        component={SupportScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

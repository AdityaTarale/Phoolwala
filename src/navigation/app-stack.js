/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ROUTES from './ROUTES';
import { HomeStack, NotificationsStack, ProfileStack, SettingsStack } from './stack';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME_STACK}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        headerShown: false
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME_STACK}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />
        }}
      >
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.PROFILE_STACK}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
        }}
      >
        {() => <ProfileStack />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS_STACK}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="bell" color={color} size={size} />
        }}
      >
        {() => <NotificationsStack />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.SETTINGS_STACK}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="settings" color={color} size={size} />
        }}
      >
        {() => <SettingsStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

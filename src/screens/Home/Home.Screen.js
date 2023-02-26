/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import PropTypes from 'prop-types'
import { ScrollView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ButtonGroup, useTheme } from '@rneui/themed';

import { PageWrapper } from '../../components';

import CategoryList from './CategoryList';
import HeaderBar from './HeaderBar';
import ImageBanner from './ImageBanner';

const propTypes = {};
const defaultProps = {};

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screen = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1
  };

  const { theme } = useTheme();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={screen}>
      <View
        style={{
          backgroundColor: theme.colors.white
        }}
      >
        <PageWrapper>
          <HeaderBar />
          <ImageBanner />
          <CategoryList />
          <ButtonGroup buttons={['Daily', 'Month', 'Yearly', 'Weekly']} />
        </PageWrapper>
      </View>
    </ScrollView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

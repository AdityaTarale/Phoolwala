import React from 'react';
// import PropTypes from 'prop-types'
import { ScrollView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Text } from '@rneui/themed';

import { PageWrapper } from '../../components';

import Filters from './Filters';
import HeaderBar from './HeaderBar';
import ProductList from './ProductList';

const propTypes = {};
const defaultProps = {};

export const CategoryScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screen = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1
  };
  return (
    <ScrollView>
      <Text>Tab</Text>
      <PageWrapper>
        <HeaderBar />
        <Filters />
        <ProductList />
      </PageWrapper>
    </ScrollView>
  );
};

CategoryScreen.propTypes = propTypes;
CategoryScreen.defaultProps = defaultProps;

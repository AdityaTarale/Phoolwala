/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from '@navigation/app-navigator';
import { persistor, store } from '@redux';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { PersistGate } from 'redux-persist/integration/react';

import './translations';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screen = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  const theme = createTheme({
    Button: {
      raised: true
    },
    Input: {
      inputContainerStyle: {
        backgroundColor: '#efefef',
        borderRadius: 5,
        borderBottomColor: 'white'
      }
    }
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense>
          <SafeAreaProvider>
            <SafeAreaView style={screen}>
              <ThemeProvider theme={theme}>
                <AppNavigator />
              </ThemeProvider>
            </SafeAreaView>
          </SafeAreaProvider>
        </Suspense>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;

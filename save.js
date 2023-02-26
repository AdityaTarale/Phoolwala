/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
import React from 'react';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types'
import { ActivityIndicator, ScrollView, useColorScheme, View } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { HomeIcon, MenuIcon, SettingsIcon, ShareIcon } from '@icons';
import { addStep, changeTheme, decrement, getUser, increment } from '@redux';
import { ButtonGroup, Divider, Switch, Text, useTheme, useThemeMode } from '@rneui/themed';

// import styles from './styles';

const propTypes = {};
const defaultProps = {};

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screen = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1
  };

  const { t } = useTranslation();
  const { theme } = useTheme();
  const { _, setMode } = useThemeMode();

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer.value);
  const user = useSelector(state => state.userReducer);
  const app = useSelector(state => state.appReducer);

  const handleAppTheme = value => {
    const themeMode = value ? 'dark' : 'light';
    setMode(themeMode);
    dispatch(changeTheme(themeMode));
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={screen}>
      <Header />
      <View
        style={{
          backgroundColor: theme.colors.white
        }}
      >
        <View style={styles.section}>
          <Text title="i18next internalization">i18next {t('Home.title')}</Text>
        </View>
        <Divider orientation="vertical" width={5} />
        <View style={styles.section}>
          <Text>Svg Icons</Text>
          <HomeIcon style={{ color: '#000' }} />
          <MenuIcon style={{ color: '#000' }} />
          <SettingsIcon style={{ color: '#000' }} />
          <ShareIcon style={{ color: '#000' }} />
        </View>
        <Divider orientation="vertical" width={5} />
        <View style={styles.section}>
          <Text>Vector Icons </Text>
          <Text>
            <Icon name="rocket" size={30} color="#900" />
          </Text>
        </View>
        <Divider orientation="vertical" width={5} />

        <Divider orientation="vertical" width={5} />
        <View>
          <View style={styles.section}>
            <Text>Redux Toolkit & Persist</Text>
          </View>
          <View style={styles.section}>
            <Text>Count: {counter}</Text>
          </View>
          <View style={styles.section}>
            <Text>
              Fetch Data From Server:{' '}
              {!user.data && user.loading ? (
                <ActivityIndicator size="large" color="#839" />
              ) : user.data ? (
                `${user?.data?.firstName} ${user?.data?.lastName}`
              ) : (
                'null'
              )}
            </Text>
          </View>
          <Divider orientation="vertical" width={5} />

          <View style={styles.section}>
            <Text>React Native Elements Components </Text>
          </View>
          <ButtonGroup
            buttons={['INCREMENT', 'DECREMENT', 'ADD-STEP', 'FETCH USER']}
            onPress={value => {
              if (value === 0) {
                dispatch(increment());
              } else if (value === 1) {
                dispatch(decrement());
              } else if (value === 2) {
                dispatch(addStep(5));
              } else if (value === 3) {
                dispatch(getUser());
              }
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <Divider orientation="vertical" width={5} />
          <View style={styles.section}>
            <Text>Switch Theme</Text>
            <Switch value={app?.theme === 'dark'} onValueChange={handleAppTheme} />
          </View>
        </View>

        <LearnMoreLinks /> 
      </View>
    </ScrollView>
  );
};

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;
*/

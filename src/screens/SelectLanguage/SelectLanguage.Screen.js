/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

import { SelectLanguageForm } from './select-language-form';
import styles from './styles';

const propTypes = {};
const defaultProps = {};

export const SelectLanguageScreen = () => {
  const { theme } = useTheme();

  const screen = {
    backgroundColor: theme.colors.white,
    flex: 1
  };

  const { t } = useTranslation();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={screen}>
      <View style={styles.selectLanguageWrapper}>
        <Text h3 h3Style={styles.selectLanguageTitle}>
          {t('SelectLanguage.title')}
        </Text>

        <SelectLanguageForm t={t} />
      </View>
    </ScrollView>
  );
};

SelectLanguageScreen.propTypes = propTypes;
SelectLanguageScreen.defaultProps = defaultProps;

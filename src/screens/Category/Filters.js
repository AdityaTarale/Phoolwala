import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonGroup } from '@rneui/themed';

export default function Filters() {
  return (
    <View>
      <ButtonGroup buttons={['Filter', 'Sort by', 'Less than 30min']} />
    </View>
  );
}

const styles = StyleSheet.create({});

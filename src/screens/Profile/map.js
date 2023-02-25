import React from 'react';
import { View } from 'react-native';
import MapboxGL, { Logger } from '@rnmapbox/maps';

import styles from './styles';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiYTduIiwiYSI6ImNsNDRrZTEydTAwbmMzb3Bycjc1Nzd3d2kifQ.NnPxXXleZGCEdBUlUjy9mA'
);

// edit logging messages
Logger.setLogCallback(log => {
  const { message } = log;

  // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
  if (
    message.match('Request failed due to a permanent error: Canceled') ||
    message.match('Request failed due to a permanent error: Socket Closed')
  ) {
    return true;
  }
  return false;
});

export const Map = () => {
  return (
    <View style={styles.page}>
      <MapboxGL.MapView style={styles.map} />
    </View>
  );
};

Map.propTypes = {};
Map.defaultProps = {};

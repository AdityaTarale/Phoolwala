import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Image } from '@rneui/themed';

export default function ImageBanner() {
  return (
    <Card containerStyle={styles.imageBannerContainer}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/5e/c1/e4/5ec1e4334c19f6310a1edb1ca71e94a0.jpg'
        }}
        containerStyle={styles.imageBanner}
        PlaceholderContent={<ActivityIndicator />}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  imageBanner: {
    flex: 1,
    height: 126,
    width: '100%'
  },
  imageBannerContainer: {
    overflow: 'hidden',
    padding: 0
  }
});

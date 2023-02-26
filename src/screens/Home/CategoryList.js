import React from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { NavLink } from '@components';
import ROUTES from '@navigation/ROUTES';
import { Card, Text, useTheme } from '@rneui/themed';
import PropTypes from 'prop-types';

// Will come from backend service
const flowers = [
  {
    name: 'Flowers',
    imageUrl:
      'https://images.unsplash.com/photo-1578439231583-9eca0a363860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9zZXN8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    name: 'Bookey',
    imageUrl: 'https://4.imimg.com/data4/KF/AX/MY-16704828/home-furniture-250x250.jpg'
  },
  {
    name: 'Mala',
    imageUrl: 'https://m.media-amazon.com/images/I/61dPpVHCy3L._SL1280_.jpg'
  },
  {
    name: 'Gajra',
    imageUrl: 'https://www.tikli.in/wp-content/uploads/2021/04/Gajra-Flower-1-1.jpg'
  }
];

function CategoryBox({ title, imageUrl }) {
  const { theme } = useTheme();

  return (
    <NavLink
      screen={ROUTES.CATEGORY}
      params={{
        category: title
      }}
    >
      <View style={styles.categoryBoxContainer}>
        <Card containerStyle={styles.categoryBoxCard}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.categoryBoxImage}>
            <Text h4 h4Style={{ ...styles.categoryBoxCardTitle, color: theme.colors.white }}>
              {title}
            </Text>
          </ImageBackground>
        </Card>
      </View>
    </NavLink>
  );
}

CategoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text h4>Top Categories to explore</Text>
      <FlatList
        data={flowers}
        horizontal
        renderItem={({ item }) => <CategoryBox title={item.name} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={<View style={styles.separator} />}
      />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryBoxCard: {
    overflow: 'hidden',
    padding: 0
  },
  categoryBoxCardTitle: {
    bottom: 5,
    left: 10,
    position: 'absolute'
  },
  categoryBoxContainer: {
    position: 'relative'
  },
  categoryBoxImage: {
    aspectRatio: 5 / 6,
    height: 170
  },
  container: {
    marginVertical: 20
  },
  separator: {
    width: 10 // Add width to add gap
  }
});

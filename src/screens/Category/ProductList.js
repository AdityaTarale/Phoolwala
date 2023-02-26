import React from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { NavLink } from '@components';
import ROUTES from '@navigation/ROUTES';
import { Button, Card, Text, useTheme } from '@rneui/themed';
import PropTypes from 'prop-types';

const flowers = [
  {
    name: 'Rose',
    description:
      "A beautiful bouquet of long-stemmed roses in assorted colors. Perfect for any occasion, from birthdays to anniversaries to Valentine's Day.",
    price: 39.99,
    imageUrl:
      'https://images.unsplash.com/photo-1578439231583-9eca0a363860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9zZXN8ZW58MHx8MHx8&w=1000&q=80',
    category: 'Flowers',
    tags: ['roses', 'bouquet', 'romantic', 'gift'],
    rating: 4.8,
    reviews: [
      {
        author: 'Jane Smith',
        rating: 5,
        comment:
          'This was the most beautiful bouquet of roses I have ever received! They were fresh, vibrant, and lasted for over a week. I would highly recommend this product.'
      },
      {
        author: 'John Doe',
        rating: 4,
        comment:
          'The roses were lovely, but a few of them started wilting after a few days. Overall, I was happy with my purchase.'
      }
    ]
  },
  {
    name: 'Lily',
    description:
      "A beautiful bouquet of fragrant lilies in assorted colors. Perfect for any occasion, from weddings to birthdays to Mother's Day.",
    price: 49.99,
    imageUrl:
      'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbHl8ZW58MHx8MHx8&w=1000&q=80',
    category: 'Flowers',
    tags: ['lilies', 'bouquet', 'fragrant', 'gift'],
    rating: 4.5,
    reviews: [
      {
        author: 'Emily Johnson',
        rating: 5,
        comment:
          'This bouquet of lilies was stunning! The colors were bright and beautiful, and the fragrance filled my home. I would definitely recommend this product.'
      },
      {
        author: 'Michael Smith',
        rating: 4,
        comment:
          'The lilies were lovely, but a few of them were starting to wilt when they arrived. Overall, I was happy with my purchase.'
      }
    ]
  },
  {
    name: 'Tulip',
    description:
      'A beautiful bouquet of colorful tulips in assorted colors. Perfect for any occasion, from birthdays to anniversaries to Easter.',
    price: 34.99,
    imageUrl:
      'https://media.istockphoto.com/id/1348359587/photo/amazing-garden-field-with-tulips-of-various-bright-rainbow-color-petals-beautiful-bouquet-of.jpg?b=1&s=170667a&w=0&k=20&c=FXYUPLB2eIL847fqOGt8wURI0s1DhrTgg8FfxBUD1iA=',
    category: 'Flowers',
    tags: ['tulips', 'bouquet', 'colorful', 'gift'],
    rating: 4.2,
    reviews: [
      {
        author: 'Sarah Lee',
        rating: 5,
        comment:
          'This was the most beautiful bouquet of tulips I have ever received! The colors were so vibrant and the flowers lasted for over a week. I would highly recommend this product.'
      },
      {
        author: 'Tom Jackson',
        rating: 3,
        comment:
          'The tulips were nice, but a few of them were already starting to wilt when they arrived. I was a bit disappointed, but overall it was still a decent bouquet.'
      }
    ]
  },
  {
    name: 'Daisy',
    description:
      'A beautiful bouquet of daisies in assorted colors. Perfect for any occasion, from birthdays to graduations to thank you gifts.',
    price: 29.99,
    imageUrl:
      'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?cs=srgb&dl=pexels-pixabay-67857.jpg&fm=jpg',
    category: 'Flowers',
    tags: ['daisies', 'bouquet', 'colorful', 'gift'],
    rating: 4.6,
    reviews: [
      {
        author: 'Lisa Chen',
        rating: 5,
        comment:
          'This bouquet of daisies was exactly what I was looking for! The colors were so bright and cheerful, and the flowers lasted for over a week. I would definitely recommend this product.'
      },
      {
        author: 'Mark Thompson',
        rating: 4,
        comment:
          'The daisies were lovely, but a few of them started wilting after a few days. Overall, I was happy with my purchase.'
      }
    ]
  },
  {
    name: 'Sunflower',
    description: 'A beautiful bouquet of large, golden sunflowers. Perfect for any occasion',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFVbbugrvAmVQn-eD7tJye1F59ACJ04yxMVXUzjlDE_tQ3ODfQEazuex0wOMfIE73ZDQ&usqp=CAU'
  }
];

function ProductBox({ title, imageUrl, description }) {
  const { theme } = useTheme();

  return (
    <>
      <NavLink
        screen={ROUTES.PRODUCT_INFO}
        params={{
          product: title
        }}
      >
        <Card containerStyle={styles.card}>
          <View style={styles.productBoxCard}>
            <View>
              <ImageBackground source={{ uri: imageUrl }} style={styles.productBoxImage}>
                <Text h4 h4Style={{ ...styles.productBoxCardTitle, color: theme.colors.white }}>
                  {title}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.rightContent}>
              <Text h4>{title}</Text>
              <Text numberOfLines={5}>{description}</Text>
              <View style={styles.buttonWrapper}>
                <Button size="sm" type="outline">
                  Add Cart
                </Button>
                <Button size="sm" color={theme.colors.success}>
                  Buy Now
                </Button>
              </View>
            </View>
          </View>
        </Card>
      </NavLink>
      <View style={styles.separator} />
    </>
  );
}

ProductBox.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text h4>Explore Category of Flowers</Text>
      <View style={styles.productList}>
        <FlatList
          nestedScrollEnabled
          data={flowers}
          renderItem={({ item }) => (
            <ProductBox title={item.name} imageUrl={item.imageUrl} description={item.description} />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={<View style={styles.separator} />}
        />
      </View>
      <View />
    </View>
  );
}

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  buttonWrapper: {
    bottom: 8,
    flexDirection: 'row',
    gap: 8,
    margin: 0,
    marginTop: 16,
    padding: 0,
    position: 'absolute'
  },
  card: {
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    width
  },
  container: {
    marginVertical: 20
  },
  productBoxCard: { flexDirection: 'row', gap: 8, margin: 0, padding: 0 },
  productBoxCardTitle: {
    bottom: 5,
    left: 10,
    position: 'absolute'
  },
  productBoxImage: {
    aspectRatio: 4 / 6,
    height: 170
  },
  productList: {
    marginTop: 16
  },
  rightContent: { flex: 1, position: 'relative' },
  separator: {
    height: 10 // Add width to add gap
  }
});

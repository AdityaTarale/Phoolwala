import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavLink } from '@components';
import { Badge, Card, Icon } from '@rneui/themed';

import ROUTES from '../../navigation/ROUTES';

export default function HeaderBar() {
  return (
    <Card>
      <View style={styles.headerBar}>
        <Text>Search for product, item or more</Text>
        <View style={styles.headerBarRight}>
          <Icon name="microphone" size={24} color="gray" type="foundation" />
          <NavLink screen={ROUTES.CART} params={{}}>
            <Icon name="shopping-cart" type="feather" size={24} color="gray" />
            <Badge status="primary" value={2} />
          </NavLink>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerBarRight: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18
  }
});

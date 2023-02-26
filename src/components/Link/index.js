import React from 'react';
import { Link } from '@react-navigation/native';
import { Text } from '@rneui/themed';
import PropTypes from 'prop-types';

const propTypes = {
  screen: PropTypes.string.isRequired,
  params: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired
};

export default function NavLink({ screen, params, children }) {
  return (
    <Link to={{ screen, params }}>
      <Text>{children}</Text>
    </Link>
  );
}

NavLink.propTypes = propTypes;

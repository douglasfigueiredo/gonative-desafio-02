import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, onRepositoryClick }) => (
  <TouchableOpacity style={styles.container} onPress={() => onRepositoryClick(repository)}>
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />

    <View style={styles.data}>
      <Text style={styles.name}>
        {repository.name}
      </Text>
      <Text style={styles.organization}>
        {repository.owner.login}
      </Text>
    </View>

    <Icon name="chevron-right" size={16} style={styles.icon} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  onRepositoryClick: PropTypes.func.isRequired,
};

export default RepositoryItem;

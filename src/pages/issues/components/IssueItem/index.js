import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity onPress={() => Linking.openURL(issue.url)} style={styles.container}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />

    <View style={styles.data}>
      <View style={styles.limiter}>
        <Text style={styles.title} numberOfLines={1}>
          {issue.title}
        </Text>
      </View>
      <Text style={styles.author}>
        {issue.user.login}
      </Text>
    </View>

    <Icon name="chevron-right" size={20} style={styles.icon} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

import { View, FlatList, AsyncStorage } from 'react-native';

import RepositoryItem from './components/RepositoryItem';
import Header from './components/Header';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositories: [],
    refreshing: false,
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(await AsyncStorage.getItem('@GitIssues:repositories')) || [];

    this.setState({ repositories, refreshing: false });
  };

  handleAddRepository = async (repository) => {
    const { repositories } = this.state;

    const response = await api.get(`/repos/${repository}`);

    const newRepositories = [...repositories, response.data];

    await AsyncStorage.setItem('@GitIssues:repositories', JSON.stringify(newRepositories));

    this.setState({ repositories: newRepositories });
  };

  handleRepositoryClick = (repository) => {
    const { navigation } = this.props;

    navigation.navigate('Issues', { repository });
  };

  renderHeader = () => <Header onAddRepository={this.handleAddRepository} />;

  renderItem = ({ item }) => (
    <RepositoryItem repository={item} onRepositoryClick={this.handleRepositoryClick} />
  );

  render() {
    const { repositories, refreshing } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={this.renderHeader}
          data={repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          onRefresh={this.load}
          refreshing={refreshing}
        />
      </View>
    );
  }
}

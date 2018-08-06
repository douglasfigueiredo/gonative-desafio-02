import React, { Component } from 'react';
import api from 'services/api';

import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import IssueItem from './components/IssueItem';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name,
  });

  availableFilters = [
    { state: 'all', label: 'Todas' },
    { state: 'open', label: 'Abertas' },
    { state: 'closed', label: 'Fechadas' },
  ];

  state = {
    issues: [],
    filter: 'all',
    loading: false,
  };

  async componentDidMount() {
    const filter = (await AsyncStorage.getItem('@GitIssues:filter')) || 'all';

    this.setState({ filter }, this.loadIssues);
  }

  handleChangeFilter = async (filter) => {
    await AsyncStorage.setItem('@GitIssues:filter', filter);

    this.setState({ filter }, this.loadIssues);
  };

  loadIssues = async () => {
    this.setState({ loading: true });

    const { filter } = this.state;
    const { navigation } = this.props;
    const { repository } = navigation.state.params;

    const response = await api.get(`repos/${repository.full_name}/issues`, {
      params: { state: filter },
    });

    this.setState({ issues: response.data, loading: false });
  };

  renderItem = ({ item }) => <IssueItem issue={item} />;

  render() {
    const { issues, loading, filter: activeFilter } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.filtersContainer}>
          {this.availableFilters.map(filter => (
            <TouchableOpacity
              key={filter.state}
              onPress={() => this.handleChangeFilter(filter.state)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter.state === activeFilter ? styles.activeFilterText : {},
                ]}
              >
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {loading ? (
          <ActivityIndicator size="small" style={styles.loading} />
        ) : (
          <FlatList
            data={issues}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    onAddRepository: PropTypes.func.isRequired,
  };

  state = {
    newRepository: '',
  };

  handleAddRepository = async () => {
    const { onAddRepository } = this.props;
    const { newRepository } = this.state;

    if (!newRepository.length) return;

    await onAddRepository(newRepository);

    this.setState({ newRepository: '' });
  };

  render() {
    const { newRepository } = this.state;

    return (
      <View style={styles.listHeaderContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Adicionar novo repositório"
          style={styles.headerInput}
          value={newRepository}
          onChangeText={text => this.setState({ newRepository: text })}
        />
        <TouchableOpacity onPress={this.handleAddRepository}>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

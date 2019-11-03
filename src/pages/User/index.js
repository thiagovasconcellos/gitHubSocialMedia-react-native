import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = api.get(`users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    return <View />;
  }
}

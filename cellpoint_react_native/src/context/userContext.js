import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const { Provider: UserProvider, Consumer: UserConsumer } = createContext();

export default class UserContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    loading: false,
    error: false,
    users: [],
    loadUser: async () => {
      try {
        this.setState({ loading: true });
        const res = await fetch('http://localhost:3004/users');
        const users = await res.json();
        this.setState({ users });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    },
  };

  render() {
    const { loading, error, users, loadUser } = this.state;
    const { children } = this.props;
    return <UserProvider value={{ loading, error, users, loadUser }}>{children}</UserProvider>;
  }
}

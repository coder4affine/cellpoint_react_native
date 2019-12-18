import React, {Component, createContext} from 'react';

export const {Provider: UserProvider, Consumer: UserConsumer} = createContext();

export default class UserContext extends Component {
  state = {
    loading: false,
    error: false,
    users: [],
    loadUser: async () => {
      try {
        this.setState({loading: true});
        const res = await fetch('http://localhost:3004/users');
        const users = await res.json();
        this.setState({users});
      } catch (error) {
        this.setState({error: error.message});
      } finally {
        this.setState({loading: false});
      }
    },
  };

  render() {
    return (
      <UserProvider value={this.state}>{this.props.children}</UserProvider>
    );
  }
}

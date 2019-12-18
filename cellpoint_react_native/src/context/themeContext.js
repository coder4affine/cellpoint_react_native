/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

export default class ThemeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    theme: 'dark',
    changeTheme: theme => this.setState({ theme }),
  };

  render() {
    const { children } = this.props;
    return <ThemeProvider value={this.state}>{children}</ThemeProvider>;
  }
}

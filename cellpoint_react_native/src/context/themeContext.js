import React, {Component, createContext} from 'react';

export const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
} = createContext();

export default class ThemeContext extends Component {
  state = {
    theme: 'dark',
    changeTheme: theme => this.setState({theme}),
  };

  render() {
    return (
      <ThemeProvider value={this.state}>{this.props.children}</ThemeProvider>
    );
  }
}

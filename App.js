import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppMainNav from './src/navigations'; 

import { theme } from './src/utils/index';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <AppMainNav />
      </ThemeProvider>
    );
  }
}

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/utils/index';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <HomeScreen />
      </ThemeProvider>
    );
  }
}

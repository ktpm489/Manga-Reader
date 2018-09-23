import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import { AppMainNav } from './src/navigations'; 
import { theme } from './src/utils/index';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>      
        <ThemeProvider theme={theme}>
          <AppMainNav />
        </ThemeProvider>
      </Provider>
    );
  }
}

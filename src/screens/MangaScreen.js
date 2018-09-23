import React, { Component } from 'react';
import styled from 'styled-components/native';

import { theme } from '../utils/index';

const Root = styled.View`
  backgroundColor: ${props => props.theme.PRIMARY};
  flex: 1;
  alignItems: center;
  position: relative;
`;
const ChapterText = styled.Text`
  fontSize: 20;
  color: white;
`;
class MangaScreen extends Component {
  static navigationOptions  = () => ({
    title: 'One Piece',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: theme.PRIMARY,
      borderBottomWidth: 0,
    }
  })
  render () {
    return (
      <Root>
        <ChapterText>Hello</ChapterText>
      </Root>
    );
  }
}

export default MangaScreen;

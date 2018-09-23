import React from 'react';
import styled from 'styled-components/native';

import logo from '../op.png';

const ImageContainer = styled.View`
  justifyContent: center;
  flex: 1;
  shadowColor: black;
  shadowOffset: 5px 5px;
  shadowOpacity: 0.5;
  alignSelf: stretch;
  width: 250;
`;

const Root = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const MangaCover = styled.Image`
  height: null;
  width: null;
  flex: 1;
`;

const MangaText = styled.Text`
  fontSize: 36;
  color: white;
  marginBottom: 20;
`;
const CardView = ({ item, imageHeight }) => { // eslint-disable-line
  return (
    <Root>
      <MangaText>One Piece</MangaText>
      <ImageContainer imageHeight={imageHeight}>
        <MangaCover source={logo} />
      </ImageContainer>
    </Root>
  );
}

export default CardView;

import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import CardView from '../components/CardView';

const { width: viewportWidth } = Dimensions.get('window');
const wp = (percentage) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(68);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const data = [
  {
    index: 1,
    text: 'Hello 1',
  },
  {
    index: 2,
    text: 'Hello 2',
  },
  {
    index: 3,
    text: 'Hello 3',
  },
  {
    index: 4,
    text: 'Hello 4',
  }
];


const Root = styled.View`
  backgroundColor: ${props => props.theme.PRIMARY};
  justifyContent: center;
  alignItems: center;
  flex: 1;
`;

const Wrapper = styled.View`
  justifyContent: center;
  alignItems: center;
  height: 450;
`;

class HomeScreen extends Component {
  renderItem = ({ item }) => {
    return (
      <CardView item={item}/>
    );
  } 
  render() {
    
    return (
      <Root>
        <Wrapper>
        <Carousel
          layout={'default'} 
          ref={(c) => { this._carousel = c; }}
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        </Wrapper>
      </Root>
    );
  }
}

export default HomeScreen;
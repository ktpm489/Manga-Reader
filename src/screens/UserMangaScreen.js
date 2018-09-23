import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CardView from '../components/CardView';
import { theme } from '../utils/index';

const { width: viewportWidth } = Dimensions.get('window');
const wp = (percentage) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(60);
const itemHorizontalMargin = wp(5);

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
  flex: 1;
  alignItems: center;
  position: relative;
`;
const ChapterText = styled.Text`
  fontSize: 20;
  color: white;
`;

const Wrapper = styled.View`
  justifyContent: center;
  alignItems: center;
  height: 100%;
  paddingBottom: 40;
  top: 2%;
`;

const ListBottomContainer = styled.View`
  display: flex;
  width: ${itemWidth};
  flexDirection: column;
  alignItems: flex-end;
  flex: 0.3;
  marginTop: 20;
  justifyContent: space-between;
  paddingVertical: 10;
  paddingHorizontal: 10;
`;

const ReadNowButton = styled.TouchableOpacity`
  paddingVertical: 5;
  paddingHorizontal: 5;
  backgroundColor: ${props => props.theme.YELLOW};
  borderRadius: 4;
`;

const RatingAndDateContainer = styled.View`
  flexDirection: row;
  alignSelf: stretch;
  justifyContent: space-between;
  alignItems: center;
`;

const ReadNowAndChapterContainer = styled.View`
  flexDirection: row;
  alignSelf: stretch;
  justifyContent: space-between;
  alignItems: center;
`;

const VolumeAndAllContainer = styled.View`
  flexDirection: column;
  justifyContent: space-between;
`;
const DateText = styled.Text`
  fontSize: 12;
  color: gray;
`;

class UserMangaScreen extends Component {
  static navigationOptions  = () => ({
    title: 'My Manga',
    headerTintColor: 'white',
    headerRight: (
      <TouchableOpacity>
        <MaterialCommunityIcons name="delete" size={30} color="white" style={{ marginRight: 10 }}/>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: theme.PRIMARY,
      borderBottomWidth: 0,
    }
  })
  renderItem = ({ item }) => {

    return (
      <Wrapper>
        <CardView item={item} imageHeight="500"/>
        <ListBottomContainer>
        <RatingAndDateContainer>
          <DateText>05-01-2018</DateText>
          <StarRating
              disabled={true}
              maxStars={5}
              rating={4}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              starSize={20}
              fullStarColor={theme.YELLOW}
            />
        </RatingAndDateContainer>
        <ReadNowAndChapterContainer>
          <VolumeAndAllContainer>
            <ChapterText>Volume 24</ChapterText>
            <TouchableOpacity><DateText>All Chapters</DateText></TouchableOpacity>
          </VolumeAndAllContainer>
          <ReadNowButton onPress={() => this.props.navigation.navigate('Manga')}>
            <ChapterText style={{ fontSize: 12 }}>Read Now</ChapterText>
          </ReadNowButton>
        </ReadNowAndChapterContainer>
      </ListBottomContainer>
    </Wrapper>
    );
  } 
  render() {
    return (
      <Root>
          <Carousel
            layout={'default'} 
            ref={(c) => { this._carousel = c; }}
            data={data}
            hasParallaxImages={true}
            firstItem={1}
            renderItem={this.renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            removeClippedSubviews={true}
            inactiveSlideOpacity={0.2}
          />
      </Root>
    );
  }
}

export default UserMangaScreen;
import React, { PureComponent } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../op.png';
import { theme } from '../utils/index';
import { getAllManga } from '../actions';

const dummyData = [
  {
    index: '1',
    text: 'Hello 1',
  },
  {
    index: '2',
    text: 'Hello 2',
  },
  {
    index: '3',
    text: 'Hello 3',
  },
  {
    index: '4',
    text: 'Hello 4',
  }
];


const Root = styled.View`
  backgroundColor: ${props => props.theme.PRIMARY};
  flex: 1;
  position: relative;
`;

const ListItem = styled.View`
  flex: 1;
  flexDirection: row;
  marginVertical: 5;
  paddingHorizontal: 5;
  justifyContent: space-between;
  width: 100%;
  backgroundColor: ${props => props.theme.PRIMARY};
`;

const TitleLabel = styled.Text`
  marginLeft: 20;
  color: white;
  fontSize: 24;
`;

const MangaCover = styled.Image`
  height: null;
  width: null;
  flex: 1;
`;

const MangaText = styled.Text`
  fontSize: 34;
  color: white;
`;

const ChapterText = styled.Text`
  fontSize: 20;
  color: white;
  marginBottom: 20;
`;

const ImageContainer = styled.View`
  justifyContent: center;
  flex: 0.5;
  shadowColor: black;
  shadowOffset: 5px 5px;
  shadowOpacity: 0.5;
  alignSelf: stretch;
  backgroundColor: red;
  maxHeight: 200;
  marginLeft: 10;
  marginVertical: 20;
`;

const ListRightContainer = styled.View`
  display: flex;
  flexDirection: column;
  marginHorizontal: 10;
  marginVertical: 20;
  alignItems: flex-end;
  flex: 1;
  justifyContent: center;
`;

const ReadNowButton = styled.TouchableOpacity`
  paddingVertical: 5;
  paddingHorizontal: 5;
  backgroundColor: ${props => props.theme.YELLOW};
  borderRadius: 4;
`;

class HomeScreen extends PureComponent {
  state = {
    itemsCount: 15, 
  };
  componentDidMount() {
    this.fetchAllManga();
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     data: nextProps.manga.data,
  //     isLoading: nextProps.manga.isLoading,
  //   })
  // }
  fetchAllManga = () => {
    this.props.getAllManga();
  }
  static navigationOptions  = () => ({
    title: 'Browse',
    headerTintColor: 'white',
    headerRight: (
      <TouchableOpacity>
        <MaterialIcons name="search" size={30} color="white" style={{ marginRight: 10 }}/>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: theme.PRIMARY,
      borderBottomWidth: 0,
    }
  })
  renderItem = ({ item }) => {
    return (
      <ListItem>
        <ImageContainer>
          <MangaCover source={{ uri: `https://cdn.mangaeden.com/mangasimg/${item.im}` }} defaultSource={logo}/>
        </ImageContainer>
        <ListRightContainer>
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
          <MangaText>{(item.t !== null) ? item.t : 'YOOOO'}</MangaText>
          <ChapterText>{(item.a !== null) ? item.a : 'YOOOO'}</ChapterText>
          <ReadNowButton onPress={() => this.props.navigation.navigate('Manga')}>
            <ChapterText style={{ fontSize: 14, color: 'white', marginBottom: 0 }}>Read Now</ChapterText>
          </ReadNowButton>
        </ListRightContainer>
      </ListItem>
    )
  }
  render () {
    const { data, isLoading } = this.props.manga;
    return (
      <Root>
        <TitleLabel>Popular</TitleLabel>
        {(!isLoading && (data !== null)) ? (
            <FlatList
            contentContainerStyle={{ alignSelf: 'stretch' }}
            data={data}
            keyExtractor={(item) => item.i}
            renderItem={this.renderItem}
            removeClippedSubviews={true}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            initialScrollIndex={0}
            extraData={this.props.manga}
          />
        ):
        (<ChapterText>Loading...</ChapterText>)}
      </Root>
    );
  }
}

const mapStateToProps = (state) => ({
  manga: state.manga,
});

export default connect(mapStateToProps, { getAllManga })(HomeScreen);

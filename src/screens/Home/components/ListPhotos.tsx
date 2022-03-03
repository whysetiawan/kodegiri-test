import React, {memo} from 'react';
import {TouchableWithoutFeedback, View, FlatList} from 'react-native';
import {ActivityIndicator, Card, Paragraph} from 'react-native-paper';
import {
  loadMorePhotoRequest,
  searchLoadMorePhotoRequest,
} from '../../../redux/slices/photo';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {IListPhotos} from '../../../shared/models/photo_list_model';
import globalStyles from '../../../shared/styles/globalStyles';

interface IListPhotosComponent {
  onItemImagePress: (item: IListPhotos) => void;
}

const ListPhotos: React.FC<IListPhotosComponent> = ({onItemImagePress}) => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector(state => state.photo);

  function _renderItem({item}: {item: IListPhotos}) {
    return (
      <Card>
        <TouchableWithoutFeedback onPress={_e => onItemImagePress(item)}>
          <Card.Cover source={{uri: item.urls?.regular}} />
        </TouchableWithoutFeedback>
        <Card.Title title={item.user?.name} />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    );
  }

  function _renderFooter() {
    if (photo.isLoadingMore) {
      return (
        <View style={globalStyles.verticalDefaultPadding}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return null;
  }

  return (
    <FlatList
      keyExtractor={(item, index) => `${index}`}
      data={photo.photos}
      renderItem={_renderItem}
      ListFooterComponent={_renderFooter}
      onEndReached={() => {
        if (photo.searchKeyword !== '') {
          dispatch(searchLoadMorePhotoRequest());
        } else {
          dispatch(loadMorePhotoRequest());
        }
      }}
    />
  );
};

export default memo(ListPhotos);

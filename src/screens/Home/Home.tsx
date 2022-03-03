import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {fetchPhotoRequest, searchPhotoRequest} from '../../redux/slices/photo';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import AppModal from '../../shared/components/AppModal';
import debounce from '../../shared/helpers/debounce';
import {
  percentageHeight,
  percentageWidth,
} from '../../shared/helpers/screen_size';
import {IListPhotos} from '../../shared/models/photo_list_model';
import globalStyles from '../../shared/styles/globalStyles';
import ListPhotos from './components/ListPhotos';
import SearchBar from './components/SearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {HomeNavigationProps} from './Home.type';

const HomeScreen: React.FC<HomeNavigationProps> = () => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector(state => state.photo);

  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<IListPhotos>();

  useEffect(() => {
    dispatch(fetchPhotoRequest());
  }, []);

  return (
    <View style={globalStyles.container}>
      <SearchBar
        onChangeText={debounce((val: string) => {
          console.log(val);
          dispatch(searchPhotoRequest(val));
        }, 500)}
      />
      <ListPhotos
        onItemImagePress={item => {
          setShowFullImage(true);
          setSelectedImage(item);
        }}
      />
      <AppModal
        visible={showFullImage}
        modalContainerStyle={{
          justifyContent: 'flex-start',
        }}
        onRequestClose={() => setShowFullImage(false)}>
        <FastImage
          source={{uri: selectedImage?.urls?.regular}}
          style={{
            width: percentageWidth(100),
            height: percentageHeight(100),
          }}
          resizeMode="contain"
        />
        <View style={[globalStyles.absolute]}>
          <TouchableWithoutFeedback onPress={() => setShowFullImage(false)}>
            <View
              style={[
                globalStyles.horizontalDefaultPadding,
                {
                  paddingTop: percentageHeight(4),
                },
              ]}>
              <MaterialIcons name="close" size={40} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </AppModal>
    </View>
  );
};

export default HomeScreen;

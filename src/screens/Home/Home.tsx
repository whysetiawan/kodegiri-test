import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {fetchPhotoRequest} from '../../redux/slices/photo';
import {useAppDispatch} from '../../redux/store';
import debounce from '../../shared/helpers/debounce';
import globalStyles from '../../shared/styles/globalStyles';
import SearchBar from './components/SearchBar';
import type {HomeNavigationProps} from './Home.type';

const HomeScreen: React.FC<HomeNavigationProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotoRequest());
  }, []);

  return (
    <View style={globalStyles.container}>
      <SearchBar
        onChangeText={debounce((val: string) => {
          console.log(val);
        }, 500)}
      />
      <FlatList />
    </View>
  );
};

export default HomeScreen;

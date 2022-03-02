import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/Navigation.type';

export type HomeNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

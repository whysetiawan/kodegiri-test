import {createSlice} from '@reduxjs/toolkit';
import {IPhotoState} from './photo.types';

const initialPhotoState: IPhotoState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState: initialPhotoState,
  reducers: {},
});

export default photoSlice.reducer;

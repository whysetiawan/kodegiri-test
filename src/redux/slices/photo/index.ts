import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {IPhotoModel} from '../../../shared/models/photo_model';
import type {IPhotoState} from './photo.types';

const initialPhotoState: IPhotoState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  photos: [],
};

const photoSlice = createSlice({
  name: 'photo',
  initialState: initialPhotoState,
  reducers: {
    fetchPhotoRequest(state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },
    fetchPhotoSuccess(state, action: PayloadAction<IPhotoModel[]>) {
      state.isLoading = false;
      state.isError = false;
      state.photos = action.payload;
      state.errorMessage = '';
    },
    fetchPhotoFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {fetchPhotoFailure, fetchPhotoRequest, fetchPhotoSuccess} =
  photoSlice.actions;
export default photoSlice.reducer;

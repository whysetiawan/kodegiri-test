import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {
  IListPhotos,
  ISearchPhotos,
} from '../../../shared/models/photo_list_model';
import type {IPhotoState} from './photo.types';

const initialPhotoState: IPhotoState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  photos: [],
  searchKeyword: '',
  page: 1,
  isLoadingMore: false,
  isLoadMoreError: false,
  loadMoreError: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState: initialPhotoState,
  reducers: {
    fetchPhotoRequest(state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
      state.page = 1;
    },
    fetchPhotoSuccess(state, action: PayloadAction<IListPhotos[]>) {
      state.isLoading = false;
      state.isError = false;
      state.photos = action.payload;
      state.errorMessage = '';
      state.page = 2;
    },
    fetchPhotoFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    loadMorePhotoRequest(state) {
      state.searchKeyword = '';
      state.isLoadingMore = true;
      state.isLoadMoreError = false;
      state.loadMoreError = '';
    },
    loadMorePhotoSuccess(state, action: PayloadAction<IListPhotos[]>) {
      state.photos = [...state.photos, ...action.payload];
      state.isLoadMoreError = false;
      state.isLoadingMore = false;
      state.loadMoreError = '';
      state.page = state.page + 1;
    },
    loadMorePhotoFailure(state, action: PayloadAction<string>) {
      state.loadMoreError = action.payload;
      state.isLoadingMore = false;
      state.isLoadMoreError = false;
    },
    searchPhotoRequest(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
      state.searchKeyword = action.payload;
      state.page = 1;
    },
    searchPhotoSuccess(state, action: PayloadAction<IListPhotos[]>) {
      state.isLoading = false;
      state.isError = false;
      state.photos = action.payload;
      state.errorMessage = '';
      state.page = 2;
    },
    searchPhotoFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    searchLoadMorePhotoRequest(state) {
      state.isLoadingMore = true;
      state.isLoadMoreError = false;
      state.loadMoreError = '';
    },
    searchLoadMorePhotoSuccess(state, action: PayloadAction<IListPhotos[]>) {
      state.photos = [...state.photos, ...action.payload];
      state.isLoadMoreError = false;
      state.isLoadingMore = false;
      state.loadMoreError = '';
      state.page = state.page + 1;
    },
    searchLoadMorePhotoFailure(state, action: PayloadAction<string>) {
      state.loadMoreError = action.payload;
      state.isLoadingMore = false;
      state.isLoadMoreError = false;
    },
  },
});

export const {
  fetchPhotoFailure,
  fetchPhotoRequest,
  fetchPhotoSuccess,
  loadMorePhotoRequest,
  loadMorePhotoSuccess,
  loadMorePhotoFailure,
  searchPhotoSuccess,
  searchPhotoRequest,
  searchPhotoFailure,
  searchLoadMorePhotoFailure,
  searchLoadMorePhotoRequest,
  searchLoadMorePhotoSuccess,
} = photoSlice.actions;
export default photoSlice.reducer;

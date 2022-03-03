// import {CacheAxiosResponse} from 'axios-cache-interceptor';
import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
  getListPhotos,
  searchPhotoByKeyword,
} from '../../../services/photoService';
import {IListPhotos} from '../../../shared/models/photo_list_model';
import {
  fetchPhotoFailure,
  fetchPhotoRequest,
  fetchPhotoSuccess,
  loadMorePhotoFailure,
  loadMorePhotoRequest,
  loadMorePhotoSuccess,
  searchLoadMorePhotoFailure,
  searchLoadMorePhotoRequest,
  searchLoadMorePhotoSuccess,
  searchPhotoFailure,
  searchPhotoRequest,
  searchPhotoSuccess,
} from '../../slices/photo';
import type {IPhotoState} from '../../slices/photo/photo.types';
import type {RootState} from '../../store';

const getPhotoState = (state: RootState) => state.photo;

function* fetchPhoto() {
  try {
    const photoState: IPhotoState = yield select(getPhotoState);
    console.log('fetching photo');
    const photos: IListPhotos[] = yield call(getListPhotos, photoState.page);
    yield put(fetchPhotoSuccess(photos));
    console.log('Fetch photo finished');
  } catch (error) {
    console.log(error);
    yield put(fetchPhotoFailure('Something went wrong'));
  }
}

function* loadMorePhoto() {
  try {
    const photoState: IPhotoState = yield select(getPhotoState);

    const photos: IListPhotos[] = yield call(getListPhotos, photoState.page);
    yield put(loadMorePhotoSuccess(photos));
    console.log('Fetch photo finished');
  } catch (error) {
    console.log(error);
    yield put(loadMorePhotoFailure('Something went wrong'));
  }
}

function* searchPhoto() {
  try {
    const photoState: IPhotoState = yield select(getPhotoState);
    console.log('fetching photo');
    const photos: IListPhotos[] = yield call(
      searchPhotoByKeyword,
      photoState.searchKeyword,
      photoState.page,
    );
    yield put(searchPhotoSuccess(photos));
    console.log('Fetch photo finished');
  } catch (error) {
    console.log(error);
    yield put(searchPhotoFailure('Something went wrong'));
  }
}

function* searchLoadMorePhoto() {
  try {
    const photoState: IPhotoState = yield select(getPhotoState);
    console.log('fetching photo');
    const photos: IListPhotos[] = yield call(
      searchPhotoByKeyword,
      photoState.searchKeyword,
      photoState.page,
    );
    yield put(searchLoadMorePhotoSuccess(photos));
    console.log('Fetch photo finished');
  } catch (error) {
    console.log(error);
    yield put(searchLoadMorePhotoFailure('Something went wrong'));
  }
}

export default function* photoSaga() {
  yield takeEvery(fetchPhotoRequest, fetchPhoto);
  yield takeEvery(loadMorePhotoRequest, loadMorePhoto);
  yield takeEvery(searchPhotoRequest, searchPhoto);
  yield takeEvery(searchLoadMorePhotoRequest, searchLoadMorePhoto);
}

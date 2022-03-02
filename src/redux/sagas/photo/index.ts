import {CacheAxiosResponse} from 'axios-cache-interceptor';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getListPhotos} from '../../../services/photoService';
import {IPhotoModel} from '../../../shared/models/photo_model';
import {
  fetchPhotoFailure,
  fetchPhotoRequest,
  fetchPhotoSuccess,
} from '../../slices/photo';

function* fetchPhoto() {
  try {
    console.log('fetching photo');
    const photos: CacheAxiosResponse<IPhotoModel[]> = yield call(getListPhotos);
    yield put(fetchPhotoSuccess(photos.data));
  } catch (error) {
    yield put(fetchPhotoFailure('Something went wrong'));
  }
}

export default function* photoSaga() {
  yield takeEvery(fetchPhotoRequest, fetchPhoto);
}

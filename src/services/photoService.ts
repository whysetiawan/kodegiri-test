import apiClient from '../shared/helpers/apiClient';
import {IPhotoModel} from '../shared/models/photo_model';

function getListPhotos() {
  return apiClient.get<IPhotoModel>('/photos', {
    params: {
      page: 1,
      per_page: 3,
    },
  });
}

export {getListPhotos};

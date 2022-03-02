import type {IPhotoModel} from '../../../shared/models/photo_model';

export interface IPhotoState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  photos: IPhotoModel[];
}

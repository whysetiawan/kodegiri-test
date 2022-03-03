import type {IListPhotos} from '../../../shared/models/photo_list_model';

export interface IPhotoState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  isLoadingMore: boolean;
  isLoadMoreError: boolean;
  loadMoreError: string;
  photos: IListPhotos[];
  page: number;
  searchKeyword: string;
}

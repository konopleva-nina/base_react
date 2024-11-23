export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosStore = {
  /*Photo count state */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;
  /*Photos state*/
  isPhotosLoading: boolean;
  photos: PhotoFromAPI[] | [];
  photosErrorMessage: string;
  getPhotos: (photoCount: number) => void;
  resetPhotos: () => void;
  /*Photo state */
  isPhotoLoading: boolean;
  photo: PhotoFromAPI | null;
  photoErrorMessage: string;
  getPhotoById: (photoId: string) => void;
  resetPhoto: () => void;
};

export type SetterCallback = (store: PhotosStore) => PhotosStore;
export type PhotosStoreCreator = (set: Function) => PhotosStore;

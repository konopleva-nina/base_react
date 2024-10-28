export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosStore = {
  /*State for count */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;
  /*State for photos */
  photos: PhotoFromAPI[] | [];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: (photoCount: number) => void;
  resetPhotos: () => void;
};

export type PhotosStoreCreator = (set: Function) => PhotosStore;

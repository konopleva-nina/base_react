export type PhotoDetails = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Photos = {
  photos: PhotoDetails[];
};

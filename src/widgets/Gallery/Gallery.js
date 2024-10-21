import style from './Gallery.module.scss';
import { PhotosCounter, Photos } from 'features';
import { useEffect } from 'react';
import { usePhotos } from 'shared/hooks';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photoState = usePhotos();

  useEffect(() => {
    if (!photoState.photoCount) return;
    photoState.getPhotos(photoState.photoCount);
  }, [photoState.photoCount]);

  return (
    <div className={style.gallery}>
      <PhotosCounter />
      {!photoState.photoCount && <h2>Press the Up button to add photos</h2>}
      {photoState.isPhotosLoading ? (
        <h1>Loading ......</h1>
      ) : (
        <Photos photos={photoState.photos} />
      )}
    </div>
  );
};

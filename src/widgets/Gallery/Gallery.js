import style from './Gallery.module.scss';
import { PhotoCounter, Photos } from 'features';
import { useEffect } from 'react';
import { usePhotos } from 'shared/hooks';
import { Preloader } from 'shared/ui/Preloader';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photosStore = usePhotos();

  useEffect(() => {
    if (!photosStore.photoCount) return;
    photosStore.getPhotos(photosStore.photoCount);
  }, [photosStore.photoCount]);

  return (
    <div className={style.gallery}>
      <PhotoCounter />
      {!photosStore.photoCount && <h2>Press the Up button to add photos</h2>}
      <Photos photos={photosStore.photos} />
      <Preloader isActive={photosStore.isPhotosLoading}/>
    </div>
  );
};

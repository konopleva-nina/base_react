import { usePhotos } from 'shared/stores';
import { Counter } from 'entities/index';

/**
 * @function PhotoCounter
 * @returns {JSX.Element}
 */

export const PhotoCounter = () => {
  const photosStore = usePhotos();
  return (
    <Counter name={'Photos count'}
      minCount={4}
      count={photosStore.photoCount}
      maxCount={20}
      setCount={photosStore.setPhotoCount}
      resetCount={photosStore.resetPhotos}
      isDisabled={photosStore.isPhotosLoading}
    />
  );
};

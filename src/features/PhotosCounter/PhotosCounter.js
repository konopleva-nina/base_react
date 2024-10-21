import { usePhotos } from 'shared/hooks';
import { Counter } from 'entities/index';

/**
 * @function PhotosCounter
 * @returns {JSX.Element}
 */

export const PhotosCounter = () => {
  const photosState = usePhotos();
  return (
    <Counter name={'Photos count'}
      minCount={4}
      count={photosState.photoCount}
      maxCount={20}
      setCount={photosState.setPhotoCount}
      resetCount={photosState.resetPhotos}
    />
  );
};

import { useParams } from 'react-router-dom';
import { usePhotos } from 'shared/hooks';
import { useEffect } from 'react';
import { Preloader } from 'shared/ui/Preloader';

/**
 * @function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotos();

  if (!params.photoId) return <h3>Invalid photo id</h3>;

  useEffect(() => {
    if (!params.photoId) return;
    photosStore.getPhotoById(params.photoId);
  }, []);

  if (!photosStore.photo) return <h3>Photo not found</h3>;

  return (
    <>
      <div>
        <h2>{photosStore.photo.title}</h2>
        <img src={photosStore.photo.thumbnailUrl}
          alt={photosStore.photo.title}
        />
      </div>
      <Preloader isActive={photosStore.isPhotoLoading}/>
    </>
  );
};

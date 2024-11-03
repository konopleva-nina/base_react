import style from './Photos.module.scss';
import { Card } from '../../entities';

/**
 * @typedef {import('./types').Photos} Photos
 */

/**
 * @function Photos
 * @param {Photos} props
 * @returns {JSX.Element}
 */

export const Photos = (props) => {
  const { photos } = props;
  return (
    <ul className={style.photos}>
      {photos.map((/**@type {object} */ photo) => (
        <Card.Photo key={photo.id}
          id={photo.id}
          name={photo.title}
          image={photo.thumbnailUrl}
        />
      ))}
    </ul>
  );
};

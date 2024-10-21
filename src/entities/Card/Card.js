import style from './Card.module.scss';
import { getRandomColor } from 'shared/ui/getRandomColor';

/**
 * @typedef {import('./types').CardDetails} CardDetails
 */

/**
 * @function Card
 * @param {CardDetails} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const { id, name, image, text } = props;

  return (
    <li className={style.card}
      style={{ background: getRandomColor() }}
    >
      {/* name */}
      {name && (
        <h2 className={style.name}>
          {name}
        </h2>
      )}
      {/* image */}
      {image && (
        <img className={style.image}
          src={image}>
        </img>
      )}
      {/* text */}
      {text && (
        <p className={style.text}>
          {text}
        </p>
      )}
    </li>
  );
};

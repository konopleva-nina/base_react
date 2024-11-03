import { Link } from 'react-router-dom';
import style from './Card.module.scss';
import { getRandomColor } from 'shared/utils/getRandomColor';

/**
 * @typedef {import('./types').PhotoDetails} PhotoDetails
 * @typedef {import('./types').TodoDetails} TodoDetails
 * @typedef {import('./types').PostDetail} PostDetail
 * @typedef {import('./types').Card} Card
 */

/**
 * @function Photo
 * @param {PhotoDetails} props
 */

const Photo = (props) => {
  const { id, name, image } = props;
  const endPoint = `/photo/${id}`;

  return (
    <>
      <Link to={endPoint}>
        <li className={style.card}
          style={{ background: getRandomColor() }}
        >
          <h2 className={style.name}>
            {name}
          </h2>
          <img className={style.image}
            src={image}>
          </img>
        </li>
      </Link>
    </>
  );
};

/**
 * @function Todo
 * @param {TodoDetails} props
 */

const Todo = (props) => {
  const { id, name } = props;
  const endPoint = `/todo/${id}`;
  return (
    <>
      <Link to={endPoint}>
        <li className={style.card}
          style={{ background: getRandomColor() }}
        >
          <h2 className={style.name}>
            {name}
          </h2>
        </li>
      </Link>
    </>
  );
};

/**
 * @function Post
 * @param {PostDetail} props
 */

const Post = (props) => {
  const { id, name, text } = props;
  const endPoint = `/post/${id}`;
  return (
    <>
      <Link to={endPoint}>
        <li className={style.card}
          style={{ background: getRandomColor() }}
        >
          <h2 className={style.namePost}>
            {name}
          </h2>
          <p className={style.text}>
            {text}
          </p>
        </li>
      </Link>
    </>
  );
};

/**
 * @function Card
 * @param {Card} props
 * @returns {JSX.Element}
 */

/**@type {Card} */
export const Card = {
  Photo,
  Todo,
  Post,
};

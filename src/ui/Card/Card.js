import './Card.css';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const { id, title, url } = props;
  return (
    <li className={'card'}>
      <h2>{title}</h2>
      <img src={url}></img>
    </li>
  );
};

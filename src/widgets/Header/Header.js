import style from './Header.module.scss';
import { Link } from 'react-router-dom';

/**
 * @typedef {import('./types').HeaderProps} HeaderProps
 */
/**
 * @function Header
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */
export const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/photos'}>Gallery</Link>
          </li>
          <li>
            <Link to={'/todos'}>Tasks</Link>
          </li>
          <li>
            <Link to={'/posts'}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

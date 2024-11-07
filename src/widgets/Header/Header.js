import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

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
    <header className={style.header}>
      <h1 className={style.title}>{props.title}</h1>
      <nav className={style.nav}>
        <ul>
          <li className={style.item}>
            <NavLink to={'/'}
              className={({ isActive }) => isActive ? style.active : ''}
            >
              Home
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to={'/photos'}
              className={({ isActive }) => isActive ? style.active : ''}
            >
              Gallery
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to={'/todos'}
              className={({ isActive }) => isActive ? style.active : ''}
            >
              Tasks
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to={'/posts'}
              className={({ isActive }) => isActive ? style.active : ''}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

import style from './Preloader.module.scss';

/**
 * @typedef {import('./types').Preloader} Preloader
 */

/**
 * @function Preloader
 * @param {Preloader} props
 * @returns {JSX.Element | null}
 */

export const Preloader = (props) => {
  const { isActive } = props;
  if (!isActive) return null;

  return (
    <div className={style.preloader}>
      <div className={style.wrapper}>
        <div className={style.loader}></div>
      </div>
    </div>
  );
};

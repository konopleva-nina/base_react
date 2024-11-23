import style from './Button.module.scss';

/**
 * @typedef {import('./types').ButtonProps} ButtonProps
 */
/**
 * @function Button
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
export const Button = (props) => {
  return (
    <button className={style.button}
      type={props.type}
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

import style from './Input.module.scss';

/**
 * @typedef {import('./types').InputProps} InputProps
 */
/**
 * @function Input
 * @param {InputProps} props
 * @returns {JSX.Element}
 */
export const Input = (props) => {
  return (
    <input className={style.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

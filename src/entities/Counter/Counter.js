import style from './Counter.module.scss';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @return {JSX.Element}
 */

export const Counter = (props) => {
  const { count, setCount, name, resetCount } = props;

  const minCount = props.minCount ? props.minCount : 0;
  const maxCount = props.maxCount ? props.maxCount : 20;

  const handleCountDownClick = () => {
    if (count <= minCount) return;
    setCount(count - 1);
  };

  const handleCountUpClick = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  const handleResetClick = () => {
    setCount(0);
    resetCount();
  };

  return (
    <div className={style.counter}>
      {/*title*/}
      <h2 className={style.title}>{name}: {count}</h2>
      {/*Down*/}
      <button className={style.button}
        disabled={count <= minCount}
        onClick={handleCountDownClick}
      >
        Down
      </button>
      {/*Up*/}
      <button className={style.button}
        disabled={count >= maxCount}
        onClick={handleCountUpClick}
      >
        Up
      </button>
      {/*Reset*/}
      <button className={style.button}
        disabled={!count}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};

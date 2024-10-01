import './Counter.css';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @return {JSX.Element | null}
 */

export const Counter = (props) => {
  const { minCount, maxCount, count, setCount } = props;

  const handleCountDownClick = () => {
    if (count <= minCount) return;
    setCount(count - 1);
  };

  const handleCountUpClick = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className={'counter'}>
      <h2>Counter: {count}</h2>
      <button className={'button'}
        disabled={count <= minCount}
        onClick={handleCountDownClick}
      >
        Down
      </button>
      <button className={'button'}
        disabled={count >= maxCount}
        onClick={handleCountUpClick}
      >
        Up
      </button>
    </div>
  );
};

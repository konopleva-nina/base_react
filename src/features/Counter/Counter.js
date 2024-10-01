import { useState } from 'react';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @return {JSX.Element | null}
 */

export const Counter = (props) => {
  const { startCount, minCount, maxCount } = props;
  const [count, setCount] = useState(startCount);

  const handleCountDownClick = () => {
    if (count <= minCount) return;
    setCount(count - 1);
  };

  const handleCountUpClick = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button
        disabled={count <= minCount}
        onClick={handleCountDownClick}
      >
        -
      </button>
      <button
        disabled={count >= maxCount}
        onClick={handleCountUpClick}
      >
        +
      </button>
    </div>
  );
};

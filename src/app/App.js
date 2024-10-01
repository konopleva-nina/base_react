import { Counter } from 'features/index';
import './App.css';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function Counter
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App  = (props) => {
  return (
    <div className="app">
      <h1>{props.name}</h1>
      <Counter
        minCount={0}
        startCount={0}
        maxCount={10}
      />
    </div>
  );
};

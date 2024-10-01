import './App.css';
import { Counter, Cards } from 'features';
import { API_URL } from 'config';
import { useState, useEffect } from 'react';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function Counter
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const [count, setCount] = useState(1);
  const [cards, setCard] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}photos?_start=0&_limit=${count}`);
        const cardsFromAPI = await response.json();
        setCard(cardsFromAPI);
      } catch (/**@type {*}*/ error) {
        setError(error.message);
      };
      setIsLoading(false);
    };
    fetchData();
  }, [count]);

  // useEffect(() => {
  //   fetch(`${API_URL}photos?_start=0&_limit=${count}`)
  //     .then((response) => response.json())
  //     .then((cardsFromAPI) => setCard(cardsFromAPI))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, [count]);

  if (error) {
    return <h1>Error: {error}</h1>;
  };

  return (
    <div className={'app'}>
      <h1>{props.name}</h1>
      <Counter
        count={count}
        setCount={setCount}
        minCount = {0}
        maxCount = {100}
      />
      {isLoading ? (
        <h1>Loading ......</h1>
      ) : (
        <Cards cards={cards} />
      )}
    </div>
  );
};

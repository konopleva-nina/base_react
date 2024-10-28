import style from './App.module.scss';
import { useEffect } from 'react';
import { usePhotos, useTodos } from 'shared/hooks';
import { Gallery, Tasks } from 'widgets';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function Counter
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const defaultCount = 5;
  const photosState = usePhotos();
  const todosState = useTodos();

  useEffect(() => {
    photosState.setPhotoCount(defaultCount);
    todosState.setTodoCount(defaultCount);
  }, []);

  return (
    <div className={style.app}>
      <h1>{props.name}</h1>
      <Gallery />
      <Tasks />
    </div>
  );
};

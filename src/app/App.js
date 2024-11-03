import style from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { usePhotos, useTodos } from 'shared/hooks';
import { HomePage, PhotoPage, PhotosPage, PostPage, PostsPage, TodoPage, TodosPage } from 'pages';

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
    <BrowserRouter >
      <div className={style.app}>
        <h1>{props.name}</h1>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/photos'}>Gallery</Link>
            </li>
            <li>
              <Link to={'/todos'}>Tasks</Link>
            </li>
            <li>
              <Link to={'/posts'}>Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/photos'} element={<PhotosPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/posts'} element={<PostsPage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
          <Route path={'/post/:postId'} element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


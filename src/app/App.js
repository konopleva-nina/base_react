import style from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePhotos, usePosts, useTodos } from 'shared/stores';
import { HomePage, PhotoPage, PhotosPage, PostPage, PostsPage, TodoPage, TodosPage } from 'pages';
import { Header } from 'widgets';

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
  const postsState = usePosts();

  useEffect(() => {
    photosState.setPhotoCount(defaultCount);
    todosState.setTodoCount(defaultCount);
    postsState.setPostCount(defaultCount);
  }, []);

  return (
    <BrowserRouter >
      <div className={style.app}>
        <Header title={props.name}/>
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


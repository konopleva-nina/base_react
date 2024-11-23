import style from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { UilEdit } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { Preloader } from 'shared/ui/Preloader';
import { Button } from 'shared/ui';
import { Post } from 'features';

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();
  const [isPostUpdateOpen, setIsPostUpdateOpen] = useState(false);
  const [isPostDeleteOpen, setIsPostDeleteOpen] = useState(false);

  if (!params.postId) return <h3>Invalid post id</h3>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPostById(params.postId);
  }, [params.postId]);

  const handlePostUpdateClose = () => {
    setIsPostUpdateOpen(false);
    if (params.postId) postsStore.getPostById(params.postId);
  };

  const handlePostDeleteClose = () => {
    setIsPostDeleteOpen(false);
    if (params.postId) postsStore.getPostById(params.postId);
  };

  if (!postsStore.post) return <Preloader isActive={postsStore.isPostLoading}/>;

  return (
    <>
      <div className={style.postPage}>
        <h2 className={style.title}>{postsStore.post.title}</h2>
        <p>{postsStore.post.body}</p>
        <div className={style.buttons}>
          <Button type={'button'}
            onClick={() => setIsPostUpdateOpen(true)}
          >
            <UilEdit size={'25'}/>
          </Button>
          <Button type={'button'}
            onClick={() => setIsPostDeleteOpen(true)}
          >
            <UilTrashAlt size={'25'}/>
          </Button>
        </div>
        <Post.Editor isOpen={isPostUpdateOpen}
          onClose={handlePostUpdateClose}
        />
        <Post.Deleter isOpen={isPostDeleteOpen}
          onClose={handlePostDeleteClose}
        />
      </div>
    </>
  );
};

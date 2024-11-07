import style from './ListPosts.module.scss';
import { usePosts } from 'shared/hooks';
import { PostCounter, Posts } from 'features';
import { Preloader } from 'shared/ui/Preloader';
import { useEffect } from 'react';

/**
 * @function ListPosts
 * @returns {JSX.Element}
 */

export const ListPosts = () => {
  const postsStore = usePosts();

  useEffect(() => {
    if (!postsStore.postCount) return;
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  return (
    <div className={style.listPosts}>
      <PostCounter />
      {!postsStore.postCount && <h2>Press the Up button to add photos</h2>}
      <Posts posts={postsStore.posts} />
      <Preloader isActive={postsStore.isPostsLoading} />
    </div>
  );
};

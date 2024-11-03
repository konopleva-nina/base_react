import { Counter } from 'entities/index';
import { usePosts } from 'shared/hooks';

/**
 * @function PostCounter
 * @returns {JSX.Element}
 */

export const PostCounter = () => {
  const postsStore = usePosts();
  return (
    <Counter
      name={'Posts count'}
      minCount = {4}
      count={postsStore.postCount}
      maxCount = {20}
      setCount={postsStore.setPostCount}
      resetCount={postsStore.resetPosts}
      isDisabled={postsStore.isPostsLoading}
    />
  );
};

import { Counter as UiCounter } from 'entities/index';
import { usePosts } from 'shared/stores';

/**
 * @function PostCounter
 * @returns {JSX.Element}
 */

export const Counter = () => {
  const postsStore = usePosts();
  return (
    <UiCounter
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

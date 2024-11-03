import { useParams } from 'react-router-dom';
import { usePosts } from 'shared/hooks';
import { useEffect } from 'react';
import { Preloader } from 'shared/ui/Preloader';

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();

  if (!params.postId) return <h3>Invalid post id</h3>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPostById(params.postId);
  }, []);

  if (!postsStore.post) return <h3>Post not found</h3>;

  return (
    <>
      <div>
        <h2>{postsStore.post.title}</h2>
        <p>{postsStore.post.body}</p>
      </div>
      <Preloader isActive={postsStore.isPostLoading}/>
    </>
  );
};

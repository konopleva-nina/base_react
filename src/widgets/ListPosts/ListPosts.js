import style from './ListPosts.module.scss';
import { AppstoreAddOutlined } from 'shared/icons';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { Card } from 'entities/index';
import { Preloader } from 'shared/ui/Preloader';
import { Post } from 'features';

/**
 * @function ListPosts
 * @returns {JSX.Element}
 */

export const ListPosts = () => {
  const postsStore = usePosts();
  const [isPostCreationOpen, setIsPostCreationOpen] = useState(false);

  useEffect(() => {
    if (!postsStore.postCount) return;
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  const handlePostCreationClose = () => {
    setIsPostCreationOpen(false);
    postsStore.getPosts(postsStore.postCount);
  };

  return (
    <div className={style.listPosts}>
      {/* Counter */}
      <Post.Counter />
      {/* Create post button */}
      <Button type={'button'}
        onClick={() => setIsPostCreationOpen(true)}
        isDisabled={postsStore.isPostsLoading}
      >
        <AppstoreAddOutlined />
      </Button>
      {/* Posts */}
      {!postsStore.postCount && <h2>Press the Up button to add photos</h2>}
      <ul className={style.posts}>
        {postsStore.posts.map((post) => (
          <Card.Post key={post.id}
            id={post.id}
            name={post.title}
            text={post.body}
          />
        ))}
      </ul>
      <Preloader isActive={postsStore.isPostsLoading} />
      {/* Modal */}
      <Post.Creator isOpen={isPostCreationOpen}
        onClose={handlePostCreationClose}
      />
    </div>
  );
};

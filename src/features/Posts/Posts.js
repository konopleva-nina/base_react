import style from './Posts.module.scss';
import { Card } from '../../entities';

/**
 * @typedef {import('./types').Posts} Posts
 */

/**
 * @function Posts
 * @param {Posts} props
 * @returns {JSX.Element}
 */

export const Posts = (props) => {
  const { posts } = props;
  return (
    <ul className={style.posts}>
      {posts.map((post) => (
        <Card.Post key={post.id}
          id={post.id}
          name={post.title}
          text={post.body}
        />
      ))}
    </ul>
  );
};

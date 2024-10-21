import style from './Todos.module.scss';
import { Card } from '../../entities';

/**
 * @typedef {import('./types').Todos} Todos
 */

/**
 * @function Todos
 * @param {Todos} props
 * @returns {JSX.Element}
 */

export const Todos = (props) => {
  const { todos } = props;
  return (
    <ul className={style.todos}>
      {todos.map((/**@type {object} */ todo) => (
        <Card key={todo.id}
          id={todo.id}
          name={todo.title}
        />
      ))}
    </ul>
  );
};

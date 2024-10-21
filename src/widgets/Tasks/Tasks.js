import { useEffect } from 'react';
import style from './Tasks.module.scss';
import { useTodos } from 'shared/hooks';
import { Todos, TodosCounter } from 'features';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosState = useTodos();

  useEffect(() => {
    if (!todosState.todoCount) return;
    todosState.getTodos(todosState.todoCount);
  }, [todosState.todoCount]);

  return (
    <div className={style.tasks}>
      <TodosCounter />
      {!todosState.todoCount && <h2>Press the Up button to add todos</h2>}
      {todosState.isTodosLoading ? (
        <h1>Loading ......</h1>
      ) : (
        <Todos todos={todosState.todos} />
      )}
    </div>
  );
};

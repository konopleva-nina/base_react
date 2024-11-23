import { useEffect } from 'react';
import style from './Tasks.module.scss';
import { useTodos } from 'shared/stores';
import { Todos, TodoCounter } from 'features';
import { Preloader } from 'shared/ui/Preloader';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosStore = useTodos();

  useEffect(() => {
    if (!todosStore.todoCount) return;
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  return (
    <div className={style.tasks}>
      <TodoCounter />
      {!todosStore.todoCount && <h2>Press the Up button to add todos</h2>}
      <Todos todos={todosStore.todos} />
      <Preloader isActive={todosStore.isTodosLoading} />
    </div>
  );
};

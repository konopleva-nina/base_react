import { Counter } from 'entities/index';
import { useTodos } from 'shared/stores';

/**
 * @function TodoCounter
 * @returns {JSX.Element}
 */

export const TodoCounter = () => {
  const todosStore = useTodos();
  return (
    <Counter
      name={'Todos count'}
      minCount = {4}
      count={todosStore.todoCount}
      maxCount = {20}
      setCount={todosStore.setTodoCount}
      resetCount={todosStore.resetTodos}
      isDisabled={todosStore.isTodosLoading}
    />
  );
};

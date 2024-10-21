import { Counter } from 'entities/index';
import { useTodos } from 'shared/hooks';

/**
 * @function TodosCounter
 * @returns {JSX.Element}
 */

export const TodosCounter = () => {
  const todosState = useTodos();
  return (
    <Counter
      name={'Todos count'}
      minCount = {4}
      count={todosState.todoCount}
      maxCount = {20}
      setCount={todosState.setTodoCount}
      resetCount={todosState.resetTodos}
    />
  );
};

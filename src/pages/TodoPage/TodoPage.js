import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from 'shared/hooks';
import { Preloader } from 'shared/ui/Preloader';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodos();

  if (!params.todoId) return <h3>Invalid todo id</h3>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodoById(params.todoId);
  }, []);

  if (!todosStore.todo) return <h3>Todo not found</h3>;

  return (
    <>
      <div>
        <h2>{todosStore.todo.title}</h2>
      </div>
      <Preloader isActive={todosStore.isTodoLoading}/>
    </>
  );
};

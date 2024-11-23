export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
  /*State for count */
  todoCount: number;
  setTodoCount: (todoCount: number) => void;
  /*State for todos */
  isTodosLoading: boolean;
  todos: TodoFromAPI[] | [];
  todosErrorMessage: string;
  getTodos: (todoCount: number) => void;
  resetTodos: () => void;
  /*State for todo */
  isTodoLoading: boolean,
  todo: TodoFromAPI | null;
  todoErrorMessage: string;
  getTodoById: (todoId: string) => void;
  resetTodo: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;
export type TodosStoreCreator = (set: Function) => TodosStore;

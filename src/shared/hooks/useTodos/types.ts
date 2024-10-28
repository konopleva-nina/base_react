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
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (todoCount: number) => void;
  resetTodos: () => void;
};

export type TodosStoreCreator = (set: Function) => TodosStore;

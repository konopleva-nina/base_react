export type TodoDetails = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Todos = {
  todos: TodoDetails[];
};

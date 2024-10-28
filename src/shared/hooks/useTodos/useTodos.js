import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').TodosStoreCreator} StoreCreator
 * @typedef {import('./types').TodosStore} Store
*/

export const useTodos = create(/**@type {StoreCreator} */ (set) => ({
  /*State for count */
  todoCount: 0,
  setTodoCount: (todoCount) => set((/**@type {Store} */ store) => ({ ...store, todoCount })),
  /*State for todos */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    try {
      set((/**@type {Store} */ store) => ({ ...store, isTodosLoading: true }));
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Todos not received');
      const todosFromAPI = await response.json();
      set(() => ({ todos: todosFromAPI }));
    } catch (/**@type {*}*/ error) {
      set(() => ({ todosErrorMessage: error.message }));
    } finally {
      set((/**@type {Store} */ store) => ({ ...store, isTodosLoading: false }));
    };
  },

  resetTodos: () => set((/**@type {Store} */ store) => ({ ...store, todos: [] })),
}));

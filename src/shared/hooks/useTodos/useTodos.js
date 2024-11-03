import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils/partial';

/**
 * @typedef {import('./types').TodosStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').TodosStore} Store
*/

/**
 * @function setTodoCount
 * @param {Function} set
 * @param {number} todoCount
 * @returns {void}
 */

const setTodoCount = (set, todoCount) => {
  set(/**@type {SetterCallback}*/(store) => ({
    ...store,
    todoCount,
  }));
};

/**
 * @function getTodos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getTodos = async (set, count) => {
  try {
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodosLoading: true,
      todos: [],
      todosErrorMessage: '',
    }));
    const endPoint = `todos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todos not received');
    const todosFromAPI = await response.json();
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodosLoading: false,
      todos: todosFromAPI,
      todosErrorMessage: '',
    }));
  } catch (/**@type {*}*/ error) {
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodosLoading: false,
      todos: null,
      todosErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetTodos
 * @param {Function} set
 * @returns {void}
 */

const resetTodos = (set) => set((/**@type {SetterCallback} */ store) => ({
  ...store,
  todos: [],
}));

/**
 * @function getTodoById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getTodoById = async (set, id) => {
  try {
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodoLoading: true,
      todo: null,
      todoErrorMessage: '',
    }));
    const endPoint = `todos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todos not received');
    const todoFromAPI = await response.json();
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodoLoading: false,
      todo: todoFromAPI,
      todoErrorMessage: '',
    }));
  } catch (/**@type {*}*/ error) {
    set((/**@type {SetterCallback} */ store) => ({
      ...store,
      isTodoLoading: false,
      todo: null,
      todoErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetTodo
 * @param {Function} set
 * @returns {void}
 */

const resetTodo = (set) => set((/**@type {SetterCallback} */ store) => ({
  ...store,
  todo: null,
}));

export const useTodos = create(/**@type {StoreCreator} */ (set) => ({
  /*State for count */
  todoCount: 0,
  setTodoCount: partial(setTodoCount, set),
  /*State for todos */
  isTodosLoading: false,
  todos: [],
  todosErrorMessage: '',
  getTodos: partial(getTodos, set),
  resetTodos: partial(resetTodos, set),
  /*State for todo */
  isTodoLoading: false,
  todo: null,
  todoErrorMessage: '',
  getTodoById: partial(getTodoById, set),
  resetTodo: partial(resetTodo, set),
}));

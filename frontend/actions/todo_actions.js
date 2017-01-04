import * as APIUtil from '../utils/todo_api_util.js';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import {receiveErrors} from './error_actions';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export function createTodo(todo) {
  return (dispatch) => {
    return APIUtil.createTodo(todo)
      .then( () => dispatch(receiveTodo(todo)),
          err => dispatch(receiveErrors(err.responseJSON)));
  };
}

// export const createTodo = todo => dispatch => (
//   APIUtil.createTodo(todo).then(() => dispatch(receiveTodo(todo)))
// );



export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});

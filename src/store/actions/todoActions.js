import * as actionTypes from "./actionTypes";

export const fetchTodosInit = () => {
  return {
    type: actionTypes.FETCH_TODOS_DATA_INIT,
  };
};

export const fetchTodosSuccess = (data) => {
  return {
    type: actionTypes.FETCH_TODOS_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: actionTypes.FETCH_TODOS_DATA_FAILURE,
    payload: error,
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosInit());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      dispatch(fetchTodosSuccess(data));
    } catch (err) {
      dispatch(fetchTodosFailure(err));
    }
  };
};

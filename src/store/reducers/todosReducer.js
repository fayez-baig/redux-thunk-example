import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_DATA_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_TODOS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_TODOS_DATA_FAILURE:
      console.log(action.payload.message);
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

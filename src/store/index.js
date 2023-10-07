import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { todosReducer } from "./reducers/todosReducer";

export const store = configureStore(
  {
    reducer: {
      todos: todosReducer,
      //add more reducers
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

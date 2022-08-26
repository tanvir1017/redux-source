import { combineReducers } from "redux";
import filterActionReducer from "./filters/filterActionReducer";
import todosActionReducer from "./todos/todosActionReducer";

const rootReducer = combineReducers({
  todos: todosActionReducer,
  filters: filterActionReducer,
});

export default rootReducer;

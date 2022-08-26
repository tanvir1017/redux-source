import {
  ADDED,
  CLEARCOMPLETEDTASK,
  COLORSELECTED,
  COMPLETEDALLTASK,
  DATALOADED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

// Make the dynamic id for the each OBJ
const nextID = (todo) => {
  const dynamicNextID = todo.reduce(
    (maxID, todo) => Math.max(todo.id, maxID),
    -1
  );
  return dynamicNextID + 1;
};

const todosActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATALOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextID(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      const { todoId, electedColor } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: electedColor,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETEDALLTASK:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETEDTASK:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todosActionReducer;

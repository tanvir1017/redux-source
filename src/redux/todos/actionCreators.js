import {
  ADDED,
  CLEARCOMPLETEDTASK,
  COLORSELECTED,
  COMPLETEDALLTASK,
  DATALOADED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const dataLoad = (todos) => {
  return {
    type: DATALOADED,
    payload: todos,
  };
};

export const addTask = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, electedColor) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      electedColor,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const completedAllTask = () => {
  return {
    type: COMPLETEDALLTASK,
  };
};

export const clearCompletedTask = () => {
  return {
    type: CLEARCOMPLETEDTASK,
  };
};

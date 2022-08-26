import { addTask } from "../actionCreators";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(addTask(todo.text));
  };
};

export default addTodo;

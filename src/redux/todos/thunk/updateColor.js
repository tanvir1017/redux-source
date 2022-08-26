import { colorSelected } from "../actionCreators";

const updateColor = (todoId, electedColor) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: electedColor,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColor;

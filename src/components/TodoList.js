import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../redux/todos/thunk/thunkMiddleWare";
import Todo from "./Todo";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi);
  }, [dispatch]);

  const { status, colors } = filters;

  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}

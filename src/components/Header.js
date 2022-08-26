import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import {
  clearCompletedTask,
  completedAllTask,
} from "../redux/todos/actionCreators";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputValue = (e) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0 && input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Type a note");
      return;
    }
  };

  const completeAllTaskHandler = () => {
    dispatch(completedAllTask());
  };
  const clearAllTaskHandler = () => {
    dispatch(clearCompletedTask());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleOnSubmit}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInputValue}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={completeAllTaskHandler}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearAllTaskHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}

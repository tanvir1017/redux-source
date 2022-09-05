import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filterAndSearch/filterAndSearchSlice";

export default function Search() {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="outline-none border-none mr-2 max-w-2xl"
        type="search"
        name="search"
        placeholder="Search"
        defaultValue={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

import { dataLoad } from "../actionCreators";

const fetchApi = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(dataLoad(todos));
};

export default fetchApi;
